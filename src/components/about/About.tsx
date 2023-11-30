// import { type Dispatch, type SetStateAction } from "react";

import PopupSection from "../../components/sections/PopupSection";

export default function About(props: {
  opened: boolean;
  setOpen: (opened: boolean) => void;
}) {
  const { opened, setOpen } = props;
  return (
    <PopupSection opened={opened} setOpened={setOpen}>
      <h3>
        <b>Gimana caranya membaca List Rekomendasi Mouse ini?</b>
      </h3>

      <p className="text-left p-4">
        List ini untuk membantu kalian yang ingin mencari mouse impian kalian.
        Ada beberapa definisi yang harus anda ketahui sebelum melihat list ini:
        <br />
        <br />
        <span className="text-xl">
          <b>1. Rank</b>
        </span>
        <br />
        <br />
        Rank adalah peringkat mouse tersebut{" "}
        <b>
          hanya berdasarkan faktor fisik dari mouse tersebut{" "}
          <u>tanpa mempertimbangkan harga.</u>
        </b>
        <br />
        Semakin tinggi rank, semakin baik mouse tersebut secara kualitas build,
        sensor, performa, kelengkapan, dan lain-lain.
        <br />
        <br />
        Rank yang ada adalah: <b>S, A+, A, B+, B, C+, C, dan F.</b> Rank S
        adalah rank tertinggi, dan rank F adalah rank terendah.
        <br />
        <br />
        Pertimbangan rank ini adalah sebagai berikut:
        <ul className="list-inside" style={{ listStyleType: "initial" }}>
          <li>
            <b>S</b>: Mouse ini memiliki package yang luar biasa baik, baik dari
            segi <i>build quality</i> maupun performa. Biasanya memiliki polling
            rate diatas 4000Hz dan berat yang sangat ringan, tanpa mengorbankan
            build quality.
          </li>
          <li>
            <b>A+</b>: Mouse ini memiliki package yang sangat baik, baik dari
            segi <i>build quality</i> maupun performa. Biasanya memiliki polling
            rate hingga 4000Hz atau lebih dan berat yang ringan, dengan
            mengorbankan sedikit build quality. Mouse yang ada di rank ini harus
            memenuhi syarat rank A dan harus wireless.
          </li>
          <li>
            <b>A</b>: Mouse ini memiliki package yang baik, baik dari segi{" "}
            <i>build quality</i> maupun performa. Biasanya memiliki polling rate
            hingga 4000Hz dan berat yang ringan. Biasanya hanya memiliki fitur
            "esensial".
          </li>
          <li>
            <b>B+</b>: Mouse ini memiliki package yang cukup baik, terutama dari
            segi performa. Biasanya memiliki polling rate diatas 1000Hz dan
            berat yang ringan, tanpa terlalu banyak mengorbankan{" "}
            <i> build quality</i>.
          </li>
          <li>
            <b>B</b>: Mouse ini memiliki package yang cukup, terutama dari segi
            performa. Biasanya memiliki polling rate hingga 1000Hz dan berat
            yang ringan, namun dapat mengorbankan <i> build quality juga</i>.
            Standar dari rank B adalah mouse dengan sensor Pixart 3370 atau 3395
            1000 Hz.
          </li>
          <li>
            <b>C+</b>: Mouse ini memiliki package yang cukup, terutama dari segi
            performa. Biasanya memiliki polling rate hingga 1000Hz dan berat
            yang ringan, namun dapat mengorbankan <i> build quality juga</i>.
            Sensor yang digunakan di bawah rank B.
          </li>
          <li>
            <b>C</b>: Mouse ini memiliki package yang cukup, terutama dari segi
            performa. Biasanya memiliki polling rate hingga 1000Hz namun dapat
            mengorbankan <i> build quality</i> dan berat mouse. Biasanya berupa
            mouse kabel.
          </li>
          <li>
            <b>F</b>: Mouse ini memiliki package yang buruk, baik dari segi
            <i>build quality</i> maupun performa. Biasanya memiliki polling rate
            dibawah 1000Hz, tidak memerhatikan berat, dan mengorbankan build
            quality. Mouse rank F tidak akan ditampilkan di website ini dan
            tidak direkomendasikan untuk dibeli.
          </li>
        </ul>
        <br />
        <br />
        <span className="text-xl">
          <b>2. Value Rating</b>
        </span>
        <br />
        <br />
        Value Rating adalah peringkat mouse tersebut{" "}
        <b>berdasarkan faktor fisik dan harga dari mouse tersebut.</b>
        Dengan kata lain, apakah mouse tersebut worth it dibeli dengan harganya.
        <br />
        <br />
        Terdapat 3 kategori Value Rating: <br /> <br />
        <ul className="list-inside list-none">
          <li>
            💸💸💸: Mouse ini merusak harga pasar mouse, karena kualitasnya
            sangat bagus dibandingkan dengan harga yang ditawarkan.
          </li>
          <li>
            💸💸: Mouse ini ditawarkan sesuai dengan kualitasnya dan harga
            pasarnya.
          </li>
          <li>
            💸: Mouse ini tidak worth it dibeli dengan harga yang ditawarkan.
          </li>
        </ul>
        <br />
        <span className="text-xl">
          <b>3. Bentuk Mouse</b>
        </span>
        <br />
        <br />
        Terdapat 3 kategori bentuk mouse: <br /> <br />
        <ul className="list-inside list-none">
          <li>
            <b>Ambidextrous:</b> Mouse ini dapat digunakan oleh tangan kanan dan
            tangan kiri ATAU memiliki bentuk yang simetris.
          </li>
          <li>
            <b>Ergonomic:</b> Mouse ini hanya dapat digunakan oleh tangan kanan.
          </li>
          <li>
            <b>Egg-shape:</b> Mouse ini berbentuk seperti telur.
          </li>
        </ul>
      </p>
    </PopupSection>
  );
}
