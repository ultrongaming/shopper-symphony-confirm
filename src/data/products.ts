
import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Desk Lamp",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A sleek, adjustable desk lamp with wireless charging base. Perfect for modern workspaces.",
    category: "home"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Premium wireless earbuds with active noise cancellation and 24-hour battery life.",
    category: "electronics"
  },
  {
    id: 3,
    name: "Leather Weekender Bag",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Handcrafted full-grain leather weekender with dedicated laptop compartment and shoe storage.",
    category: "accessories"
  },
  {
    id: 4,
    name: "Smart Water Bottle",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    description: "Insulated water bottle that tracks hydration and glows to remind you to drink water.",
    category: "health"
  },
  {
    id: 5,
    name: "Ceramic Plant Pot Set",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    description: "Set of 3 minimalist ceramic plant pots in varying sizes with bamboo drainage trays.",
    category: "home"
  },
  {
    id: 6,
    name: "Ultra-light Running Shoes",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Lightweight, breathable running shoes with responsive cushioning for maximum comfort.",
    category: "fashion"
  },
  {
    id: 7,
    name: "Smart Home Speaker",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    description: "Voice-controlled smart speaker with premium sound quality and home automation capabilities.",
    category: "electronics"
  },
  {
    id: 8,
    name: "Merino Wool Sweater",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    description: "Soft, lightweight merino wool sweater that regulates temperature and resists odors.",
    category: "fashion"
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(products.map(product => product.category)));
};
