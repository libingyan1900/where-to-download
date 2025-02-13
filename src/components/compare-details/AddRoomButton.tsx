
import React from "react";
import { Plus } from "lucide-react";

interface AddRoomButtonProps {
  remainingSlots: number;
  onClick: () => void;
}

export const AddRoomButton = ({ remainingSlots, onClick }: AddRoomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full rounded-lg bg-white/80 border border-dashed border-gray-300 shadow-sm backdrop-blur-sm animate-fadeIn transition-all group hover:bg-white/90"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200/40 to-gray-300/40" />
      <div className="p-2.5 space-y-2 flex flex-col items-center justify-center h-[160px]">
        <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
        <div className="space-y-1.5">
          <span className="block text-sm text-gray-500 group-hover:text-gray-700">添加房型</span>
          <span className="block text-xs text-gray-400">
            还可添加 {remainingSlots} 个
          </span>
        </div>
      </div>
    </button>
  );
};
