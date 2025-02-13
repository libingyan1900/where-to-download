
import React from "react";
import { X, Pin, PinOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Room } from "@/components/room-comparison/types";

interface RoomCardProps {
  room: Room;
  onRemove: (roomId: string) => void;
  onBook: (roomId: string) => void;
  isPinned?: boolean;
  onTogglePin?: (roomId: string) => void;
}

export const RoomCard = ({ 
  room, 
  onRemove, 
  onBook,
  isPinned = false,
  onTogglePin
}: RoomCardProps) => {
  return (
    <div 
      className="relative flex-shrink-0 w-[140px] rounded-lg bg-white/80 border border-gray-100 shadow-sm backdrop-blur-sm animate-fadeIn transition-all group hover:bg-white/90"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#409EFF]/40 to-[#66b1ff]/40" />
      <div className="absolute top-2 right-2">
        <button
          onClick={() => onRemove(room.id)}
          className="p-1 rounded-full bg-white/80 hover:bg-white/95 transition-all group-hover:shadow-sm"
        >
          <X className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
        </button>
      </div>
      <div className="p-3 space-y-2.5">
        <div className="space-y-2">
          {onTogglePin && (
            <button
              onClick={() => onTogglePin(room.id)}
              className="flex items-center gap-1.5 w-full p-1.5 rounded-md bg-white/80 hover:bg-white/95 transition-all group-hover:shadow-sm"
              title={isPinned ? "取消固定" : "固定到左侧"}
            >
              {isPinned ? (
                <Pin className="w-4 h-4 text-[#409EFF]" />
              ) : (
                <PinOff className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              )}
              <span className="text-xs text-gray-600 group-hover:text-gray-800">
                {isPinned ? "取消固定" : "固定到左侧"}
              </span>
            </button>
          )}
          <h3 className="text-sm font-semibold text-[#409EFF] line-clamp-2" title={room.hotelName}>
            {room.hotelName}
          </h3>
        </div>
        <p className="text-xs text-gray-600 line-clamp-2 min-h-[32px]" title={room.roomType}>
          {room.roomType}
        </p>
        <div className="flex items-baseline gap-0.5 mt-auto">
          <span className="text-base font-bold text-[#409EFF]">¥{room.price}</span>
          <span className="text-xs text-gray-500">/晚</span>
        </div>
        <Button 
          onClick={() => onBook(room.id)}
          className="w-full h-7 text-xs bg-[#409EFF] hover:bg-[#66b1ff] text-white"
        >
          预订
        </Button>
      </div>
    </div>
  );
};
