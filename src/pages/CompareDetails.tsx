
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
  const [pinnedRooms, setPinnedRooms] = React.useState<string[]>([]);

  const handleRemoveRoom = (roomId: string) => {
    setRooms(prev => prev.filter(room => room.id !== roomId));
    setPinnedRooms(prev => prev.filter(id => id !== roomId));
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

  const handleTogglePin = (roomId: string) => {
    setPinnedRooms(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  if (rooms.length === 0) {
    navigate('/room-comparison');
    return null;
  }

  // 对房间进行排序，将固定的房间排在前面
  const sortedRooms = [...rooms].sort((a, b) => {
    const aIsPinned = pinnedRooms.includes(a.id);
    const bIsPinned = pinnedRooms.includes(b.id);
    if (aIsPinned && !bIsPinned) return -1;
    if (!aIsPinned && bIsPinned) return 1;
    return 0;
  });

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

      <div className="pt-14 pb-4 px-4 max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="p-3 min-w-[140px]">
                  <div className="font-medium text-gray-700">对比房型</div>
                </td>
                {sortedRooms.map((room) => (
                  <td key={room.id} className="p-3 min-w-[140px]">
                    <RoomCard
                      room={room}
                      onRemove={handleRemoveRoom}
                      onBook={handleBook}
                      isPinned={pinnedRooms.includes(room.id)}
                      onTogglePin={handleTogglePin}
                    />
                  </td>
                ))}
                {rooms.length < 5 && (
                  <td className="p-3 min-w-[140px]">
                    <AddRoomButton
                      remainingSlots={5 - rooms.length}
                      onClick={handleAddRoom}
                    />
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-4 pb-8 max-w-7xl mx-auto">
        <ComparisonTable 
          rooms={sortedRooms}
          pinnedRooms={pinnedRooms}
        />
      </div>
    </div>
  );
};

export default CompareDetails;
