
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
    <div className="relative w-full rounded-lg bg-white border border-[#33C3F0]/30 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#33C3F0]" />
      <div className="absolute top-2.5 right-2.5 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(room.id);
          }}
          className="p-1.5 rounded-full bg-white hover:bg-[#F1F0FB] shadow-sm hover:shadow transition-all"
        >
          <X className="w-3.5 h-3.5 text-[#8E9196] hover:text-[#221F26]" />
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
              className="flex items-center gap-2 w-full p-1.5 rounded-md bg-white hover:bg-[#F1F0FB] shadow-sm hover:shadow transition-all"
              title={isPinned ? "取消固定" : "固定到左侧"}
            >
              {isPinned ? (
                <Pin className="w-4 h-4 text-[#33C3F0]" />
              ) : (
                <PinOff className="w-4 h-4 text-[#8E9196] hover:text-[#221F26]" />
              )}
              <span className="text-xs text-[#8E9196] hover:text-[#221F26] font-medium">
                {isPinned ? "取消固定" : "固定到左侧"}
              </span>
            </button>
          )}
          <h3 className="text-sm font-semibold text-[#221F26] line-clamp-2 leading-snug" title={room.hotelName}>
            {room.hotelName}
          </h3>
        </div>
        <p className="text-xs text-[#8A898C] line-clamp-2 min-h-[28px] leading-relaxed" title={room.roomType}>
          {room.roomType}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-[#33C3F0]">¥{room.price}</span>
          <span className="text-xs text-[#8E9196]">/晚</span>
        </div>
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            onBook(room.id);
          }}
          className="w-full h-7 text-sm bg-[#33C3F0] hover:bg-[#1EAEDB] text-white shadow-sm hover:shadow"
        >
          预订
        </Button>
      </div>
    </div>
  );
};
