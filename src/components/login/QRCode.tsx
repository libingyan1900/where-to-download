
import React from "react";
import { ScanLine } from "lucide-react";

export const QRCode = () => (
  <div className="flex flex-col items-center space-y-4">
    <img 
      src="/lovable-uploads/2f8e5695-9ae6-4d5c-9119-e97657d3dfe3.png"
      alt="Login QR Code"
      className="w-48 h-48 object-contain"
    />
    <div className="flex items-center space-x-2 text-blue-600">
      <ScanLine className="w-5 h-5" />
      <span className="text-sm font-medium">扫码登录</span>
    </div>
  </div>
);
