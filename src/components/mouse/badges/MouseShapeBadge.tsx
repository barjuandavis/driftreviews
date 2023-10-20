import GenericBadge from "./GenericBadge";
export type MouseShapes = "Ambidextrous" | "Ergonomic" | "Egg-shape";

type BadgeProps = {
  mouseShape: MouseShapes;
};

export default function MouseShapeBadge({
  mouseShape = "Ambidextrous",
}: BadgeProps) {
  const shapeMap = {
    Ambidextrous: "bg-green-200 text-green-800",
    Ergonomic: "bg-blue-200 text-blue-800",
    "Egg-shape": "bg-red-200 text-red-800",
  };

  return (
    <GenericBadge className={shapeMap[mouseShape]}>
      <span>{mouseShape}</span>
    </GenericBadge>
  );
}
