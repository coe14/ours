// Define the allowed category types
export type Category = 'all' | 'pizza' | 'burgers' | 'sandwiches' | 'desserts' | 'coffee' | 'drinks';

// Define the shape of a Single Menu Item
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  isPopular?: boolean;        // Optional flag (?) for popular food section
  isSpecialOffer?: boolean;   // Optional flag (?) for discount section
  discountPrice?: number;
}

// Define the shape of an Item inside the Shopping Cart
export interface CartItem {
  product: MenuItem;
  quantity: number;
}