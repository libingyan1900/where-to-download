
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Room } from "@/components/room-comparison/types";

interface SeparatorRowProps {
  rooms: Room[];
}

export const SeparatorRow: React.FC<SeparatorRowProps> = ({ rooms }) => {
  return (
    <TableRow>
      <TableCell 
        className="w-[80px] min-w-[80px] max-w-[80px] p-2 sticky left-0 z-20 bg-white"
      >
        <div className="h-8 flex items-center justify-center">
          <Separator className="w-full bg-gray-100" />
        </div>
      </TableCell>
      {rooms.map((_, index) => (
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
  );
};
