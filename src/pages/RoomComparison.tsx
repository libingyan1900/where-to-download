
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopNavBar } from "@/components/room-comparison/TopNavBar";
import { CurrentRoom } from "@/components/room-comparison/CurrentRoom";
import { RecommendedRoomCard } from "@/components/room-comparison/RecommendedRoomCard";
import { CompareButton } from "@/components/room-comparison/CompareButton";
import type { Room } from "@/components/room-comparison/types";

const RoomComparison = () => {
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  
  const currentRoom: Room = {
    id: "1",
    hotelName: "金茂大酒店",
    roomType: "豪华大床房",
    price: 888,
    size: "48㎡",
    maxGuests: 2,
    features: [
      { name: "免费WiFi", available: true },
      { name: "24小时管家服务", available: true },
      { name: "行政酒廊", available: true },
      { name: "观景阳台", available: true }
    ],
    breakfast: "双人自助早餐",
    confirmationRules: "立即确认",
    cancellationRules: "预订后24小时内可免费取消",
    distanceInKm: 0,
    renovationTime: "2023年",
    rating: 4.8,
    starRating: 5,
    facilities: ["停车场", "健身房", "游泳池"],
    floor: "25-88层",
    window: "落地窗",
    bedType: "特大床"
  };

  const recommendedRooms: Room[] = [
    {
      id: "2",
      hotelName: "丽思卡尔顿",
      roomType: "豪华江景房",
      price: 1088,
      size: "52㎡",
      maxGuests: 2,
      features: [
        { name: "免费WiFi", available: true },
        { name: "24小时管家服务", available: true },
        { name: "行政酒廊", available: true },
        { name: "观景阳台", available: true }
      ],
      breakfast: "双人自助早餐",
      confirmationRules: "立即确认",
      cancellationRules: "预订后12小时内可免费取消",
      distanceInKm: 0.8,
      renovationTime: "2022年",
      rating: 4.9,
      starRating: 5,
      facilities: ["停车场", "健身房", "游泳池", "SPA"],
      floor: "35-98层",
      window: "观江落地窗",
      bedType: "特大床"
    },
    {
      id: "3",
      hotelName: "华尔道夫",
      roomType: "行政套房",
      price: 1288,
      size: "65㎡",
      maxGuests: 2,
      features: [
        { name: "免费WiFi", available: true },
        { name: "24小时管家服务", available: true },
        { name: "行政酒廊", available: true },
        { name: "观景阳台", available: true }
      ],
      breakfast: "双人自助早餐 + 下午茶",
      confirmationRules: "立即确认",
      cancellationRules: "预订后48小时内可免费取消",
      distanceInKm: 1.2,
      renovationTime: "2021年",
      rating: 4.7,
      starRating: 5,
      facilities: ["停车场", "健身房", "游泳池", "SPA", "行政酒廊"],
      floor: "40-108层",
      window: "全景落地窗",
      bedType: "特大床"
    }
  ];

  const handleCompare = () => {
    if (selectedRooms.length > 0) {
      const selectedRoomsData = [
        currentRoom,
        ...recommendedRooms.filter(room => selectedRooms.includes(room.id))
      ];
      navigate('/compare-details', { 
        state: { 
          selectedRooms: selectedRoomsData
        } 
      });
    }
  };

  const toggleRoomSelection = (roomId: string) => {
    setSelectedRooms(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <TopNavBar />
      
      <div className="pt-14 pb-20 px-4">
        <CurrentRoom room={currentRoom} />
        
        <div>
          <h2 className="text-base font-medium text-gray-900 mb-3">推荐房型</h2>
          <div className="space-y-4">
            {recommendedRooms.map((room, index) => (
              <RecommendedRoomCard
                key={room.id}
                room={room}
                isSelected={selectedRooms.includes(room.id)}
                onToggleSelection={toggleRoomSelection}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <CompareButton
        selectedCount={selectedRooms.length}
        onCompare={handleCompare}
      />
    </div>
  );
};

export default RoomComparison;
