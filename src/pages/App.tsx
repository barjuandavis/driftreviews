import { useState } from "react";
import NewMouseList from "../components/NewMouseList";
import "./App.css";
import About from "../components/about/About";
import "remixicon/fonts/remixicon.css";
import Chevron from "../assets/arrow-right-s-line.svg?react";

function App() {
  const [aboutOpened, setAboutOpened] = useState(false);

  console.log(Chevron);

  return (
    <>
      {/* <Header title={SITE_TITLE} /> */}
      <main>
        <h1>List Rekomendasi Mouse by DRiFT (@barjuandavis)</h1>
        <div className="flex w-full flex-col gap-4">
          <div className="flex justify-center items-center gap-4 w-full flex-wrap">
            <button
              type="button"
              className={`${
                aboutOpened ? "button-toggle " : ""
              }flex gap-2 items-center justify-center link-button
              `}
              onClick={() => setAboutOpened(!aboutOpened)}
            >
              <span>Ini apaan?!</span>
              <Chevron
                className={`chevron ${aboutOpened ? "chevron-toggle" : ""}`}
              />
            </button>
            <a
              className="link-button discord"
              target="_blank"
              rel="noreferrer noopener"
              href="https://discord.gg/cG7nKg4KqY"
            >
              <b>Discord</b>
            </a>
            <a
              className="link-button instagram"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/barjuandavis/"
            >
              <b>Instagram</b>
            </a>
            <a
              className="link-button tiktok"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@barjuandavis/"
            >
              <b>Tiktok</b>
            </a>
          </div>
          <div className="flex justify-center items-center gap-4 w-full flex-wrap">
            <a
              className="link-button tokopedia"
              target="_blank"
              rel="noreferrer noopener"
              href="https://discord.gg/cG7nKg4KqY"
            >
              Manset (Tokopedia)
            </a>
          </div>
        </div>
        <About opened={aboutOpened} />
        <NewMouseList />
      </main>
    </>
  );
}

export default App;
