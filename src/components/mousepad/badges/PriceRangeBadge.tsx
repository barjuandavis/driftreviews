import { mousepadPrices } from "@/lib/generateValues";
import GenericBadge from "./GenericBadge";

export type MousepadPrices = (typeof mousepadPrices)[number];

type BadgeProps = {
  priceRange: MousepadPrices;
};

export default function PriceRangeBadge({
  priceRange = "Under 100 Ribu",
}: BadgeProps) {
  const priceRangeMap = [
    "bg-yellow-100 text-yellow-800",
    "bg-yellow-200 text-yellow-800",
    "bg-yellow-300 text-yellow-800",
    "bg-yellow-400 text-yellow-800",
    "bg-yellow-600 text-yellow-100",
  ];

  const indexOfPriceRange = Math.max(
    mousepadPrices.findIndex((val) => val === priceRange),
    0
  );

  return (
    <GenericBadge className={priceRangeMap[indexOfPriceRange]}>
      <span>{priceRange}</span>
    </GenericBadge>
  );
}
