import LinkButton from "../LinkButton";
import PopupSection from "./PopupSection";

export default function TokopediaWarning(props: {
  opened: boolean;
  linkTokopedia: string;
  setOpened: (opened: boolean) => void;
}) {
  return (
    <PopupSection opened={props.opened} setOpened={props.setOpened}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            ⚠️ Perhatian untuk pengguna{" "}
            <span style={{ color: "text-green-600" }}>Tokopedia</span> ⚠️
          </h1>
          <p className="text-lg">
            Untuk mendukung jalannya operasional DRiFT, diharapkan untuk{" "}
            <b>
              menambahkan barang yang ingin Anda beli langsung di keranjang,{" "}
              <u className="text-red-600">bukan di wishlist.</u>
            </b>
          </p>
          <div className="grid gap-6">
            <div className="bg-green-100 p-6 flex gap-4 flex-col justify-center items-center rounded-xl">
              <img src="/public/keranjang.jpg" alt="keranjang" />
              <p className="text-center text-green-600 text-xl">BENAR ✅</p>
            </div>
            <div className="bg-red-100 p-6 flex gap-4 flex-col justify-center items-center rounded-xl">
              <img src="/public/wishlist.jpg" alt="wishlist" />
              <p className="text-center text-red-600 text-xl">SALAH ❌</p>
            </div>
            <LinkButton
              href={props.linkTokopedia}
              content="Oke, paham. Lanjut ke Tokopedia."
              type="confirmed"
            />
          </div>
        </div>
      </div>
    </PopupSection>
  );
}
