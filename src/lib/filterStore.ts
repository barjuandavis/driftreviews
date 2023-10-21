import { create } from "zustand";

export type Filters = {
  brands: string[];
  valueRating: string[];
  priceRange: string[];
  shapes: string[];
};

export type FilterTypes = keyof Filters;

const useStore = create<Filters>()((set) => ({
  brands: [],
  valueRating: [],
  priceRange: [],
  shapes: [],
}));

export default useStore;
