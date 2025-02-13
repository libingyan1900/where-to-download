import { motion } from "framer-motion";
import { Globe, Building2, Users, BadgeCheck, ArrowRight, Plane, Train, Car, Hotel, CreditCard, FileText, CheckSquare, PieChart, Wallet, TrendingUp, Clock, Receipt, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const features = [
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
  ];

  const functionModules = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "全球资源",
      description: "连接全球优质差旅资源，覆盖200+国家地区"
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "企业管控",
      description: "完善的预算管理和审批流程，支持多级审批"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "专业服务",
      description: "7×24小时专业团队支持，快速响应需求"
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-white" />,
      title: "智能合规",
      description: "智能化的差旅政策管理，确保差旅合规"
    },
    {
      icon: <Wallet className="w-8 h-8 text-white" />,
      title: "费用管理",
      description: "智能费用统计，自动化报销流程"
    }
  ];

  const painPoints = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "效率提升60%，成本节省30%",
      description: "通过差旅壹号的智能解决方案，企业管理效率显著提升60%，差旅成本大幅降低30%。让员工体验更好的差旅服务，让企业管理更加轻松。",
      pain: "传统痛点：繁琐的审批流程、高额的差旅成本、低效的管理方式",
      stats: [
        { label: "效率提升", value: "60%" },
        { label: "成本节省", value: "30%" },
        { label: "员工满意度", value: "95%" }
      ]
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "随时随地，一键预订审批",
      description: "移动端支持全流程操作，从预订到审批一气呵成。智能化差旅报告自动生成，让差旅管理变得轻松简单。",
      pain: "传统痛点：审批流程慢、沟通成本高、报告难做",
      features: ["移动端一站式服务", "智能报告生成", "实时审批通知"]
    },
    {
      icon: <Receipt className="w-12 h-12 text-blue-600" />,
      title: "月度单据，智能报销",
      description: "企业可享受月结服务，系统自动汇总差旅支出，每月仅需一张发票，极大简化财务工作。",
      pain: "传统痛点：单据繁多、报销周期长、人工审核慢",
      benefits: ["单据自动汇总", "智能对账核销", "发票合规管理"]
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "无需垫资，即订即行",
      description: "企业专属的差旅信用额度，员工无需垫资，系统自动完成费用结算，支持多种支付方式。",
      pain: "传统痛点：现金垫付压力大、审批报销慢、账期过长",
      advantages: ["企业信用支付", "自动化结算", "多样支付方式"]
    }
  ];

  const travelServices = [
    {
      icon: <Hotel className="w-8 h-8 text-white" />,
      title: "酒店",
      bgColor: "bg-blue-500",
      shortcut: true
    },
    {
      icon: <Plane className="w-8 h-8 text-white" />,
      title: "国内机票",
      bgColor: "bg-blue-500",
      shortcut: true
    },
    {
      icon: <Train className="w-8 h-8 text-white" />,
      title: "火车票",
      bgColor: "bg-blue-500",
      shortcut: true
    },
    {
      icon: <Car className="w-8 h-8 text-white" />,
      title: "用车",
      bgColor: "bg-blue-500",
      shortcut: true
    }
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "国际机票",
      description: "全球航线预订"
    },
    {
      icon: <Car className="w-8 h-8 text-blue-500" />,
      title: "外卖",
      description: "商旅餐饮服务"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "询价单",
      description: "快速获取报价"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "出行攻略",
      description: "智能行程规划"
    }
  ];

  const businessServices = [
    {
      icon: <CheckSquare className="w-8 h-8 text-[#40A9FF]" />,
      title: "审批",
      description: "一键审批流程"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#40A9FF]" />,
      title: "外勤签到",
      description: "智能考勤管理"
    },
    {
      icon: <Receipt className="w-8 h-8 text-[#40A9FF]" />,
      title: "差旅报告",
      description: "自动生成报表"
    },
    {
      icon: <PieChart className="w-8 h-8 text-[#40A9FF]" />,
      title: "差旅标准",
      description: "企业制度管理"
    },
    {
      icon: <FileText className="w-8 h-8 text-[#40A9FF]" />,
      title: "表单",
      description: "自定义申请单"
    }
  ];

  const travelFeatures = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "机票",
      description: "7*24不间断服务，多渠道预订"
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: "火车",
      description: "多接口实现火车票查询、预订功能"
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "酒店",
      description: "国内外近30万家酒店查询及预订"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "用车",
      description: "用车覆盖全国300多个城市"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 py-20 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">
              差旅壹号
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Travel NO.1 Solve the Pain Points of Companies
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              为企业打造智能、高效、便捷的商务差旅解决方案
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
              立即体验
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              解决企业差旅难题
            </h2>
            <p className="text-xl text-gray-600">
              让差旅管理更简单，让企业效率更高
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <div className="bg-red-50 text-red-700 text-sm p-2 rounded-lg mb-3">
                        {point.pain}
                      </div>
                      <p className="text-gray-600 mb-4">{point.description}</p>
                      
                      {point.stats && (
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {point.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-bold text-blue-600">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-500">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {point.features && (
                        <div className="flex flex-wrap gap-2">
                          {point.features.map((feature, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {point.benefits && (
                        <div className="grid grid-cols-3 gap-2">
                          {point.benefits.map((benefit, idx) => (
                            <div key={idx} className="text-center bg-green-50 p-2 rounded">
                              <span className="text-sm text-green-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {point.advantages && (
                        <div className="flex flex-wrap gap-2">
                          {point.advantages.map((advantage, idx) => (
                            <span key={idx} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                              {advantage}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" className="hover:bg-blue-50">
                      了解更多 <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel Services Section with App Screenshot */}
      <div className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              差旅云平台
            </h2>
            <p className="text-xl text-gray-600">Travel Business Cloud Platform</p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Center App Image */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-64 relative z-10"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-1 shadow-xl">
                  <div className="overflow-hidden rounded-2xl">
                    <img 
                      src="/lovable-uploads/5efc6822-1e0b-40dd-9e6d-83ce2367c068.png" 
                      alt="差旅壹号APP界面" 
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Surrounding Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {travelFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-full p-4 shadow-lg mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Connecting Lines (Optional) */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full border-2 border-dashed border-blue-200 rounded-lg opacity-30" />
            </div>
          </div>
        </div>
      </div>

      {/* Function Modules Section */}
      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">五大功能模块</h2>
            <p className="text-xl text-gray-600">Five Function Modules</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {functionModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{module.title}</h3>
                <p className="text-white/80">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              开启智能商旅新时代
            </h2>
            <p className="text-gray-600 mb-8">
              立即体验差旅壹号，让您的企业差旅管理更加高效
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                预约演示
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-300">
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
