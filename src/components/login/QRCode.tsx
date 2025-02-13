
import React from "react";

export const QRCode = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-32 h-32 text-gray-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="20" y="20" width="60" height="60" rx="4" />
    <path d="M30 30h20v20H30z" />
    <path d="M50 30h20v20H50z" />
    <path d="M30 50h20v20H30z" />
    <path d="M50 50h20v20H50z" />
  </svg>
);
