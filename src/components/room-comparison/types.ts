
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
  image: string;
  breakfast: string;
  confirmationRules: string;
  cancellationRules: string;
}
