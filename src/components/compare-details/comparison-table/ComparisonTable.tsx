
import React, { useCallback, useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ComparisonTableProps } from "./types";
import { featureGroups } from "./feature-groups";
import { FeatureValue } from "./FeatureValue";

export const ComparisonTable = React.memo(({ rooms, pinnedRooms = [] }: ComparisonTableProps) => {
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

  return (
    <div 
      className="relative"
      role="table"
      aria-label="房型对比表格"
    >
      {featureGroups.map((group) => (
        <React.Fragment key={group.title}>
          <TableRow>
            <TableCell
              colSpan={rooms.length + (rooms.length < 5 ? 1 : 0)}
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
              {sortedRooms.map((room) => (
                <TableCell 
                  key={room.id} 
                  className={cn(
                    "w-[250px] p-2 border-r border-gray-200",
                    pinnedRooms.includes(room.id) ? "text-blue-600" : "text-gray-600",
                    "focus-within:bg-blue-50/30"
                  )}
                  role="cell"
                >
                  <FeatureValue room={room} featureKey={feature.key} />
                </TableCell>
              ))}
              {rooms.length < 5 && (
                <TableCell 
                  className="w-[250px] p-2"
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
