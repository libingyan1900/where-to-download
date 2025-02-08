
import { motion } from "framer-motion";
import { Building2, Bed, Wifi, Coffee, Users, GitCompare, Plus, UtensilsCrossed, FileCheck, Ban } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface RoomFeature {
  name: string;
  available: boolean;
}

interface Room {
  id: string;
  hotelName: string;
  roomType: string;
  price: number;
  size: string;
  maxGuests: number;
  features: RoomFeature[];
  image: string;
  breakfast: string;
  confirmationRules: string;
  cancellationRules: string;
}

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
    image: "https://placehold.co/600x400",
    breakfast: "双人自助早餐",
    confirmationRules: "立即确认",
    cancellationRules: "预订后24小时内可免费取消"
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
      image: "https://placehold.co/600x400",
      breakfast: "双人自助早餐",
      confirmationRules: "立即确认",
      cancellationRules: "预订后12小时内可免费取消"
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
      image: "https://placehold.co/600x400",
      breakfast: "双人自助早餐 + 下午茶",
      confirmationRules: "立即确认",
      cancellationRules: "预订后48小时内可免费取消"
    }
  ];

  const handleCompare = () => {
    if (selectedRooms.length > 0) {
      navigate('/compare-details', { state: { rooms: [currentRoom.id, ...selectedRooms] } });
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
      {/* 顶部导航栏 */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 px-4 py-3 flex justify-between items-center shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600"
        >
          返回
        </button>
        <h1 className="text-lg font-medium">房型对比</h1>
        <div className="w-10" />
      </div>

      <div className="pt-14 pb-20 px-4">
        {/* 当前选择的房型 */}
        <div className="mb-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">当前选择的房型</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <img
              src={currentRoom.image}
              alt={currentRoom.roomType}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-3">
              <div>
                <h3 className="text-base font-medium text-gray-900">{currentRoom.hotelName}</h3>
                <p className="text-sm text-gray-600">{currentRoom.roomType}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-blue-600">¥{currentRoom.price}</span>
                <span className="text-sm text-gray-500">每晚</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Building2 className="w-4 h-4 mr-1" />
                  <span>{currentRoom.size}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>可住{currentRoom.maxGuests}人</span>
                </div>
              </div>
              {/* 新增的信息展示 */}
              <div className="space-y-2 border-t border-gray-100 pt-2">
                <div className="flex items-center text-sm text-gray-600">
                  <UtensilsCrossed className="w-4 h-4 mr-2" />
                  <span>{currentRoom.breakfast}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileCheck className="w-4 h-4 mr-2" />
                  <span>{currentRoom.confirmationRules}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Ban className="w-4 h-4 mr-2" />
                  <span>{currentRoom.cancellationRules}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 推荐房型列表 */}
        <div>
          <h2 className="text-base font-medium text-gray-900 mb-3">推荐房型</h2>
          <div className="space-y-4">
            {recommendedRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                  selectedRooms.includes(room.id) ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="flex gap-3 p-3">
                  <img
                    src={room.image}
                    alt={room.roomType}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{room.hotelName}</h3>
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
                        onClick={() => toggleRoomSelection(room.id)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm ${
                          selectedRooms.includes(room.id)
                            ? 'bg-blue-600 text-white'
                            : 'border border-blue-600 text-blue-600'
                        }`}
                      >
                        {selectedRooms.includes(room.id) ? (
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
            ))}
          </div>
        </div>
      </div>

      {/* 底部固定操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
        <button
          onClick={handleCompare}
          disabled={selectedRooms.length === 0}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-white ${
            selectedRooms.length > 0
              ? 'bg-blue-600 active:bg-blue-700'
              : 'bg-gray-400'
          }`}
        >
          <GitCompare className="w-5 h-5" />
          开始对比 ({selectedRooms.length + 1}个房型)
        </button>
      </div>
    </div>
  );
};

export default RoomComparison;
