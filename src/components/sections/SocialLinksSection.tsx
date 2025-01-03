import LinkButton from "../LinkButton";
import SlideoutSection from "./SlideoutSection";

export default function VariousLinksSection(props: { opened: boolean }) {
  return (
    <SlideoutSection opened={props.opened}>
      <div className="flex justify-center items-center gap-4 w-full flex-wrap">
        <LinkButton
          href="https://saweria.co/barjuandavis"
          className="!bg-red-800 !text-white"
          content="Youtube"
          type="misc"
        />
        <LinkButton
          href="https://discord.gg/cG7nKg4KqY"
          content="Discord"
          type="discord"
        />
        <LinkButton
          href="https://www.instagram.com/barjuandavis/"
          content="Instagram"
          type="instagram"
        />
        <LinkButton
          href="https://www.tiktok.com/@barjuandavis/"
          content="Tiktok"
          type="tiktok"
        />
        <LinkButton
          href="https://saweria.co/barjuandavis"
          className="!bg-amber-300 !text-black"
          content="Saweria"
          type="misc-inverted"
        />
      </div>
    </SlideoutSection>
  );
}
