type LinkButtonProps = {
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
  href,
  content = "",
  type = "misc",
  className,
}: LinkButtonProps) {
  return (
    <a
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
