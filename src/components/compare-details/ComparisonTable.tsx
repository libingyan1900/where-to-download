
import React, { useCallback, useState } from "react";
import { Star, Image, ArrowLeftRight } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Room } from "@/components/room-comparison/types";
import { cn } from "@/lib/utils";

interface ComparisonTableProps {
  rooms: Room[];
  pinnedRooms?: string[];
}

const featureGroups = [
  {
    title: "酒店特征",
    features: [
      { key: "hotelName", label: "酒店名称", sortable: true },
      { key: "renovationTime", label: "装修时间", sortable: true },
      { key: "rating", label: "评分", sortable: true },
      { key: "starRating", label: "星级", sortable: true },
      { key: "distanceInKm", label: "距离", sortable: true },
      { key: "facilities", label: "酒店设施" },
      { key: "hotelImage", label: "酒店图片" },
    ],
  },
  {
    title: "房型特征",
    features: [
      { key: "roomType", label: "房型名称", sortable: true },
      { key: "size", label: "面积", sortable: true },
      { key: "floor", label: "楼层", sortable: true },
      { key: "window", label: "窗户" },
      { key: "bedType", label: "床型" },
      { key: "roomImage", label: "房型图片" },
    ],
  },
  {
    title: "政策信息",
    features: [
      { key: "breakfast", label: "早餐" },
      { key: "cancellationRules", label: "取消规则" },
      { key: "confirmationRules", label: "确认时效" },
    ],
  },
];

const ImageWithFallback: React.FC<{ 
  src?: string; 
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  return (
    <div className={cn(
      "relative w-32 h-24 rounded-lg overflow-hidden glass-card",
      "group hover:shadow-lg transition-all duration-300",
      className
    )}>
      {!error && src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setError(true)}
          loading="lazy"
        />
      ) : (
        <Image 
          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" 
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export const ComparisonTable = React.memo(({ rooms, pinnedRooms = [] }: ComparisonTableProps) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedRooms = React.useMemo(() => {
    if (!sortConfig) return rooms;

    return [...rooms].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof Room];
      const bValue = b[sortConfig.key as keyof Room];

      if (aValue === bValue) return 0;
      if (aValue === undefined || aValue === null) return 1;
      if (bValue === undefined || bValue === null) return -1;

      const comparison = aValue > bValue ? 1 : -1;
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [rooms, sortConfig]);

  const handleSort = useCallback((key: string) => {
    setSortConfig(current => {
      if (current?.key === key) {
        if (current.direction === 'asc') {
          return { key, direction: 'desc' };
        }
        return null;
      }
      return { key, direction: 'asc' };
    });
  }, []);

  const renderFeatureValue = useCallback((room: Room, key: string) => {
    switch (key) {
      case "starRating":
        return (
          <div className="flex items-center" role="img" aria-label={`${room.starRating || 0}星级`}>
            {Array.from({ length: room.starRating || 0 }).map((_, index) => (
              <Star
                key={index}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
        );
      case "hotelImage":
      case "roomImage":
        return (
          <ImageWithFallback
            src={room[key]?.toString()}
            alt={key === "hotelImage" ? `${room.hotelName}照片` : `${room.roomType}照片`}
          />
        );
      case "facilities":
        return room.facilities?.join("、") || "-";
      case "distanceInKm":
        return `${(room.distanceInKm * 1000).toFixed(0)}米`;
      case "rating":
        return (
          <div className="flex items-center">
            <span className="text-lg font-semibold text-blue-600">
              {room.rating}
            </span>
            <span className="text-sm text-gray-500 ml-1">/5.0</span>
          </div>
        );
      default:
        return room[key as keyof Room]?.toString() || "-";
    }
  }, []);

  return (
    <div 
      className="relative"
      role="table"
      aria-label="房型对比表格"
    >
      <div className="absolute right-4 top-4 text-sm text-gray-500 flex items-center gap-2">
        <ArrowLeftRight className="w-4 h-4" />
        <span>左右滑动查看更多</span>
      </div>

      {featureGroups.map((group) => (
        <React.Fragment key={group.title}>
          <TableRow>
            <TableCell
              colSpan={rooms.length + (rooms.length < 5 ? 2 : 1)}
              className="bg-blue-50/50 backdrop-blur-sm font-medium text-blue-900 border-t-2 border-blue-100"
            >
              {group.title}
            </TableCell>
          </TableRow>
          {group.features.map((feature) => (
            <TableRow 
              key={feature.key}
              className="hover:bg-gray-50/50 transition-colors"
            >
              <TableCell 
                className={cn(
                  "w-[140px] p-2 font-medium text-gray-700 bg-gray-50/30",
                  "whitespace-nowrap sticky left-0 z-20 border-r border-gray-200",
                  feature.sortable && "cursor-pointer hover:bg-gray-100"
                )}
                onClick={() => feature.sortable && handleSort(feature.key)}
                role="rowheader"
                aria-sort={
                  sortConfig?.key === feature.key 
                    ? sortConfig.direction === 'asc' 
                      ? 'ascending' 
                      : 'descending'
                    : undefined
                }
              >
                <div className="flex items-center gap-1">
                  {feature.label}
                  {feature.sortable && (
                    <div className="w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </TableCell>
              {sortedRooms.map((room) => (
                <TableCell 
                  key={room.id} 
                  className={cn(
                    "w-[200px] p-2 border-r border-gray-200",
                    pinnedRooms.includes(room.id) ? "text-blue-600" : "text-gray-600",
                    "focus-within:bg-blue-50/30"
                  )}
                  role="cell"
                >
                  {renderFeatureValue(room, feature.key)}
                </TableCell>
              ))}
              {rooms.length < 5 && (
                <TableCell 
                  className="w-[200px] p-2"
                  role="cell"
                >
                  <div />
                </TableCell>
              )}
            </TableRow>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
});

ComparisonTable.displayName = "ComparisonTable";
