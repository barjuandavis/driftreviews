import { FilterTypes, Filters } from "./processFilters";

export default function getCurrentFilterValueState(
  value: string,
  whatToFilter: FilterTypes,
  filters: Filters
) {
  return filters[whatToFilter].indexOf(value) !== -1;
}
