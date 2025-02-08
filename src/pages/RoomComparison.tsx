
import { motion } from "framer-motion";
import { Building2, Bed, Wifi, Coffee, Users, Check, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface RoomFeature {
  name: string;
  room1: boolean;
  room2: boolean;
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
  const location = useLocation();
  
  // 示例数据 - 实际应用中这些数据应该从API获取
  const room1: Room = {
    id: "1",
    hotelName: "金茂大酒店",
    roomType: "豪华大床房",
    price: 888,
    size: "48㎡",
    maxGuests: 2,
    features: [
      { name: "免费WiFi", room1: true, room2: true },
      { name: "24小时管家服务", room1: true, room2: false },
      { name: "行政酒廊", room1: true, room2: false },
      { name: "观景阳台", room1: true, room2: true },
      { name: "迷你吧", room1: true, room2: true }
    ],
    image: "https://placehold.co/600x400"
  };

  const room2: Room = {
    id: "2",
    hotelName: "丽思卡尔顿",
    roomType: "豪华江景房",
    price: 1088,
    size: "52㎡",
    maxGuests: 2,
    features: [
      { name: "免费WiFi", room1: true, room2: true },
      { name: "24小时管家服务", room1: false, room2: true },
      { name: "行政酒廊", room1: false, room2: true },
      { name: "观景阳台", room1: true, room2: true },
      { name: "迷你吧", room1: true, room2: true }
    ],
    image: "https://placehold.co/600x400"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[room1, room2].map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 rounded-2xl"
            >
              <img
                src={room.image}
                alt={room.roomType}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold text-blue-900">{room.hotelName}</h2>
                  <p className="text-gray-600">{room.roomType}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">¥{room.price}</span>
                  <span className="text-gray-500">每晚</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-1" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>可住{room.maxGuests}人</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-blue-900 mb-6">设施对比</h3>
          <div className="glass-card p-6 rounded-2xl">
            {room1.features.map((feature, index) => (
              <div
                key={feature.name}
                className={`flex items-center justify-between py-4 ${
                  index !== room1.features.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="text-gray-600">{feature.name}</span>
                <div className="flex gap-16 md:gap-32">
                  <div className="w-12 text-center">
                    {feature.room1 ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </div>
                  <div className="w-12 text-center">
                    {feature.room2 ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
            预订房型
          </button>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-300">
            继续对比
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomComparison;
