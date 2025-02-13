
import React, { useCallback, useState } from "react";
import { ArrowLeftRight } from "lucide-react";
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
                  <FeatureValue room={room} featureKey={feature.key} />
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
