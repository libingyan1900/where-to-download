
import { FeatureGroup } from "./types";

export const featureGroups: FeatureGroup[] = [
  {
    title: "酒店特征",
    features: [
      { key: "hotelName", label: "酒店名称", sortable: true },
      { key: "renovationTime", label: "装修时间", sortable: true },
      { key: "rating", label: "评分", sortable: true },
      { key: "starRating", label: "星级", sortable: true },
      { key: "distanceInKm", label: "距离", sortable: true },
      { key: "facilities", label: "酒店设施" },
      { key: "hotelImage", label: "酒店图片" },
    ],
  },
  {
    title: "房型特征",
    features: [
      { key: "roomType", label: "房型名称", sortable: true },
      { key: "size", label: "面积", sortable: true },
      { key: "floor", label: "楼层", sortable: true },
      { key: "window", label: "窗户" },
      { key: "bedType", label: "床型" },
      { key: "roomImage", label: "房型图片" },
    ],
  },
  {
    title: "政策信息",
    features: [
      { key: "breakfast", label: "早餐" },
      { key: "cancellationRules", label: "取消规则" },
      { key: "confirmationRules", label: "确认时效" },
    ],
  },
];
