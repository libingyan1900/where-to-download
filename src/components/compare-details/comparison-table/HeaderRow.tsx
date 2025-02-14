
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Room } from "@/components/room-comparison/types";

interface HeaderRowProps {
  title: string;
  rooms: Room[];
}

export const HeaderRow: React.FC<HeaderRowProps> = ({ title, rooms }) => {
  return (
    <TableRow>
      <TableCell 
        className="w-[80px] min-w-[80px] max-w-[80px] p-2 sticky left-0 z-20 bg-white"
      >
        <div className="h-8 flex items-center gap-2 whitespace-nowrap">
          <div className="min-w-[3px] w-[3px] h-[14px] bg-blue-500 rounded-full flex-shrink-0" />
          <span className="text-sm font-medium text-gray-900">{title}</span>
        </div>
      </TableCell>
      {rooms.map((_, index) => (
        <TableCell 
          key={index}
          className="w-[140px] min-w-[140px] max-w-[140px] p-2 bg-white"
        >
          <div className="h-8" />
        </TableCell>
      ))}
      {rooms.length < 5 && (
        <TableCell 
          className="w-[140px] min-w-[140px] max-w-[140px] p-2 bg-white"
        >
          <div className="h-8" />
        </TableCell>
      )}
    </TableRow>
  );
};
