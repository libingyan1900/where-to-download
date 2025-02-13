
import { Room } from "@/components/room-comparison/types";

export interface Feature {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface FeatureGroup {
  title: string;
  features: Feature[];
}

export interface ComparisonTableProps {
  rooms: Room[];
  pinnedRooms?: string[];
}
