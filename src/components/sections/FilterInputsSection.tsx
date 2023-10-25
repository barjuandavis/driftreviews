import FilterEmptySvg from "../../assets/filter-kosong.svg?react";
import FilterFilledSvg from "../../assets/filter-isi.svg?react";
import useFilterStore, {
  checkIfFiltersAreEmpty,
  useFilterCacheStore,
} from "@/lib/filterStore";
import { Input } from "../ui/input";
import { useEffect } from "react";

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
  const [searchTermCache, setSearchTermCache] = useFilterCacheStore((state) => [
    state.query,
    state.setQuery,
  ]);

  useEffect(() => {
    if (searchTermCache === "") {
      setSearchTermCache(searchTerm ?? "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        props.isAbsolute
          ? "flex flex-wrap gap-4 justify-center absolute top-0 left-0 p-4 pt-8 w-full"
          : "flex flex-wrap gap-4 justify-center p-4 w-full"
      }
    >
      <div className="flex flex-col w-full justify-center items-center gap-4 max-w-3xl">
        {!filterIsEmptyAndSearchTermIsEmpty && (
          <div className="flex justify-end w-full">
            <p
              className="underline cursor-pointer text-slate-400"
              onClick={() => {
                setSearchTermCache("");
                resetFilters();
              }}
            >
              Reset semua filter
            </p>
          </div>
        )}
        <div className="flex w-full gap-4 max-w-3xl">
          <Input
            type="text"
            placeholder="Mau cari mouse apa?"
            value={searchTermCache}
            onChange={(event) => {
              setSearchTermCache(event.target.value);
            }}
          />
          <button
            type="button"
            style={{
              fontSize: "0.875rem",
            }}
            onClick={() => {
              setSearchTerm(searchTermCache);
            }}
            className="link-button"
          >
            Cari
          </button>
        </div>
        <div className="w-fit max-w-fit">
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
    </div>
  );
}
