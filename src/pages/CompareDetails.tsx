
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Room } from "@/components/room-comparison/types";
import { useToast } from "@/components/ui/use-toast";
import { RoomCard } from "@/components/compare-details/RoomCard";
import { AddRoomButton } from "@/components/compare-details/AddRoomButton";
import { ComparisonTable } from "@/components/compare-details/comparison-table/ComparisonTable";
import { useIsMobile } from "@/hooks/use-mobile";
import { Switch } from "@/components/ui/switch";
import { 
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const CompareDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [rooms, setRooms] = React.useState<Room[]>(location.state?.selectedRooms as Room[] || []);
  const [pinnedRooms, setPinnedRooms] = React.useState<string[]>([]);
  const [hideRepeated, setHideRepeated] = React.useState(false);

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
        variant: "destructive"
      });
      return;
    }
    navigate('/room-comparison');
  };

  const handleTogglePin = (roomId: string) => {
    setPinnedRooms(prev => prev.includes(roomId) ? prev.filter(id => id !== roomId) : [...prev, roomId]);
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
    <div className="min-h-screen bg-[#F1F0FB]">
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[#E2D1C3] z-10">
        <div className="flex items-center h-14 px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-[#8E9196] hover:text-[#221F26] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
          <h1 className="flex-1 text-center text-lg font-medium text-[#221F26]">房型对比</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="fixed top-14 bottom-0 left-0 right-0 overflow-x-auto overflow-y-auto overscroll-none">
        <div className="min-w-[480px] relative">
          <div className="w-full" style={{ WebkitOverflowScrolling: 'touch' }}>
            <Table>
              <TableBody className="relative">
                <TableRow className="border-b align-top">
                  <TableCell className="w-[80px] min-w-[80px] max-w-[80px] p-2 border-r bg-[#F1F1F1] text-[#8A898C] sticky left-0 z-30 shadow-[2px_0_4px_rgba(0,0,0,0.1)]">
                    <div className="h-[160px] w-full flex flex-col items-center justify-center gap-2">
                      <span className="text-sm font-medium">隐藏相同</span>
                      <Switch
                        checked={hideRepeated}
                        onCheckedChange={setHideRepeated}
                      />
                    </div>
                  </TableCell>
                  {sortedRooms.map((room, index) => (
                    <TableCell 
                      key={room.id} 
                      className={`w-[140px] min-w-[140px] max-w-[140px] p-2 bg-white ${index < sortedRooms.length - 1 ? 'border-r border-[#E2D1C3]' : ''}`}
                    >
                      <RoomCard
                        room={room}
                        onRemove={handleRemoveRoom}
                        onBook={handleBook}
                        isPinned={pinnedRooms.includes(room.id)}
                        onTogglePin={handleTogglePin}
                      />
                    </TableCell>
                  ))}
                  {rooms.length < 5 && (
                    <TableCell className="w-[140px] min-w-[140px] max-w-[140px] p-2 bg-white">
                      <AddRoomButton
                        remainingSlots={5 - rooms.length}
                        onClick={handleAddRoom}
                      />
                    </TableCell>
                  )}
                </TableRow>
                <ComparisonTable 
                  rooms={sortedRooms}
                  pinnedRooms={pinnedRooms}
                  hideRepeated={hideRepeated}
                />
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareDetails;
