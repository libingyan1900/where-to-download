
import React from "react";
import { Star } from "lucide-react";
import { Room } from "@/components/room-comparison/types";
import { ImageWithFallback } from "./ImageWithFallback";

interface FeatureValueProps {
  room: Room;
  featureKey: string;
}

export const FeatureValue: React.FC<FeatureValueProps> = ({ room, featureKey }) => {
  switch (featureKey) {
    case "starRating":
      return (
        <div className="flex items-center" role="img" aria-label={`${room.starRating || 0}星级`}>
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
        <ImageWithFallback
          src={room[featureKey]?.toString()}
          alt={featureKey === "hotelImage" ? `${room.hotelName}照片` : `${room.roomType}照片`}
        />
      );
    case "facilities":
      return <>{room.facilities?.join("、") || "-"}</>;
    case "distanceInKm":
      return <>{`${(room.distanceInKm * 1000).toFixed(0)}米`}</>;
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
      return <>{room[featureKey as keyof Room]?.toString() || "-"}</>;
  }
};
