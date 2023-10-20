// import { type Dispatch, type SetStateAction } from "react";

import SlideoutSection from "@/components/sections/SlideoutSection";
export default function About(props: { opened: boolean }) {
  const { opened } = props;
  return (
    <SlideoutSection opened={opened}>
      <p>
        <b>Selamat datang di list rekomendasi mouse by DRiFT!</b> List ini untuk
        membantu kalian yang ingin mencari mouse impian kalian. List ini akan
        terus diupdate seiring berjalannya waktu. Terdapat 5 jenis rating dari
        mouse yang gue rekomendasikan. Yaitu:
      </p>
      <ul>
        <li className="text-red-400">S Rank (GAS CHECKOUT)</li>
        <li className="text-green-400">A Rank (Bagus Aja)</li>
        <li className="text-blue-400">B Rank (B)</li>
        <li className="text-purple-500">C Rank (Pikir Dulu Sebelum Beli)</li>
        <li className="text-gray-400">F Rank (Gausah beli)</li>
      </ul>
    </SlideoutSection>
  );
}
