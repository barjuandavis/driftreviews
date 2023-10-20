import GenericBadge from "./GenericBadge";
export type ValueRatings = "1" | "2" | "3";

type BadgeProps = {
  valueRating: ValueRatings;
};

export default function ValueRatingBadge({ valueRating = "1" }: BadgeProps) {
  const numRating = parseInt(valueRating);

  return (
    <GenericBadge className="bg-yellow-200">
      {Array.from(Array(numRating).keys()).map((i) => (
        <span key={i} className="text-yellow-800">
          💸
        </span>
      ))}
    </GenericBadge>
  );
}
