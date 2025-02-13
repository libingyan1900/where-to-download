import { Globe, Building2, Users, BadgeCheck, Wallet, TrendingUp, Clock, Receipt, Zap, Plane, Train, Car, Hotel, FileText, CheckSquare, PieChart, ShoppingCart, Store } from "lucide-react";

export const features = [
  {
    icon: Globe,
    title: "全球资源",
    description: "连接全球优质差旅资源，让您的商务出行更加便捷"
  },
  {
    icon: Building2,
    title: "企业管控",
    description: "完善的预算管理和审批流程，让企业差旅支出更透明"
  },
  {
    icon: Users,
    title: "专业服务",
    description: "7×24小时专业团队支持，为您的差旅保驾护航"
  },
  {
    icon: BadgeCheck,
    title: "智能合规",
    description: "智能化的差旅政策管理，确保差旅合规性"
  }
];

export const functionModules = [
  {
    icon: Globe,
    title: "全球资源",
    description: "连接全球优质差旅资源，覆盖200+国家地区"
  },
  {
    icon: Building2,
    title: "企业管控",
    description: "完善的预算管理和审批流程，支持多级审批"
  },
  {
    icon: Users,
    title: "专业服务",
    description: "7×24小时专业团队支持，快速响应需求"
  },
  {
    icon: BadgeCheck,
    title: "智能合规",
    description: "智能化的差旅政策管理，确保差旅合规"
  },
  {
    icon: Wallet,
    title: "费用管理",
    description: "智能费用统计，自动化报销流程"
  }
];

export const painPoints = [
  {
    icon: TrendingUp,
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
    icon: Clock,
    title: "随时随地，一键预订审批",
    description: "移动端支持全流程操作，从预订到审批一气呵成。智能化差旅报告自动生成，让差旅管理变得轻松简单。",
    pain: "传统痛点：审批流程慢、沟通成本高、报告难做",
    features: ["移动端一站式服务", "智能报告生成", "实时审批通知"]
  },
  {
    icon: Receipt,
    title: "月度单据，智能报销",
    description: "企业可享受月结服务，系统自动汇总差旅支出，每月仅需一张发票，极大简化财务工作。",
    pain: "传统痛点：单据繁多、报销周期长、人工审核慢",
    benefits: ["单据自动汇总", "智能对账核销", "发票合规管理"]
  },
  {
    icon: Zap,
    title: "无需垫资，即订即行",
    description: "企业专属的差旅信用额度，员工无需垫资，系统自动完成费用结算，支持多种支付方式。",
    pain: "传统痛点：现金垫付压力大、审批报销慢、账期过长",
    advantages: ["企业信用支付", "自动化结算", "多样支付方式"]
  }
];

export const travelServices = [
  {
    icon: Hotel,
    title: "酒店",
    bgColor: "bg-blue-500",
    shortcut: true
  },
  {
    icon: Plane,
    title: "国内机票",
    bgColor: "bg-blue-500",
    shortcut: true
  },
  {
    icon: Train,
    title: "火车票",
    bgColor: "bg-blue-500",
    shortcut: true
  },
  {
    icon: Car,
    title: "用车",
    bgColor: "bg-blue-500",
    shortcut: true
  }
];

export const additionalServices = [
  {
    icon: Globe,
    title: "国际机票",
    description: "全球航线预订"
  },
  {
    icon: Car,
    title: "外卖",
    description: "商旅餐饮服务"
  },
  {
    icon: FileText,
    title: "询价单",
    description: "快速获取报价"
  },
  {
    icon: Globe,
    title: "出行攻略",
    description: "智能行程规划"
  }
];

export const businessServices = [
  {
    icon: CheckSquare,
    title: "审批",
    description: "一键审批流程"
  },
  {
    icon: Clock,
    title: "外勤签到",
    description: "智能考勤管理"
  },
  {
    icon: Receipt,
    title: "差旅报告",
    description: "自动生成报表"
  },
  {
    icon: PieChart,
    title: "差旅标准",
    description: "企业制度管理"
  },
  {
    icon: FileText,
    title: "表单",
    description: "自定义申请单"
  }
];

export const leftFeatures = [
  {
    icon: Plane,
    title: "机票",
    description: "7*24不间断服务，多渠道预订"
  },
  {
    icon: Train,
    title: "火车",
    description: "多接口实现火车票查询、预订功能"
  },
  {
    icon: ShoppingCart,
    title: "外卖",
    description: "商旅餐饮服务，丰富美食选择"
  }
];

export const rightFeatures = [
  {
    icon: Hotel,
    title: "酒店",
    description: "国内外近30万家酒店查询及预订"
  },
  {
    icon: Car,
    title: "用车",
    description: "用车覆盖全国300多个城市"
  },
  {
    icon: Store,
    title: "壹号商城",
    description: "品质优选商品，专享优惠价格"
  }
];
