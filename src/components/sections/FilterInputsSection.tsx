import FilterEmptySvg from "../../assets/filter-kosong.svg?react";
import FilterFilledSvg from "../../assets/filter-isi.svg?react";
import useFilterStore, { checkIfFiltersAreEmpty } from "@/lib/filterStore";
import { Input } from "../ui/input";

export default function FilterButtonsSection(props: {
  isAbsolute: boolean;
  setFilterButtonOpened: (opened: boolean) => void;
}) {
  const resetFilters = useFilterStore((state) => state.resetFilterValues);
  const filterIsEmptyAndSearchTermIsEmpty = checkIfFiltersAreEmpty();
  const filterIsEmpty = checkIfFiltersAreEmpty("onlyFilters");
  const [searchTerm, setSearchTerm] = useFilterStore((state) => [
    state.searchTerm,
    state.setSearchTerm,
  ]);
  return (
    <div
      className={
        props.isAbsolute
          ? "HEYIMABSOLUTE flex flex-wrap gap-4 w-full justify-center absolute top-0 left-0"
          : "flex flex-wrap gap-4 w-full justify-center"
      }
    >
      {!filterIsEmptyAndSearchTermIsEmpty && (
        <div className="flex justify-end w-full">
          <p
            className="underline cursor-pointer text-slate-400"
            onClick={resetFilters}
          >
            Reset semua filter
          </p>
        </div>
      )}
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div>
        <button
          type="button"
          onClick={() => {
            props.setFilterButtonOpened(true);
          }}
          className={!filterIsEmpty ? "button-toggle" : "link-button"}
        >
          Filter{" "}
          {filterIsEmpty ? (
            <FilterEmptySvg className="w-5 h-5 ml-2 align-text-top inline-block" />
          ) : (
            <FilterFilledSvg className="w-5 h-5 ml-2 align-text-top inline-block" />
          )}
        </button>
      </div>
    </div>
  );
}
