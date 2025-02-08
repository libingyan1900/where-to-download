
import React from "react";
import { Star, Image } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Room } from "@/components/room-comparison/types";

interface ComparisonTableProps {
  rooms: Room[];
  pinnedRooms?: string[];
}

const featureGroups = [
  {
    title: "酒店特征",
    features: [
      { key: "hotelName", label: "酒店名称" },
      { key: "renovationTime", label: "装修时间" },
      { key: "rating", label: "评分" },
      { key: "starRating", label: "星级" },
      { key: "distanceInKm", label: "距离" },
      { key: "facilities", label: "酒店设施" },
      { key: "hotelImage", label: "酒店图片" },
    ],
  },
  {
    title: "房型特征",
    features: [
      { key: "roomType", label: "房型名称" },
      { key: "size", label: "面积" },
      { key: "floor", label: "楼层" },
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

const renderFeatureValue = (room: Room, key: string) => {
  switch (key) {
    case "starRating":
      return (
        <div className="flex items-center">
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
        <div className="relative w-32 h-24 rounded-lg overflow-hidden glass-card">
          <Image className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
        </div>
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
};

export const ComparisonTable = ({ rooms, pinnedRooms = [] }: ComparisonTableProps) => {
  return (
    <>
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
              className="hover:bg-gray-50/50 transition-colors border-b border-gray-200"
            >
              <TableCell className="w-[160px] p-2 font-medium text-gray-700 bg-gray-50/30 whitespace-nowrap sticky left-0 z-20 border-r border-gray-200">
                {feature.label}
              </TableCell>
              {rooms.map((room) => (
                <TableCell 
                  key={room.id} 
                  className={`w-[200px] p-2 border-r border-gray-200 ${
                    pinnedRooms.includes(room.id) ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {renderFeatureValue(room, feature.key)}
                </TableCell>
              ))}
              {rooms.length < 5 && (
                <TableCell 
                  className="w-[200px] p-2" 
                  style={{ 
                    border: 'none', 
                    backgroundColor: 'transparent',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: 'none',
                    borderTop: 'none'
                  }}
                >
                  {/* Empty cell without any borders */}
                </TableCell>
              )}
            </TableRow>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
