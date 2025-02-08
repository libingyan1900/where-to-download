
import { motion } from "framer-motion";
import { ArrowDownToLine, Laptop, Smartphone, Download } from "lucide-react";

const downloadOptions = [
  {
    title: "Windows版本",
    description: "适用于 Windows 10 及以上系统",
    icon: <Laptop className="w-8 h-8" />,
    version: "v2.0.1",
    size: "68.5 MB",
  },
  {
    title: "macOS版本",
    description: "适用于 macOS 10.15 及以上系统",
    icon: <Laptop className="w-8 h-8" />,
    version: "v2.0.1",
    size: "72.3 MB",
  },
  {
    title: "手机版本",
    description: "iOS 与 Android 版本",
    icon: <Smartphone className="w-8 h-8" />,
    version: "v2.0.1",
    size: "45.8 MB",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">在哪下载</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            选择适合您设备的版本，开始您的下载之旅
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {downloadOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-gray-800">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="mt-auto">
                    <div className="text-sm text-gray-500 mb-2">
                      {option.version} • {option.size}
                    </div>
                    <button className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                      <Download className="w-4 h-4" />
                      <span>下载</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 text-gray-600"
        >
          <p className="text-sm">
            最后更新时间: 2024年3月15日
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
