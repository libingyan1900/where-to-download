
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Room } from "@/components/room-comparison/types";
import { useToast } from "@/components/ui/use-toast";
import { RoomCard } from "@/components/compare-details/RoomCard";
import { AddRoomButton } from "@/components/compare-details/AddRoomButton";
import { ComparisonTable } from "@/components/compare-details/ComparisonTable";

const CompareDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [rooms, setRooms] = React.useState<Room[]>(
    location.state?.selectedRooms as Room[] || []
  );

  const handleRemoveRoom = (roomId: string) => {
    setRooms(prev => prev.filter(room => room.id !== roomId));
  };

  const handleBook = (roomId: string) => {
    console.log('Booking room:', roomId);
  };

  const handleAddRoom = () => {
    if (rooms.length >= 5) {
      toast({
        description: "最多只能对比5个房型",
        variant: "destructive",
      });
      return;
    }
    navigate('/room-comparison');
  };

  if (rooms.length === 0) {
    navigate('/room-comparison');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-10">
        <div className="flex items-center h-14 px-4 max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
          <h1 className="flex-1 text-center text-lg font-medium">房型对比</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="fixed top-14 left-0 right-0 bg-gradient-to-b from-white/95 via-white/90 to-transparent backdrop-blur-[2px] z-10">
        <div className="px-4 py-3 max-w-7xl mx-auto">
          <div className="flex gap-3 mb-0 overflow-x-auto pb-2 scrollbar-hide">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onRemove={handleRemoveRoom}
                onBook={handleBook}
              />
            ))}
            {rooms.length < 5 && (
              <AddRoomButton
                remainingSlots={5 - rooms.length}
                onClick={handleAddRoom}
              />
            )}
          </div>
        </div>
      </div>

      <div className="pt-40 px-4 pb-8 max-w-7xl mx-auto">
        <ComparisonTable rooms={rooms} />
      </div>
    </div>
  );
};

export default CompareDetails;
