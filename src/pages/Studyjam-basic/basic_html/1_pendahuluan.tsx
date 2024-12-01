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
            <h1 className="font-bold text-xl">Apa itu HTML?</h1>
            <p className="mt-3">
              HTML adalah singkatan dari Hypertext Markup Language. Ini adalah
              bahasa markup standar yang digunakan untuk membuat halaman web dan
              menentukan struktur dan konten halaman tersebut. Dengan
              menggunakan tag dan atribut, HTML memungkinkan pengembang web
              untuk merancang halaman web dengan berbagai elemen seperti teks,
              gambar, video, formulir, dan banyak lagi. HTML bekerja dengan
              browser web untuk menafsirkan dan menampilkan halaman web kepada
              pengguna. Ini adalah bagian inti dari pengembangan web dan sering
              digunakan bersama dengan CSS (Cascading Style Sheets) untuk
              menambahkan gaya dan tata letak ke halaman web, serta JavaScript
              untuk menambahkan interaktivitas dan fungsionalitas dinamis.
            </p>
            <h1 className="font-bold text-xl my-5">
              Sejarah singkat HTML dan perkembangannya
            </h1>
            <p>
              Sejarah singkat HTML dimulai dari pengembangan awal World Wide Web
              (WWW) oleh Tim Berners-Lee di CERN (Organisasi Eropa untuk Riset
              Nuklir) pada awal tahun 1990-an. Berikut adalah beberapa tonggak
              sejarah penting dalam perkembangan HTML:
            </p>
            <h1 className="font-bold text-xl my-5">
              1. Awal Pengembangan HTML (1989-1990)
            </h1>
            <ul className="list-disc ml-8">
              <li>
                <p>
                  Pada tahun 1989, Tim Berners-Lee mencetuskan konsep World Wide
                  Web (WWW) di CERN, Jenewa, Swiss.
                </p>
              </li>
              <li>
                <p>
                  Pada tahun 1990, Tim Berners-Lee dan Robert Cailliau
                  mengembangkan HTML sebagai bahasa markup untuk membuat halaman
                  web.
                </p>
              </li>
              <li>
                <p>
                  Versi awal HTML disebut HTML 1.0, yang hanya memiliki sejumlah
                  elemen dasar seperti heading, paragraph, link, dan gambar.
                </p>
              </li>
            </ul>
            <h1 className="font-bold text-xl my-5">
              2. Pengenalan HTML 2.0 (1995)
            </h1>
            <ul className="list-disc ml-8">
              <li>
                <p>
                  Pada tahun 1995, HTML 2.0 diumumkan sebagai standar oleh
                  Internet Engineering Task Force (IETF).
                </p>
              </li>
              <li>
                <p>
                  HTML 2.0 membawa banyak perubahan dan penambahan fitur,
                  termasuk tabel, formulir, teks terformat, dan sebagainya.
                </p>
              </li>
            </ul>
            <h1 className="font-bold text-xl my-5">
              3. Era Browser Perang (1995-2000)
            </h1>
            <ul className="list-disc ml-8">
              <li>
                <p>
                  Pada pertengahan hingga akhir tahun 1990-an, terjadi
                  persaingan sengit antara browser web yang bersaing untuk
                  mendominasi pasar.
                </p>
              </li>
              <li>
                <p>
                  Microsoft meluncurkan Internet Explorer (IE), sementara
                  Netscape meluncurkan Navigator.
                </p>
              </li>
              <li>
                <p>
                  Perkembangan HTML menjadi lebih dinamis dengan munculnya
                  JavaScript sebagai bahasa pemrograman di sisi klien.
                </p>
              </li>
            </ul>
            <h1 className="font-bold text-xl my-5">
              4. HTML 3.2 (1997) dan HTML 4.01 (1999)
            </h1>
            <ul className="list-disc ml-8">
              <li>
                <p>
                  HTML 3.2 diperkenalkan sebagai spesifikasi W3C (World Wide Web
                  Consortium) pada tahun 1997.
                </p>
              </li>
              <li>
                <p>
                  HTML 4.01, yang menyempurnakan versi sebelumnya, diperkenalkan
                  pada tahun 1999 dengan banyak peningkatan fitur dan perbaikan.
                </p>
              </li>
            </ul>
            <h1 className="font-bold text-xl my-5">5. XHTML (2000)</h1>
            <ul className="list-disc ml-8">
              <li>
                <p>
                  XHTML (Extensible Hypertext Markup Language) muncul sebagai
                  evolusi dari HTML.
                </p>
              </li>
              <li>
                <p>
                  XHTML dirancang untuk lebih ketat dan lebih bersih, mengikuti
                  aturan XML (Extensible Markup Language).
                </p>
              </li>
              <li>
                <p>
                  Versi XHTML yang paling terkenal adalah XHTML 1.0 yang
                  diperkenalkan pada tahun 2000.
                </p>
              </li>
            </ul>
            <h1 className="font-bold text-xl my-5">6. HTML5 (2008-2014)</h1>
            <ul className="list-disc ml-8">
              <li>
                <p>
                  HTML5 merupakan evolusi terbaru dari HTML, yang memperkenalkan
                  sejumlah elemen baru, atribut, dan API.
                </p>
              </li>
              <li>
                <p>
                  HTML5 menghadirkan kemampuan untuk membuat halaman web yang
                  lebih dinamis, interaktif, dan responsif.
                </p>
              </li>
              <li>
                <p>
                  Proses pengembangan HTML5 dimulai pada tahun 2008 dan
                  diumumkan sebagai rekomendasi W3C pada tahun 2014.
                </p>
              </li>
            </ul>
            <h1 className="font-bold text-xl my-5">7. HTML Terkini</h1>
            <ul className="list-disc ml-8">
              <li>
                <p>
                  HTML terus mengalami perkembangan dengan penambahan fitur dan
                  perbaikan terkini.
                </p>
              </li>
              <li>
                <p>
                  Spesifikasi HTML Living Standard sekarang dipelihara oleh
                  WHATWG (Web Hypertext Application Technology Working Group),
                  sebuah kelompok kerja yang bertujuan untuk mengembangkan
                  teknologi web secara terbuka.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
