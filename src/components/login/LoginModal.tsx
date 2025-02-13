
import { useState } from "react";
import { motion } from "framer-motion";
import { X, MessageCircle, MessageSquare, Send } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { QRCode } from "./QRCode";

interface LoginModalProps {
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
}

export const LoginModal = ({ showLoginModal, setShowLoginModal }: LoginModalProps) => {
  const [loginType, setLoginType] = useState<'account' | 'phone'>('account');
  const [rememberUser, setRememberUser] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
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
            <div className="flex justify-between items-center mb-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">欢迎登录</h2>
                <p className="text-sm text-gray-500">登录后体验更多功能</p>
              </div>
              <button
                onClick={() => setShowLoginModal(false)}
                className="rounded-full p-1 hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setLoginType('account')}
                    className={cn(
                      "flex-1 py-2 text-sm font-medium rounded-full transition-all",
                      loginType === 'account'
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    账号登录
                  </button>
                  <button
                    onClick={() => setLoginType('phone')}
                    className={cn(
                      "flex-1 py-2 text-sm font-medium rounded-full transition-all",
                      loginType === 'phone'
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    扫码登录
                  </button>
                </div>

                {loginType === 'account' ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-4">
                      <Input
                        type="text"
                        placeholder="请输入账号"
                        className="h-11 rounded-xl bg-gray-50 border-0 focus-visible:ring-2 focus-visible:ring-blue-600"
                      />
                      <Input
                        type="password"
                        placeholder="请输入密码"
                        className="h-11 rounded-xl bg-gray-50 border-0 focus-visible:ring-2 focus-visible:ring-blue-600"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={rememberUser}
                          onCheckedChange={(checked) => setRememberUser(checked as boolean)}
                        />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          记住用户名
                        </label>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        忘记密码?
                      </a>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg"
                    >
                      登录
                    </Button>
                  </form>
                ) : null}
              </div>

              <div className="flex flex-col items-center justify-center border-l border-gray-100 pl-8">
                {loginType === 'phone' ? (
                  <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <QRCode />
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <p className="text-sm text-gray-500 mb-6">扫码登录更方便</p>
                    <img src="/lovable-uploads/8f563438-fb2b-4fd7-a524-391c1f9eaf55.png" 
                         alt="App Screenshot" 
                         className="w-48 h-auto rounded-lg shadow-lg mx-auto" />
                  </div>
                )}
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
