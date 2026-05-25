export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isBestSeller?: boolean;
  isPopular?: boolean;
}

export const CATEGORIES = [
  'All',
  'Romantic',
  'Birthday',
  'Sympathy',
  'Anniversary',
  'Just Because'
];
