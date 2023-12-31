import LinkButton from "../LinkButton";
import SlideoutSection from "./SlideoutSection";

export default function VariousLinksSection(props: { opened: boolean }) {
  return (
    <SlideoutSection opened={props.opened}>
      <div className="flex justify-center items-center gap-4 w-full flex-wrap">
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
          href="https://tokopedia.link/LCbijyxYSBb"
          content="Manset/Armsleeve"
          type="tokopedia"
        />
        <LinkButton
          href="https://tokopedia.link/sz3CkOEixBb"
          content="USB Extension"
          type="tokopedia"
        />
        <LinkButton
          href="https://tokopedia.link/IrUV7MmXDEb"
          content="Grip Tape Universal"
          type="tokopedia"
        />
        <LinkButton
          href="https://tokopedia.link/YRWxqE9t2Eb"
          content="Mouse Feet Dot Skates Tiger Arc"
          type="tokopedia"
        />
      </div>
    </SlideoutSection>
  );
}
