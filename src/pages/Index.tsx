import { useState } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { LoginModal } from "@/components/login/LoginModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { features, functionModules, painPoints, travelServices, additionalServices, businessServices, leftFeatures, rightFeatures } from "@/constants/travelData";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [activeNavItem, setActiveNavItem] = useState("首页");
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        setShowLoginModal={setShowLoginModal}
      />
      
      <LoginModal 
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />

      <HeroSection />

      {/* Pain Points Section */}
      <div className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">
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
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-lg">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <div className="bg-red-50 text-red-700 text-sm p-2 rounded-lg mb-3 transform hover:scale-[1.02] transition-transform">
                        {point.pain}
                      </div>
                      <p className="text-gray-600 mb-4">{point.description}</p>
                      
                      {point.stats && (
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {point.stats.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="text-center p-2 rounded-lg bg-gradient-to-br from-blue-50 to-transparent"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-500">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      
                      {point.features && (
                        <div className="flex flex-wrap gap-2">
                          {point.features.map((feature, idx) => (
                            <motion.span
                              key={idx}
                              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                              whileHover={{ scale: 1.05 }}
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>
                      )}
                      
                      {point.benefits && (
                        <div className="grid grid-cols-3 gap-2">
                          {point.benefits.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              className="text-center bg-green-50 p-2 rounded-lg"
                              whileHover={{ scale: 1.05 }}
                            >
                              <span className="text-sm text-green-700">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      
                      {point.advantages && (
                        <div className="flex flex-wrap gap-2">
                          {point.advantages.map((advantage, idx) => (
                            <motion.span
                              key={idx}
                              className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full"
                              whileHover={{ scale: 1.05 }}
                            >
                              {advantage}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mt-4 flex justify-end"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button variant="outline" className="hover:bg-blue-50 group">
                      了解更多 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left Features */}
              <div className="space-y-8">
                {leftFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-center space-x-4 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-full p-4 shadow-lg w-16 h-16 flex items-center justify-center flex-shrink-0 group-hover:shadow-xl transition-shadow">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center App Image with iPhone Frame */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 px-4"
                whileHover={{ y: -10 }}
              >
                <div className="relative max-w-[300px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl transform -rotate-6"></div>
                  {/* iPhone Frame */}
                  <div className="relative bg-gradient-to-b from-[#2D2D2D] via-[#1A1A1A] to-[#2D2D2D] rounded-[2.5rem] p-2 shadow-2xl">
                    {/* Inner Frame */}
                    <div className="relative bg-black rounded-[2.3rem] p-[2px] overflow-hidden">
                      {/* Dynamic Island */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90px] h-[35px] bg-black rounded-b-[18px] z-20">
                        {/* Camera & Sensors */}
                        <div className="absolute top-3 right-7 w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                        <div className="absolute top-3 right-12 w-2 h-2 rounded-full bg-[#0f0f0f]"></div>
                      </div>
                      
                      {/* Screen Content */}
                      <div className="relative rounded-[2.2rem] overflow-hidden bg-white">
                        <motion.img 
                          src="/lovable-uploads/8f563438-fb2b-4fd7-a524-391c1f9eaf55.png" 
                          alt="差旅壹号APP界面" 
                          className="w-full h-auto object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                    
                    {/* Volume Buttons */}
                    <div className="absolute left-[-1px] top-24 w-[1px] h-6 bg-[#2D2D2D] rounded-l shadow-inner"></div>
                    <div className="absolute left-[-1px] top-36 w-[1px] h-6 bg-[#2D2D2D] rounded-l shadow-inner"></div>
                    <div className="absolute left-[-1px] top-48 w-[1px] h-12 bg-[#2D2D2D] rounded-l shadow-inner"></div>
                    
                    {/* Power Button */}
                    <div className="absolute right-[-1px] top-32 w-[1px] h-12 bg-[#2D2D2D] rounded-r shadow-inner"></div>
                  </div>
                </div>
              </motion.div>

              {/* Right Features */}
              <div className="space-y-8">
                {rightFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-center space-x-4 group"
                    whileHover={{ x: -10 }}
                  >
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-full p-4 shadow-lg w-16 h-16 flex items-center justify-center flex-shrink-0 group-hover:shadow-xl transition-shadow">
                      <motion.div 
                        whileHover={{ rotate: -360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Function Modules Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">五大功能模块</h2>
            <p className="text-xl text-gray-600">Five Function Modules</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {functionModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-lg">
                  {module.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
