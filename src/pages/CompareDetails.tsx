
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, Star, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Room } from "@/components/room-comparison/types";

const CompareDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [rooms, setRooms] = React.useState<Room[]>(
    location.state?.selectedRooms as Room[] || []
  );

  const handleRemoveRoom = (roomId: string) => {
    setRooms(prev => prev.filter(room => room.id !== roomId));
  };

  const handleBook = (roomId: string) => {
    console.log('Booking room:', roomId);
  };

  const featureGroups = [
    {
      title: "酒店特征",
      features: [
        { key: "renovationTime", label: "装修时间" },
        { key: "rating", label: "评分" },
        { key: "starRating", label: "星级" },
        { key: "hotelImage", label: "酒店图片" },
        { key: "facilities", label: "酒店设施" },
        { key: "distanceInKm", label: "距离" },
      ],
    },
    {
      title: "房型特征",
      features: [
        { key: "roomType", label: "房型名称" },
        { key: "size", label: "面积" },
        { key: "floor", label: "楼层" },
        { key: "window", label: "窗户" },
        { key: "bedType", label: "床型" },
        { key: "roomImage", label: "房型图片" },
      ],
    },
    {
      title: "政策信息",
      features: [
        { key: "breakfast", label: "早餐" },
        { key: "cancellationRules", label: "取消规则" },
        { key: "confirmationRules", label: "确认时效" },
      ],
    },
  ];

  const renderFeatureValue = (room: Room, key: string) => {
    switch (key) {
      case "starRating":
        return (
          <div className="flex items-center">
            {Array.from({ length: room.starRating || 0 }).map((_, index) => (
              <Star
                key={index}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
        );
      case "hotelImage":
      case "roomImage":
        return (
          <div className="relative w-32 h-24 rounded-lg overflow-hidden glass-card">
            <Image className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        );
      case "facilities":
        return room.facilities?.join("、") || "-";
      case "distanceInKm":
        return `${(room.distanceInKm * 1000).toFixed(0)}米`;
      case "rating":
        return (
          <div className="flex items-center">
            <span className="text-lg font-semibold text-blue-600">
              {room.rating}
            </span>
            <span className="text-sm text-gray-500 ml-1">/5.0</span>
          </div>
        );
      default:
        return room[key as keyof Room]?.toString() || "-";
    }
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

      <div className="fixed top-14 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-10">
        <div className="px-4 py-3 max-w-7xl mx-auto">
          <div className="flex gap-4 mb-0 overflow-x-auto pb-2 scrollbar-hide">
            {rooms.map((room) => (
              <div 
                key={room.id}
                className="relative flex-shrink-0 w-[200px] rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-blue-100/50 backdrop-blur-sm animate-fadeIn hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                <button
                  onClick={() => handleRemoveRoom(room.id)}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm hover:shadow transition-all group"
                >
                  <X className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600" />
                </button>
                <div className="p-3 space-y-2">
                  <h3 className="text-sm font-semibold text-blue-900 truncate" title={room.hotelName}>
                    {room.hotelName}
                  </h3>
                  <p className="text-xs text-gray-600 truncate" title={room.roomType}>
                    {room.roomType}
                  </p>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-base font-bold text-blue-600">¥{room.price}</span>
                    <span className="text-xs text-gray-500">/晚</span>
                  </div>
                  <Button 
                    onClick={() => handleBook(room.id)}
                    className="w-full h-7 text-xs bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-sm"
                  >
                    预订
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-40 px-4 pb-8 max-w-7xl mx-auto">
        <div className="overflow-x-auto rounded-lg shadow-lg animate-fadeIn">
          <Table className="bg-white">
            <TableHeader>
              <TableRow className="bg-gray-50/50 backdrop-blur-sm">
                <TableHead className="w-32 font-semibold">特征</TableHead>
                {rooms.map((room) => (
                  <TableHead 
                    key={room.id}
                    className="font-semibold text-blue-900"
                  >
                    {room.hotelName}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {featureGroups.map((group) => (
                <React.Fragment key={group.title}>
                  <TableRow>
                    <TableCell
                      colSpan={rooms.length + 1}
                      className="bg-blue-50/50 backdrop-blur-sm font-medium text-blue-900"
                    >
                      {group.title}
                    </TableCell>
                  </TableRow>
                  {group.features.map((feature) => (
                    <TableRow 
                      key={feature.key}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <TableCell className="font-medium text-gray-700">
                        {feature.label}
                      </TableCell>
                      {rooms.map((room) => (
                        <TableCell key={room.id} className="text-gray-600">
                          {renderFeatureValue(room, feature.key)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CompareDetails;
