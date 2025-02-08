
export interface RoomFeature {
  name: string;
  available: boolean;
}

export interface Room {
  id: string;
  hotelName: string;
  roomType: string;
  price: number;
  size: string;
  maxGuests: number;
  features: RoomFeature[];
  breakfast: string;
  confirmationRules: string;
  cancellationRules: string;
  distanceInKm: number;
  // 新增字段
  renovationTime?: string;
  rating?: number;
  starRating?: number;
  hotelImage?: string;
  facilities?: string[];
  floor?: string;
  window?: string;
  bedType?: string;
  roomImage?: string;
}
