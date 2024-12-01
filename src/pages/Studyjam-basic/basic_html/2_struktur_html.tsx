import TopBar from "../../../components/Dashboard/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";

const Learning = () => {
  return (
    <main className="grid gap-4 p-4 sm:grid-cols-[220px,_1fr] grid-cols-1">
      <Sidebar />

      <div className="bg-white rounded-lg pb-4 shadow">
        <TopBar />

        <div className="px-5 md:px-10">
          <div>
            <h1 className="font-bold text-xl">
              Apa yang dimaksud struktur dasar HTML?
            </h1>
            <p>
              Struktur dasar HTML adalah kerangka atau format dasar yang
              digunakan untuk membuat halaman web menggunakan HTML (Hypertext
              Markup Language). Ini adalah kerangka dasar yang harus dipahami
              oleh setiap pengembang web untuk membuat halaman web yang valid
              dan terstruktur dengan baik. Berikut adalah contoh penulisan
              struktur dasar html:
            </p>
            <h1 className="font-bold text-xl my-5">
              Contoh struktur dasar penulisan HTML
            </h1>
            <iframe
              height={400}
              style={{ width: "100%" }}
              scrolling="no"
              title="HTML"
              src="https://codepen.io/Satrioagung10/embed/RwdQPpa?default-tab=html%2Cresult&editable=true"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
            >
              <p>
                See the Pen{" "}
                <a href="https://codepen.io/Satrioagung10/pen/RwdQPpa">HTML</a>{" "}
                by Satrio Agung Wicaksono (
                <a href="https://codepen.io/Satrioagung10">@Satrioagung10</a>)
                on <a href="https://codepen.io">CodePen</a>.
              </p>
            </iframe>
            <h1 className="font-bold text-xl my-5">
              Penjelasan Struktur HTML Diatas
            </h1>
            <ul className="list-disc ml-8">
              <li>
                <p>
                  Tag <span className="text-red-500">&lt;head&gt;</span> yang
                  ada pada HTML adalah wadah atau penampung untuk elemen HTML
                  yang lain. Contohnya elemen berikut:{" "}
                  <code>&lt;style&gt;</code>, <code>&lt;meta&gt;</code>,{" "}
                  <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code>, dan{" "}
                  <code>&lt;base&gt;</code>.
                </p>
              </li>
              <li>
                Tag <span className="text-red-500">&lt;Title&gt;</span> adalah
                tag yang digunakan untuk mendefinisikan judul atau nama dari
                dokumen HTML (Website).
              </li>
              <li>
                <p>
                  Tag <span className="text-red-500">&lt;body&gt;</span> adalah
                  elemen yang mewakili isi dokumen HTML. Segala sesuatu yang ada
                  di dalam elemen ini ditampilkan di halaman utama browser.{" "}
                  <code>&lt;body&gt;</code> berisi semua dokumen HTML, seperti
                  teks, hyperlink, gambar, tabel, list, dan lain-lain.
                </p>
              </li>
              <li>
                Tag <span className="text-red-500">&lt;h1&gt;</span> adalah
                elemen yang mendefinisikan judul pada konten website.
              </li>
              <li>
                Tag <span className="text-red-500">&lt;p&gt;</span> adalah
                elemen yang mendefinisikan paragraf pada konten website.
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    </main>
  );
};

export default Learning;
