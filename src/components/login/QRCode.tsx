
import React from "react";
import { ScanLine } from "lucide-react";

export const QRCode = () => (
  <div className="flex flex-col items-center space-y-6">
    <div className="relative">
      <img 
        src="/lovable-uploads/4565d277-3d06-4c1e-ba4a-c1e499da4830.png"
        alt="Login QR Code"
        className="w-48 h-48 object-contain"
      />
    </div>
    <div className="flex items-center justify-center space-x-2 bg-blue-600 text-white rounded-full w-32 h-32">
      <div className="flex flex-col items-center">
        <ScanLine className="w-8 h-8 mb-2" />
        <span className="text-sm font-medium">扫码登录</span>
      </div>
    </div>
  </div>
);
