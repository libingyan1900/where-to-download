
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeNavItem: string;
  setActiveNavItem: (item: string) => void;
  setShowLoginModal: (show: boolean) => void;
}

export const navItems = [
  { name: "首页", link: "/" },
  { name: "差旅壹号", link: "#" },
  { name: "企业合作", link: "#" },
  { name: "商家合作", link: "#" },
  { name: "典型案例", link: "#" },
  { name: "关于我们", link: "#" },
  { name: "产品下载", link: "#" },
  { name: "加入我们", link: "#", hasDropdown: true }
];

export const Navigation = ({ activeNavItem, setActiveNavItem, setShowLoginModal }: NavigationProps) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                className={cn(
                  "relative px-2 py-1 text-sm font-medium transition-colors hover:text-blue-600",
                  activeNavItem === item.name ? "text-blue-600" : "text-gray-600"
                )}
                onClick={() => setActiveNavItem(item.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.name}</span>
                {activeNavItem === item.name && (
                  <motion.div
                    layoutId="navHighlight"
                    className="absolute inset-0 bg-blue-50 rounded-md -z-10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.hasDropdown && (
                  <ChevronDown className="inline-block ml-1 w-4 h-4" />
                )}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
              onClick={() => setShowLoginModal(true)}
            >
              登录
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:shadow-lg transition-all"
            >
              免费注册
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
