import Chevron from "../../assets/arrow-right-s-line.svg?react";
export default function SlideoutButton(props: {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  content: string;
}) {
  return (
    <button
      type="button"
      className={`${
        props.opened ? "button-toggle " : ""
      }flex gap-2 items-center justify-center link-button
        `}
      onClick={() => props.setOpened(!props.opened)}
    >
      <span>{props.content}</span>
      <Chevron className={`chevron ${props.opened ? "chevron-toggle" : ""}`} />
    </button>
  );
}
