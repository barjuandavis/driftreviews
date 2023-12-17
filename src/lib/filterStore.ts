import { create } from "zustand";

export type MouseFilters = {
  brands: string[];
  valueRating: string[];
  priceRange: string[];
  shapes: string[];
  ranks: string[];
  sizes: string[];
};

export type FilterTypes = keyof MouseFilters;

export interface MouseFiltersState {
  searchTerm?: string;
  filters: MouseFilters;
  toggleFilterValue(filterType: FilterTypes, value: string): void;
  resetFilterValues(): void;
  setSearchTerm(searchTerm: string): void;
}

const mouseFilterInitialState: MouseFilters = {
  brands: [],
  valueRating: [],
  priceRange: [],
  shapes: [],
  ranks: [],
  sizes: [],
};

const useFilterStore = create<MouseFiltersState>()((set) => ({
  searchTerm: "",
  filters: { ...mouseFilterInitialState },
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
      searchTerm: "",
      filters: { ...mouseFilterInitialState },
    });
  },
  setSearchTerm(searchTerm: string) {
    set({ searchTerm });
  },
}));

const useFilterCacheStore = create<{
  query: string;
  setQuery(query: string): void;
}>((set) => ({
  query: "",
  setQuery(query: string) {
    set({ query });
  },
}));

export function checkIfFiltersAreEmpty(type: "all" | "onlyFilters" = "all") {
  const store = useFilterStore.getState();
  const filters = store.filters;
  return (
    Object.values(filters).every((filter) => filter.length === 0) &&
    (type === "onlyFilters" ? true : store.searchTerm === "")
  );
}
export default useFilterStore;
export { useFilterCacheStore };
