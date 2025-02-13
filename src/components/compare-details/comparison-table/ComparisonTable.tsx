
import React, { useCallback, useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ComparisonTableProps } from "./types";
import { featureGroups } from "./feature-groups";
import { FeatureValue } from "./FeatureValue";
import { Room } from "@/components/room-comparison/types";
import { Separator } from "@/components/ui/separator";

export const ComparisonTable = React.memo(({ rooms, pinnedRooms = [], hideRepeated = false }: ComparisonTableProps & { hideRepeated?: boolean }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedRooms = React.useMemo(() => {
    if (!sortConfig) return rooms;
    return [...rooms].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof typeof a];
      const bValue = b[sortConfig.key as keyof typeof b];
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

  const isRowAllSame = useCallback((featureKey: string) => {
    if (!hideRepeated || rooms.length <= 1) return false;
    
    const firstValue = rooms[0][featureKey as keyof Room];
    return rooms.every(room => {
      const value = room[featureKey as keyof Room];
      return value === firstValue;
    });
  }, [hideRepeated, rooms]);

  const isAdvantage = useCallback((rooms: Room[], currentIndex: number, featureKey: string) => {
    if (!hideRepeated) return false;
    
    const currentValue = rooms[currentIndex][featureKey as keyof Room];
    if (currentValue === undefined || currentValue === null) return false;

    switch (featureKey) {
      case 'price':
        return rooms.every((room, i) => 
          i === currentIndex || 
          room.price === undefined || 
          room.price === null || 
          room.price > (rooms[currentIndex].price ?? 0)
        );
      case 'rating':
      case 'starRating':
        return rooms.every((room, i) => 
          i === currentIndex || 
          room[featureKey] === undefined || 
          room[featureKey] === null || 
          (room[featureKey] ?? 0) < (rooms[currentIndex][featureKey] ?? 0)
        );
      case 'size':
        const getNumericSize = (size: string | undefined | null) => 
          size ? parseFloat(size.replace(/[^0-9.]/g, '')) : 0;
        const currentSize = getNumericSize(currentValue as string);
        return rooms.every((room, i) => 
          i === currentIndex || 
          getNumericSize(room.size) < currentSize
        );
      default:
        return false;
    }
  }, [hideRepeated]);

  const getLabelAlignment = (label: string) => {
    if (label.length === 2) return 'pl-6';
    if (label.length === 3) return 'text-center';
    if (label.length === 4) return 'text-center tracking-wider';
    if (label === '装修时间') return 'text-center tracking-wider';
    if (['酒店图片', '房型图片', '取消规则', '确认时效'].includes(label)) {
      return 'pl-4 flex items-center h-full tracking-normal';
    }
    return 'text-center';
  };

  return (
    <>
      <TableRow>
        <TableCell 
          className="w-[80px] min-w-[80px] max-w-[80px] p-2 sticky left-0 z-20 bg-white"
        >
          <div className="h-8 flex items-center">
            <span className="text-sm font-medium text-gray-900">酒店对比</span>
          </div>
        </TableCell>
        {sortedRooms.map((_, index) => (
          <TableCell 
            key={index}
            className="w-[140px] min-w-[140px] max-w-[140px] p-2 bg-white"
          >
            <div className="h-8 flex items-center justify-center">
              <Separator className="w-full bg-gray-100" />
            </div>
          </TableCell>
        ))}
        {rooms.length < 5 && (
          <TableCell 
            className="w-[140px] min-w-[140px] max-w-[140px] p-2 bg-white"
          >
            <div className="h-8 flex items-center justify-center">
              <Separator className="w-full bg-gray-100" />
            </div>
          </TableCell>
        )}
      </TableRow>
      {featureGroups.map((group) => (
        <React.Fragment key={group.title}>
          {group.features.map((feature) => {
            if (hideRepeated && isRowAllSame(feature.key)) {
              return null;
            }

            return (
              <TableRow 
                key={feature.key}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <TableCell 
                  className={cn(
                    "w-[80px] min-w-[80px] max-w-[80px] p-2 font-medium text-gray-600",
                    "whitespace-nowrap sticky left-0 z-20 border-r border-gray-200",
                    "bg-[#F1F1F1] shadow-[2px_0_4px_rgba(0,0,0,0.1)]",
                    "leading-relaxed",
                    getLabelAlignment(feature.label),
                    feature.sortable && "cursor-pointer hover:bg-[#E5E5E5]"
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
                  {feature.label}
                  {feature.sortable && (
                    <span className="ml-1 inline-block w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </TableCell>
                {sortedRooms.map((room, index) => (
                  <TableCell 
                    key={room.id} 
                    className={cn(
                      "w-[140px] min-w-[140px] max-w-[140px] p-2",
                      index < sortedRooms.length - 1 ? "border-r border-gray-200" : "",
                      pinnedRooms.includes(room.id) ? "text-blue-600" : "text-gray-600",
                      isAdvantage(sortedRooms, index, feature.key) && "bg-blue-50/50 font-medium text-blue-600",
                      "focus-within:bg-blue-50/30"
                    )}
                    role="cell"
                  >
                    <FeatureValue room={room} featureKey={feature.key} />
                  </TableCell>
                ))}
                {rooms.length < 5 && (
                  <TableCell 
                    className="w-[140px] min-w-[140px] max-w-[140px] p-2"
                    role="cell"
                  >
                    <div />
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
});

ComparisonTable.displayName = "ComparisonTable";
