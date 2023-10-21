import useFilterStore, { FilterTypes } from "./filterStore";

export default function getCurrentFilterValueState(
  value: string,
  whatToFilter: FilterTypes
) {
  const filters = useFilterStore.getState().filters;
  return filters[whatToFilter].indexOf(value) !== -1;
}
