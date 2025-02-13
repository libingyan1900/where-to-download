
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
    <div className="flex items-center justify-center space-x-2 bg-blue-600 text-white rounded-full w-24 h-24">
      <div className="flex flex-col items-center">
        <ScanLine className="w-6 h-6 mb-1" />
        <span className="text-sm font-medium">
          <span className="text-blue-500">差旅壹号-我的，扫一扫</span>
          <span className="text-black">打开及登录</span>
        </span>
      </div>
    </div>
  </div>
);
