type LinkButtonProps = {
  key?: string;
  href: string;
  content: string;
  type:
    | "discord"
    | "instagram"
    | "tiktok"
    | "shopee"
    | "tokopedia"
    | "misc"
    | "misc-inverted"
    | "confirmed";
  className?: string;
};

export default function LinkButton({
  key,
  href,
  content = "",
  type = "misc",
  className,
}: LinkButtonProps) {
  return (
    <a
      key={key}
      className={
        className ? `${className} link-button ${type}` : `link-button ${type}`
      }
      target="_blank"
      rel="noreferrer noopener"
      href={href}
    >
      <b>{content}</b>
    </a>
  );
}
