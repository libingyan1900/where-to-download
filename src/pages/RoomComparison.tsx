
import { motion } from "framer-motion";
import { Building2, Bed, Wifi, Coffee, Users, GitCompare, Plus } from "lucide-react";
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
}

const RoomComparison = () => {
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  
  // 当前选择的房型 - 示例数据
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
    image: "https://placehold.co/600x400"
  };

  // 推荐房型列表 - 示例数据
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
      image: "https://placehold.co/600x400"
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
      image: "https://placehold.co/600x400"
    }
  ];

  const handleCompare = () => {
    if (selectedRooms.length > 0) {
      // 导航到对比页面
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-blue-900">房型对比</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-700"
          >
            返回
          </button>
        </div>

        {/* 当前选择的房型 */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">当前选择的房型</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex gap-6">
              <img
                src={currentRoom.image}
                alt={currentRoom.roomType}
                className="w-1/3 h-48 object-cover rounded-lg"
              />
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">{currentRoom.hotelName}</h3>
                  <p className="text-gray-600">{currentRoom.roomType}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">¥{currentRoom.price}</span>
                  <span className="text-gray-500">每晚</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-1" />
                    <span>{currentRoom.size}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>可住{currentRoom.maxGuests}人</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 推荐房型列表 */}
        <div>
          <h2 className="text-xl font-semibold text-blue-800 mb-4">推荐房型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`glass-card p-6 rounded-2xl ${
                  selectedRooms.includes(room.id) ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="flex gap-4">
                  <img
                    src={room.image}
                    alt={room.roomType}
                    className="w-1/3 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">{room.hotelName}</h3>
                      <p className="text-gray-600 text-sm">{room.roomType}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">¥{room.price}</span>
                      <button
                        onClick={() => toggleRoomSelection(room.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                          selectedRooms.includes(room.id)
                            ? 'bg-blue-600 text-white'
                            : 'border border-blue-600 text-blue-600'
                        }`}
                      >
                        {selectedRooms.includes(room.id) ? (
                          <GitCompare className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                        {selectedRooms.includes(room.id) ? '已选择' : '加入对比'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 底部操作按钮 */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleCompare}
            disabled={selectedRooms.length === 0}
            className={`flex items-center gap-2 px-8 py-3 rounded-full text-white ${
              selectedRooms.length > 0
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            <GitCompare className="w-5 h-5" />
            开始对比 ({selectedRooms.length + 1}个房型)
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomComparison;
