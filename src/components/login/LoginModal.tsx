import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MessageSquare, Send } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QRCode } from "./QRCode";

interface LoginModalProps {
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
}

export const LoginModal = ({ showLoginModal, setShowLoginModal }: LoginModalProps) => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeToTerms) {
      toast({
        title: "请同意服务协议和隐私政策",
        description: "您需要同意相关协议才能继续",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "登录成功",
      description: "欢迎回来！",
    });
    setShowLoginModal(false);
  };

  return (
    <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
          
          <div className="relative p-8">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">欢迎登录</h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Tabs defaultValue="password" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="password">密码登录</TabsTrigger>
                    <TabsTrigger value="code">验证码登录</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="password">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-4">
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            type="text"
                            placeholder="请输入账号"
                            className="h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm 
                            focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent
                            transition-all duration-200 hover:border-blue-400"
                          />
                        </motion.div>
                        <div className="relative">
                          <motion.div
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Input
                              type="password"
                              placeholder="请输入密码"
                              className="h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm 
                              focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent
                              transition-all duration-200 hover:border-blue-400"
                            />
                          </motion.div>
                          <a
                            href="#"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:underline"
                          >
                            忘记密码?
                          </a>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg"
                      >
                        登录
                      </Button>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={agreeToTerms}
                          onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                          className="mt-1"
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-600"
                        >
                          已阅读并同意
                          <a href="#" className="text-blue-600 hover:underline mx-1">《服务协议》</a>
                          和
                          <a href="#" className="text-blue-600 hover:underline mx-1">《个人信息保护政策》</a>
                        </label>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="code">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-4">
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            type="text"
                            placeholder="请输入手机号"
                            className="h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm 
                            focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent
                            transition-all duration-200 hover:border-blue-400"
                          />
                        </motion.div>
                        <div className="relative">
                          <motion.div
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Input
                              type="text"
                              placeholder="请输入验证码"
                              className="h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm 
                              focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent
                              transition-all duration-200 hover:border-blue-400"
                            />
                          </motion.div>
                          <Button
                            type="button"
                            variant="ghost"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-3 text-sm font-medium text-blue-600 hover:bg-transparent hover:text-blue-700"
                          >
                            获取验证码
                          </Button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg"
                      >
                        登录
                      </Button>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms-code"
                          checked={agreeToTerms}
                          onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                          className="mt-1"
                        />
                        <label
                          htmlFor="terms-code"
                          className="text-sm text-gray-600"
                        >
                          已阅读并同意
                          <a href="#" className="text-blue-600 hover:underline mx-1">《服务协议》</a>
                          和
                          <a href="#" className="text-blue-600 hover:underline mx-1">《个人信息保护政策》</a>
                        </label>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="flex flex-col items-center justify-center pl-6">
                <QRCode />
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">其他登录方式</span>
                </div>
              </div>

              <div className="flex justify-center space-x-6 mt-6">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-[#25D366] text-white hover:bg-opacity-90 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-[#1DA1F2] text-white hover:bg-opacity-90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-[#0088CC] text-white hover:bg-opacity-90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
