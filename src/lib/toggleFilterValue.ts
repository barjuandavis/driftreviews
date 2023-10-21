import processFilter, { FilterTypes, Filters } from "./processFilters";

export default function toggleFilterValue(
  value: string,
  whatToFilter: FilterTypes,
  filters: Filters,
  setFilters: (filters: Filters) => void
) {
  const index = filters[whatToFilter].indexOf(value);
  if (index === -1) {
    processFilter(whatToFilter, "add", value, filters, setFilters);
  } else {
    processFilter(whatToFilter, "remove", value, filters, setFilters);
  }
}
