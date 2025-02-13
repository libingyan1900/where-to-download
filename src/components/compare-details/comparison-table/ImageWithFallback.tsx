
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

  return (
    <div className={cn(
      "relative w-32 h-24 rounded-lg overflow-hidden glass-card",
      "group hover:shadow-lg transition-all duration-300",
      className
    )}>
      {!error && src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setError(true)}
          loading="lazy"
        />
      ) : (
        <Image 
          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" 
          aria-hidden="true"
        />
      )}
    </div>
  );
};
