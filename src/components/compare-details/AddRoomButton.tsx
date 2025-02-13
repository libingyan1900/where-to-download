
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
      className="relative flex-shrink-0 w-[200px] rounded-lg bg-white/80 border border-dashed border-gray-300 shadow-sm backdrop-blur-sm animate-fadeIn transition-all group hover:bg-white/90"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200/40 to-gray-300/40" />
      <div className="p-3 space-y-2.5 h-[182px] flex flex-col items-center justify-center">
        <Plus className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
        <span className="text-sm text-gray-500 group-hover:text-gray-700">添加房型</span>
        <span className="text-xs text-gray-400">
          还可添加 {remainingSlots} 个
        </span>
      </div>
    </button>
  );
};
