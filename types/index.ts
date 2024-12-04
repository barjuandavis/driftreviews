import { MousePost, MousepadPost, KeyboardPost } from '@/lib/prismic'

export type Product = MousePost | MousepadPost | KeyboardPost;

export interface FilterState {
  priceRange: [number, number];
  shape: string[];
  rating: number;
  category: 'Mouse' | 'Mousepad' | 'Keyboard' | 'All';
}

