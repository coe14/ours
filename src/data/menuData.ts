export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // In ETB
  category: string;
  image: string;
  rating: number;
}

export const categories = [
  { id: "all", name: "All", count: 27 },
  { id: "lunch", name: "Lunch", count: 12 },
  { id: "breakfast", name: "Breakfast", count: 8 },
  { id: "fish", name: "Fish", count: 4 },
  { id: "chicken", name: "Chicken", count: 5 },
  { id: "pasta", name: "Pasta", count: 6 },
  { id: "shiro", name: "Shiro", count: 3 },
  { id: "hot-drinks", name: "Hot drinks", count: 7 },
  { id: "cold-drinks", name: "Cold Drinks", count: 9 },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Mnchet with non spicy sauce",
    description:
      "Minced beef stew cooked with rich Ethiopian aromatic spices served with Injera.",
    price: 320,
    category: "lunch",
    image:
      "https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Zilzil Tibse",
    description:
      "Strips of tender beef sauteed with onions, green peppers, and traditional spices.",
    price: 440,
    category: "lunch",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Fasting Combo",
    description:
      "Selection of delicious vegan Ethiopian stews including lentils, greens, and yellow peas.",
    price: 600,
    category: "lunch",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
  },
  {
    id: "4",
    name: "Special Kitfo",
    description:
      "Finely minced lean beef seasoned with mitmita and warm spiced clarified butter.",
    price: 580,
    category: "lunch",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
  },
  {
    id: "5",
    name: "Beef Goulash",
    description:
      "Tender beef chunks cooked with fresh tomatoes, potatoes, and mild peppers.",
    price: 580,
    category: "lunch",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
  },
  {
    id: "6",
    name: "Half Meat Dulet",
    description:
      "Traditional spiced mixture of chopped tripe, liver, and lean beef.",
    price: 220,
    category: "breakfast",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
  },
];
