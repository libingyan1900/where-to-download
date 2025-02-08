
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Room } from "@/components/room-comparison/types";

interface RoomCardProps {
  room: Room;
  onRemove: (roomId: string) => void;
  onBook: (roomId: string) => void;
}

export const RoomCard = ({ room, onRemove, onBook }: RoomCardProps) => {
  return (
    <div 
      className="relative flex-shrink-0 w-[140px] rounded-lg bg-white/80 border border-gray-100 shadow-sm backdrop-blur-sm animate-fadeIn transition-all group hover:bg-white/90"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/40 to-blue-600/40" />
      <button
        onClick={() => onRemove(room.id)}
        className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white/95 transition-all group-hover:shadow-sm"
      >
        <X className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
      </button>
      <div className="p-3 space-y-2.5">
        <h3 className="text-sm font-semibold text-blue-900 line-clamp-2 min-h-[40px]" title={room.hotelName}>
          {room.hotelName}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-2 min-h-[32px]" title={room.roomType}>
          {room.roomType}
        </p>
        <div className="flex items-baseline gap-0.5 mt-auto">
          <span className="text-base font-bold text-blue-600">¥{room.price}</span>
          <span className="text-xs text-gray-500">/晚</span>
        </div>
        <Button 
          onClick={() => onBook(room.id)}
          className="w-full h-7 text-xs bg-blue-500/90 hover:bg-blue-600/90 text-white"
        >
          预订
        </Button>
      </div>
    </div>
  );
};
