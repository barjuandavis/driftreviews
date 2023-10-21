import { create } from "zustand";

export type Filters = {
  brands: string[];
  valueRating: string[];
  priceRange: string[];
  shapes: string[];
  ranks: string[];
};

export type FilterTypes = keyof Filters;
export interface FiltersState {
  filters: Filters;
  toggleFilterValue(filterType: FilterTypes, value: string): void;
  resetFilterValues(): void;
}

const useFilterStore = create<FiltersState>()((set) => ({
  filters: {
    brands: [],
    valueRating: [],
    priceRange: [],
    shapes: [],
    ranks: [],
  },
  toggleFilterValue(filterType: FilterTypes, value: string) {
    set((state) => {
      const filterValues = state.filters[filterType];
      const isValueInFilter = filterValues.includes(value);
      const newFilterValues = isValueInFilter
        ? filterValues.filter((filterValue) => filterValue !== value)
        : [...filterValues, value];

      return {
        filters: {
          ...state.filters,
          [filterType]: newFilterValues,
        },
      };
    });
  },
  resetFilterValues() {
    set({
      filters: {
        brands: [],
        valueRating: [],
        priceRange: [],
        shapes: [],
        ranks: [],
      },
    });
  },
}));

export default useFilterStore;

export function checkIfFiltersAreEmpty() {
  const filters = useFilterStore.getState().filters;
  return Object.values(filters).every((filter) => filter.length === 0);
}
