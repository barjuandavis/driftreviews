import GenericBadge from "./GenericBadge";
export type PriceRanges =
  | "Under 200 Ribu"
  | "200 Ribu - 500 Ribu"
  | "500 Ribu - 1 Juta"
  | "1 Juta - 1.5 Juta"
  | "1.5 Juta - 2 Juta"
  | "Diatas 2 Juta";

type BadgeProps = {
  priceRange: PriceRanges;
};

export default function PriceRangeBadge({
  priceRange = "Under 200 Ribu",
}: BadgeProps) {
  const priceRangeMap = {
    "Under 200 Ribu": "bg-yellow-100 text-yellow-800",
    "200 Ribu - 500 Ribu": "bg-yellow-200 text-yellow-800",
    "500 Ribu - 1 Juta": "bg-yellow-300 text-yellow-800",
    "1 Juta - 1.5 Juta": "bg-yellow-400 text-yellow-800",
    "1.5 Juta - 2 Juta": "bg-yellow-500 text-white",
    "Diatas 2 Juta": "bg-yellow-600 text-yellow-100",
  };

  return (
    <GenericBadge className={priceRangeMap[priceRange]}>
      <span>{priceRange}</span>
    </GenericBadge>
  );
}
