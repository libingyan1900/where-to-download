import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Room } from "@/components/room-comparison/types";
import { useToast } from "@/components/ui/use-toast";
import { RoomCard } from "@/components/compare-details/RoomCard";
import { AddRoomButton } from "@/components/compare-details/AddRoomButton";
import { ComparisonTable } from "@/components/compare-details/ComparisonTable";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <div className="flex items-center h-14 px-4">
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

      <div className="w-full overflow-x-auto">
        <div className="min-w-[720px] p-4">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-white">
                <TableHead className="w-[160px] px-2 py-4 font-semibold sticky left-0 z-20 bg-white border-r border-gray-200">
                  酒店列表
                </TableHead>
                {sortedRooms.map((room) => (
                  <TableHead 
                    key={room.id}
                    className="w-[200px] p-2 border-r border-gray-200"
                  >
                    <RoomCard
                      room={room}
                      onRemove={handleRemoveRoom}
                      onBook={handleBook}
                      isPinned={pinnedRooms.includes(room.id)}
                      onTogglePin={handleTogglePin}
                    />
                  </TableHead>
                ))}
                {rooms.length < 5 && (
                  <TableHead className="w-[200px] p-2">
                    <AddRoomButton
                      remainingSlots={5 - rooms.length}
                      onClick={handleAddRoom}
                    />
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              <ComparisonTable 
                rooms={sortedRooms}
                pinnedRooms={pinnedRooms}
              />
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CompareDetails;
