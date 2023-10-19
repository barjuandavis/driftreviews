import NewMouseList from "../components/NewMouseList";
import "./App.css";

function App() {
  return (
    <>
      {/* <Header title={SITE_TITLE} /> */}
      <main>
        <h1>List Rekomendasi Mouse</h1>
        <p>
          Selamat datang di list rekomendasi mouse by DRiFT! List ini untuk
          membantu kalian yang ingin mencari mouse impian kalian. List ini akan
          terus diupdate seiring berjalannya waktu. Terdapat 5 jenis rating dari
          mouse yang gue rekomendasikan. Yaitu:
        </p>
        <ul>
          <li>S Rank (GAS CHECKOUT)</li>
          <li>A Rank (Bagus Aja)</li>
          <li>B Rank (B)</li>
          <li>C Rank (Pikir Dulu Sebelum Beli)</li>
          <li>F Rank (Gausah beli)</li>
        </ul>
        <NewMouseList />
      </main>
    </>
  );
}

export default App;
