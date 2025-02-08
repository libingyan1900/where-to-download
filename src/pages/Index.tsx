
import { motion } from "framer-motion";
import { Globe, Building2, Users, BadgeCheck, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 py-20 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              智能商旅管理平台
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              差旅壹号 - 为企业打造智能、高效、便捷的商务差旅解决方案
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center mx-auto">
              开始使用
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              为什么选择差旅壹号
            </h2>
            <p className="text-gray-600">
              打造全方位的企业差旅管理体系
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "全球资源",
                description: "连接全球优质差旅资源，让您的商务出行更加便捷"
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "企业管控",
                description: "完善的预算管理和审批流程，让企业差旅支出更透明"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "专业服务",
                description: "7×24小时专业团队支持，为您的差旅保驾护航"
              },
              {
                icon: <BadgeCheck className="w-8 h-8" />,
                title: "智能合规",
                description: "智能化的差旅政策管理，确保差旅合规性"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <div className="inline-block p-3 bg-black rounded-lg text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              开启智能商旅新时代
            </h2>
            <p className="text-gray-600 mb-8">
              立即体验差旅壹号，让您的企业差旅管理更加高效
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                预约演示
              </button>
              <button className="border border-black text-black px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300">
                了解更多
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
