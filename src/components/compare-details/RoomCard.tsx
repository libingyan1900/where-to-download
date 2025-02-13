
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
      className="relative flex-shrink-0 w-[200px] rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-40" />
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(room.id);
          }}
          className="p-1 rounded-full bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all"
        >
          <X className="w-3 h-3 text-gray-400 hover:text-gray-600" />
        </button>
      </div>
      <div className="p-3 space-y-2.5">
        <div className="space-y-2">
          {onTogglePin && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTogglePin(room.id);
              }}
              className="flex items-center gap-1.5 w-full p-1.5 rounded-md bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all"
              title={isPinned ? "取消固定" : "固定到左侧"}
            >
              {isPinned ? (
                <Pin className="w-4 h-4 text-blue-600" />
              ) : (
                <PinOff className="w-4 h-4 text-gray-400 hover:text-gray-600" />
              )}
              <span className="text-xs text-gray-600 hover:text-gray-800">
                {isPinned ? "取消固定" : "固定到左侧"}
              </span>
            </button>
          )}
          <h3 className="text-sm font-semibold text-blue-900 line-clamp-2" title={room.hotelName}>
            {room.hotelName}
          </h3>
        </div>
        <p className="text-xs text-gray-600 line-clamp-2 min-h-[32px]" title={room.roomType}>
          {room.roomType}
        </p>
        <div className="flex items-baseline gap-0.5 mt-auto">
          <span className="text-base font-bold text-blue-600">¥{room.price}</span>
          <span className="text-xs text-gray-500">/晚</span>
        </div>
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            onBook(room.id);
          }}
          className="w-full h-7 text-xs bg-blue-500 hover:bg-blue-600 text-white shadow-sm hover:shadow"
        >
          预订
        </Button>
      </div>
    </div>
  );
};
