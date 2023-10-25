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
  searchTerm?: string;
  filters: Filters;
  toggleFilterValue(filterType: FilterTypes, value: string): void;
  resetFilterValues(): void;
  setSearchTerm(searchTerm: string): void;
}

const useFilterStore = create<FiltersState>()((set) => ({
  searchTerm: "",
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
      searchTerm: "",
      filters: {
        brands: [],
        valueRating: [],
        priceRange: [],
        shapes: [],
        ranks: [],
      },
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
