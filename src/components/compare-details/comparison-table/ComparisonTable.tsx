
import React, { useCallback, useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ComparisonTableProps } from "./types";
import { featureGroups } from "./feature-groups";
import { FeatureValue } from "./FeatureValue";
import { Room } from "@/components/room-comparison/types";

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

  const shouldHideCell = useCallback((rooms: Room[], index: number, featureKey: string) => {
    if (!hideRepeated || index === 0) return false;
    const currentValue = rooms[index][featureKey as keyof Room];
    const previousValue = rooms[index - 1][featureKey as keyof Room];
    return currentValue === previousValue;
  }, [hideRepeated]);

  return (
    <>
      {featureGroups.map((group) => (
        <React.Fragment key={group.title}>
          {group.features.map((feature) => (
            <TableRow 
              key={feature.key}
              className="hover:bg-gray-50/50 transition-colors"
            >
              <TableCell 
                className={cn(
                  "w-[120px] min-w-[120px] max-w-[120px] p-2 font-medium text-gray-700 bg-gray-50/30",
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
              {sortedRooms.map((room, index) => (
                <TableCell 
                  key={room.id} 
                  className={cn(
                    "w-[200px] min-w-[200px] max-w-[200px] p-2",
                    index < sortedRooms.length - 1 ? "border-r border-gray-200" : "",
                    pinnedRooms.includes(room.id) ? "text-blue-600" : "text-gray-600",
                    "focus-within:bg-blue-50/30"
                  )}
                  role="cell"
                >
                  {!shouldHideCell(sortedRooms, index, feature.key) && (
                    <FeatureValue room={room} featureKey={feature.key} />
                  )}
                </TableCell>
              ))}
              {rooms.length < 5 && (
                <TableCell 
                  className="w-[200px] min-w-[200px] max-w-[200px] p-2"
                  role="cell"
                >
                  <div />
                </TableCell>
              )}
            </TableRow>
          ))}
        </React.Fragment>
      ))}
    </>
  );
});

ComparisonTable.displayName = "ComparisonTable";
