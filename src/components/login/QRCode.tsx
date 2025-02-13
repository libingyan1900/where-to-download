
import React from "react";
import { ScanLine } from "lucide-react";

export const QRCode = () => (
  <div className="flex flex-col items-center space-y-6">
    <div className="relative">
      <img 
        src="/lovable-uploads/4565d277-3d06-4c1e-ba4a-c1e499da4830.png"
        alt="Login QR Code"
        className="w-64 h-64 object-contain"
      />
    </div>
    <div className="flex items-center space-x-2 text-base">
      <span className="text-black font-medium">打开</span>
      <span className="text-blue-500 font-medium">差旅壹号-我的，扫一扫</span>
      <span className="text-black font-medium">登录</span>
    </div>
  </div>
);
