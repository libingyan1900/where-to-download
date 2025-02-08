
import { motion } from "framer-motion";
import { Building2, Users, UtensilsCrossed, FileCheck, Ban } from "lucide-react";
import { Room } from "./types";

interface CurrentRoomProps {
  room: Room;
}

export const CurrentRoom = ({ room }: CurrentRoomProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-base font-medium text-gray-900 mb-3">当前选择的房型</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden"
      >
        <img
          src={room.image}
          alt={room.roomType}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 space-y-3">
          <div>
            <h3 className="text-base font-medium text-gray-900">{room.hotelName}</h3>
            <p className="text-sm text-gray-600">{room.roomType}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-blue-600">¥{room.price}</span>
            <span className="text-sm text-gray-500">每晚</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Building2 className="w-4 h-4 mr-1" />
              <span>{room.size}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>可住{room.maxGuests}人</span>
            </div>
          </div>
          <div className="space-y-2 border-t border-gray-100 pt-2">
            <div className="flex items-center text-sm text-gray-600">
              <UtensilsCrossed className="w-4 h-4 mr-2" />
              <span>{room.breakfast}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <FileCheck className="w-4 h-4 mr-2" />
              <span>{room.confirmationRules}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Ban className="w-4 h-4 mr-2" />
              <span>{room.cancellationRules}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
