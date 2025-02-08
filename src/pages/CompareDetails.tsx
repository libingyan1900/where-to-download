
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, Star, Image } from "lucide-react";
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
  const rooms = location.state?.selectedRooms as Room[] || [];

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
          <div className="relative w-32 h-24 bg-gray-100 rounded">
            <Image className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        );
      case "facilities":
        return room.facilities?.join("、") || "-";
      case "distanceInKm":
        return `${(room.distanceInKm * 1000).toFixed(0)}米`;
      default:
        return room[key as keyof Room]?.toString() || "-";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-10">
        <div className="flex items-center h-14 px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
          <h1 className="flex-1 text-center text-lg font-medium">房型对比</h1>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </div>

      <div className="pt-14 px-4 pb-8">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">特征</TableHead>
                {rooms.map((room) => (
                  <TableHead key={room.id}>{room.hotelName}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {featureGroups.map((group) => (
                <React.Fragment key={group.title}>
                  <TableRow>
                    <TableCell
                      colSpan={rooms.length + 1}
                      className="bg-gray-50 font-medium"
                    >
                      {group.title}
                    </TableCell>
                  </TableRow>
                  {group.features.map((feature) => (
                    <TableRow key={feature.key}>
                      <TableCell className="font-medium">
                        {feature.label}
                      </TableCell>
                      {rooms.map((room) => (
                        <TableCell key={room.id}>
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
