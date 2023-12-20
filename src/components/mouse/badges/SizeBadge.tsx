import GenericBadge from "./GenericBadge";
export type MouseSizes = "S" | "S-M" | "M-L" | "L";
type MouseSizeProps = { size: MouseSizes };
export default function SizeBadge({ size = "S" }: MouseSizeProps) {
  const sizeMap = {
    S: "bg-blue-100 text-blue-800",
    "S-M": "bg-blue-200 text-blue-800",
    "M-L": "bg-blue-300 text-blue-800",
    L: "bg-blue-400 text-blue-800",
  };

  return (
    <GenericBadge className={sizeMap[size]}>
      <span key={size}>{size}</span>
    </GenericBadge>
  );
}
