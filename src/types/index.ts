export type Category =
  | "all"
  | "pizza"
  | "burgers"
  | "sandwiches"
  | "desserts"
  | "coffee"
  | "drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  isPopular?: boolean;
  isSpecialOffer?: boolean;
  discountPrice?: number;
}

export interface CartItem {
  product: MenuItem;
  quantity: number;
}
