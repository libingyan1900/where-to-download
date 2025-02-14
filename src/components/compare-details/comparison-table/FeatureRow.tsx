
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Room } from "@/components/room-comparison/types";
import { FeatureValue } from "./FeatureValue";
import { Feature } from "./types";

interface FeatureRowProps {
  feature: Feature;
  rooms: Room[];
  pinnedRooms: string[];
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null;
  onSort: (key: string) => void;
  isAdvantage: (rooms: Room[], currentIndex: number, featureKey: string) => boolean;
  getLabelAlignment: (label: string) => string;
}

export const FeatureRow: React.FC<FeatureRowProps> = ({
  feature,
  rooms,
  pinnedRooms,
  sortConfig,
  onSort,
  isAdvantage,
  getLabelAlignment,
}) => {
  return (
    <TableRow className="hover:bg-gray-50/50 transition-colors">
      <TableCell 
        className={cn(
          "w-[80px] min-w-[80px] max-w-[80px] p-2 font-medium text-gray-600",
          "whitespace-nowrap sticky left-0 z-20 border-r border-gray-200",
          "bg-[#F1F1F1] shadow-[2px_0_4px_rgba(0,0,0,0.1)]",
          "leading-relaxed",
          getLabelAlignment(feature.label),
          feature.sortable && "cursor-pointer hover:bg-[#E5E5E5]"
        )}
        onClick={() => feature.sortable && onSort(feature.key)}
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
      {rooms.map((room, index) => (
        <TableCell 
          key={room.id} 
          className={cn(
            "w-[140px] min-w-[140px] max-w-[140px] p-2",
            index < rooms.length - 1 ? "border-r border-gray-200" : "",
            pinnedRooms.includes(room.id) ? "text-blue-600" : "text-gray-600",
            isAdvantage(rooms, index, feature.key) && "bg-blue-50/50 font-medium text-blue-600",
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
};
