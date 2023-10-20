type LinkButtonProps = {
  href: string;
  content: string;
  type: "discord" | "instagram" | "tiktok" | "tokopedia" | "misc";
};

export default function LinkButton({
  href,
  content = "",
  type = "misc",
}: LinkButtonProps) {
  return (
    <a
      className={type ? `link-button ${type}` : "link-button"}
      target="_blank"
      rel="noreferrer noopener"
      href={href}
    >
      <b>{content}</b>
    </a>
  );
}
