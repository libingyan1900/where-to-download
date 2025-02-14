
import React, { useCallback, useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { ComparisonTableProps } from "./types";
import { featureGroups } from "./feature-groups";
import { Room } from "@/components/room-comparison/types";
import { SeparatorRow } from "./SeparatorRow";
import { HeaderRow } from "./HeaderRow";
import { FeatureRow } from "./FeatureRow";

export const ComparisonTable = React.memo(({ 
  rooms, 
  pinnedRooms = [], 
  hideRepeated = false 
}: ComparisonTableProps & { hideRepeated?: boolean }) => {
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
      <HeaderRow title="酒店对比" rooms={sortedRooms} />
      {featureGroups.map((group) => (
        <React.Fragment key={group.title}>
          {group.features.map((feature) => {
            if (feature.key === "roomType") {
              return (
                <React.Fragment key={feature.key}>
                  <HeaderRow title="房型对比" rooms={sortedRooms} />
                  <FeatureRow
                    feature={feature}
                    rooms={sortedRooms}
                    pinnedRooms={pinnedRooms}
                    sortConfig={sortConfig}
                    onSort={handleSort}
                    isAdvantage={isAdvantage}
                    getLabelAlignment={getLabelAlignment}
                  />
                </React.Fragment>
              );
            }

            if (feature.key === "breakfast") {
              return (
                <React.Fragment key={feature.key}>
                  <HeaderRow title="政策对比" rooms={sortedRooms} />
                  <FeatureRow
                    feature={feature}
                    rooms={sortedRooms}
                    pinnedRooms={pinnedRooms}
                    sortConfig={sortConfig}
                    onSort={handleSort}
                    isAdvantage={isAdvantage}
                    getLabelAlignment={getLabelAlignment}
                  />
                </React.Fragment>
              );
            }

            if (hideRepeated && isRowAllSame(feature.key)) {
              return null;
            }

            return (
              <FeatureRow
                key={feature.key}
                feature={feature}
                rooms={sortedRooms}
                pinnedRooms={pinnedRooms}
                sortConfig={sortConfig}
                onSort={handleSort}
                isAdvantage={isAdvantage}
                getLabelAlignment={getLabelAlignment}
              />
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
});

ComparisonTable.displayName = "ComparisonTable";
