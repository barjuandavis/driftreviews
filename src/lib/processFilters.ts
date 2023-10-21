export type Filters = {
  brands: string[];
  valueRating: string[];
  priceRange: string[];
  shapes: string[];
};

export type FilterTypes = keyof Filters;

export default function processFilter(
  whatToFilter: FilterTypes,
  action: "add" | "remove",
  value: string,
  filters: Filters,
  setFilters: (filters: Filters) => void
) {
  if (action === "add") {
    filters[whatToFilter].push(value);
    setFilters(filters);
  }

  if (action === "remove") {
    filters[whatToFilter] = filters[whatToFilter].filter((filter) => {
      return filter !== value;
    });
    setFilters(filters);
  }
}
