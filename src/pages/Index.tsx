import { motion } from "framer-motion";
import { Globe, Building2, Users, BadgeCheck, ArrowRight, Plane, Train, Car, Hotel, CreditCard, FileText, CheckSquare, PieChart, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const painPoints = [
    {
      title: "效率明显提高，成本降低30%以上",
      description: "通过差旅壹号行业解决方案，不仅管理效率提升了60%，甚至差旅成本还降低了30%以上，员工满意了，财务不忙了，企业老板也满意了，真正实现\"让企业差旅更简洁，让员工和企业都满意\"。",
      pain: "差旅痛点：员工和财务对差旅满意度差，天天闹；差旅成本居高不下。"
    },
    {
      title: "手机随时在线审批和预订",
      description: "差旅壹号提供差旅管理综合解决方案，多渠道审批，智能差旅报告自动生成，轻轻松松一点，完成差旅流程，员工不闹了，工作成果大幅提升。",
      pain: "差旅痛点：外出办公，员工天天催着需要审批；差旅成本太高，老板不满意；差旅管理太混乱，做份差旅报告好难。"
    },
    {
      title: "一个月只要一张发票，发票规范了，效率提高了",
      description: "差旅壹号合作企业可以享受企业垫资月结方案，员工无需进行差旅报销，每月开具一张发票即可报销当月所有差旅出现费用。",
      pain: "差旅痛点：凭证堆成山，发票审核工作量大，发票不规范。"
    },
    {
      title: "不借款，不垫钱，不报销，说走就走",
      description: "差旅壹号为符合差旅月结条件的企业提供垫资月结服务，企业员工登录差旅壹号APP预订差旅产品，无需付费，同时差旅壹号打通企业财务报销系统，差旅壹号预订数据自动生成报销凭据，无缝对接企业报销流程。",
      pain: "差旅痛点：出差借款慢，出差自己要替公司垫款；发票老掉，报账贴发票每个月要贴大半天；领导老不签字，又不敢催；报账慢，老板OA审核慢，出差垫钱垫到没钱陪女朋友看电影。"
    }
  ];

  const travelServices = [
    { icon: <Plane className="w-6 h-6" />, title: "机票", description: "7*24不间断服务；多渠道预订" },
    { icon: <Train className="w-6 h-6" />, title: "火车", description: "多接口渠道火车票查询、预订功能" },
    { icon: <Users className="w-6 h-6" />, title: "机场VIP", description: "专属贵宾休息室息，VIP通道等" },
    { icon: <Hotel className="w-6 h-6" />, title: "酒店", description: "国内外近30万家酒店查询及预订" },
    { icon: <Car className="w-6 h-6" />, title: "用车", description: "用车覆盖全国300多个城市" },
    { icon: <BadgeCheck className="w-6 h-6" />, title: "保险", description: "产品种类齐全，供应渠道广" }
  ];

  const functionModules = [
    { icon: <CreditCard className="w-6 h-6" />, title: "预订", description: "支持机票、火车票、用车、酒店等产品的预订" },
    { icon: <CheckSquare className="w-6 h-6" />, title: "审批", description: "支持多渠道审批，自定义申请模板" },
    { icon: <PieChart className="w-6 h-6" />, title: "报表", description: "智能差旅报告管控企业差旅，差旅费用透明，合规" },
    { icon: <FileText className="w-6 h-6" />, title: "报销", description: "每月开具一张发票报销当月所有出差出行费用" },
    { icon: <Wallet className="w-6 h-6" />, title: "支付", description: "支持月结、现结、预存，支持多种支付方式" }
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
      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-16 last:mb-0"
            >
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800">{point.pain}</p>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{point.title}</h3>
              <p className="text-gray-600 mb-6">{point.description}</p>
              <Button variant="outline" className="hover:bg-blue-50">
                立即体验 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Travel Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">差旅云平台</h2>
            <p className="text-xl text-gray-600">Travel Business Cloud Platform</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-block p-3 bg-blue-100 rounded-lg text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
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
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="inline-block p-3 bg-blue-600 rounded-lg text-white mb-4">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
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
