
import React, { useState } from "react";
import { Image } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className 
}) => {
  const [error, setError] = useState(false);

  // 设置默认图片路径
  const defaultHotelImage = "https://images.unsplash.com/photo-1473177104440-ffee2f376098";
  const defaultRoomImage = "https://images.unsplash.com/photo-1483058712412-4245e9b90334";

  const getDefaultImage = () => {
    if (alt.includes("酒店")) {
      return defaultHotelImage;
    }
    return defaultRoomImage;
  };

  return (
    <div className={cn(
      "relative w-32 h-24 rounded-lg overflow-hidden glass-card",
      "group hover:shadow-lg transition-all duration-300",
      className
    )}>
      {!error && (src || getDefaultImage()) ? (
        <img
          src={src || getDefaultImage()}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setError(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <Image 
            className="w-6 h-6 text-gray-400" 
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
};
