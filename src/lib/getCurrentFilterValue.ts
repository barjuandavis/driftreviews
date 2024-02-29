import { useMouseFilterStore, MouseFilters } from "./filterStore";

export default function getCurrentFilterValueState(
  value: string,
  page: "mouse" | "keyboard" | "mousepad" = "mouse",
  whatToFilter: keyof MouseFilters,
) {
  if (page === "mouse") {
    return useMouseFilterStore.getState().filters[whatToFilter].includes(value);
  }
}
