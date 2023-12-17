import "./badgestyles.css";
type BadgeProps = {
  className?: string;
  children: React.ReactNode;
};

export default function GenericBadge(props: BadgeProps) {
  return (
    <div
      className={
        "px-3 py-1 rounded-2xl text-xs" +
        (props.className ? " " + props.className : "")
      }
    >
      <span>{props.children}</span>
    </div>
  );
}
