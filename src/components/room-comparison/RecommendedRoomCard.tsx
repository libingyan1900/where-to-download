
import { motion } from "framer-motion";
import { UtensilsCrossed, Ban, GitCompare, Plus, Navigation } from "lucide-react";
import { Room } from "./types";

interface RecommendedRoomCardProps {
  room: Room;
  isSelected: boolean;
  onToggleSelection: (roomId: string) => void;
  index: number;
}

export const RecommendedRoomCard = ({ 
  room, 
  isSelected, 
  onToggleSelection,
  index 
}: RecommendedRoomCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`bg-white rounded-lg shadow-sm overflow-hidden ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div className="p-3">
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900 truncate">{room.hotelName}</h3>
              <div className="flex items-center text-xs text-gray-600">
                <Navigation className="w-3 h-3 mr-1" />
                <span>距金茂大酒店 {(room.distanceInKm * 1000).toFixed(0)}米</span>
              </div>
            </div>
            <p className="text-xs text-gray-600">{room.roomType}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center text-xs text-gray-600">
              <UtensilsCrossed className="w-3 h-3 mr-1" />
              <span className="truncate">{room.breakfast}</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Ban className="w-3 h-3 mr-1" />
              <span className="truncate">{room.cancellationRules}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-base font-semibold text-blue-600">¥{room.price}</span>
            <button
              onClick={() => onToggleSelection(room.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm ${
                isSelected
                  ? 'bg-blue-600 text-white'
                  : 'border border-blue-600 text-blue-600'
              }`}
            >
              {isSelected ? (
                <>
                  <GitCompare className="w-3.5 h-3.5" />
                  已选择
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  加入对比
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
