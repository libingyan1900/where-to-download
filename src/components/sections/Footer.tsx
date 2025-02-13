
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
  "517Na(差旅壹号)服务": [
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
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 py-16 mt-20 overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-[128px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full filter blur-[128px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-semibold mb-6 text-white"
              >
                {title}
              </motion.h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 flex items-center space-x-1"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* QR Codes Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-6 text-white"
            >
              企业微信
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-md p-3 rounded-xl"
              >
                <div className="w-24 h-24 bg-white/80 rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-gray-600" />
                </div>
                <p className="text-gray-300 text-xs text-center mt-2">【差旅壹号】</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-md p-3 rounded-xl"
              >
                <div className="w-24 h-24 bg-white/80 rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-gray-600" />
                </div>
                <p className="text-gray-300 text-xs text-center mt-2">【差旅壹号公众号】</p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-gray-700/50"
        >
          <p className="text-center text-sm text-gray-500">
            © 2024 差旅壹号. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
