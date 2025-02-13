
import { motion } from "framer-motion";
import { Globe, FileText, Users, ShieldCheck, Wallet } from "lucide-react";

const Index = () => {
  const functionModules = [
    {
      icon: <Globe className="w-12 h-12 text-white/90" />,
      title: "全球资源",
      description: "连接全球优质差旅资源，覆盖200+国家地区",
      bgClass: "from-blue-500 to-blue-600"
    },
    {
      icon: <FileText className="w-12 h-12 text-white/90" />,
      title: "企业管控",
      description: "完善的预算管理和审批流程，支持多级审批",
      bgClass: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-12 h-12 text-white/90" />,
      title: "专业服务",
      description: "7×24小时专业团队支持，快速响应需求",
      bgClass: "from-blue-500 to-blue-600"
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-white/90" />,
      title: "智能合规",
      description: "智能化的差旅政策管理，确保差旅合规",
      bgClass: "from-blue-500 to-blue-600"
    },
    {
      icon: <Wallet className="w-12 h-12 text-white/90" />,
      title: "费用管理",
      description: "智能费用统计，自动化报销流程",
      bgClass: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Function Modules Section */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              五大功能模块
            </h2>
            <p className="text-xl text-gray-600">Five Function Modules</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {functionModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${module.bgClass} rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl`}
              >
                <div className="bg-white/10 rounded-xl p-4 w-fit mb-6">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {module.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
