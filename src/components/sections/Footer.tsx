
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

const footerLinks = {
  "关旅壹号": [
    "关旅壹号",
    "我要合作",
    "典型案例",
    "关于我们",
    "产品下载",
    "加入我们"
  ],
  "517Na(抵京太鼎)服务": [
    "国际机票",
    "国内机票",
    "出行平台",
    "酒店",
    "保险",
    "517Na联盟"
  ],
  "合作伙伴": [
    "南方航行",
    "神州专车",
    "易到用车",
    "首汽专车",
    "中国国际航空公司",
    "中国南方航空公司",
    "中国东方航空公司"
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 5 }}
                    className="text-sm hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* QR Codes Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">企业微信</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-2 rounded-lg">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-gray-400" />
                </div>
                <p className="text-gray-600 text-xs text-center mt-2">【差旅壹号】</p>
              </div>
              <div className="bg-white p-2 rounded-lg">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-gray-400" />
                </div>
                <p className="text-gray-600 text-xs text-center mt-2">【差旅壹号公众号】</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-500">
            © 2024 差旅壹号. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
