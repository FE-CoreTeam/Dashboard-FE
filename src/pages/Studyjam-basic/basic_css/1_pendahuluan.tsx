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
            <h1 className="font-bold text-xl">Pengertian CSS</h1>
            <p className="mt-3">
              CSS (Cascading Style Sheets) adalah bahasa pemrograman yang
              digunakan untuk mengontrol tampilan dan format halaman web yang
              ditulis dalam bahasa markup seperti HTML dan XML. CSS memungkinkan
              pemisahan antara struktur konten dari sebuah dokumen web dan cara
              tampilannya. Ini memungkinkan pengembang web untuk membuat
              perubahan gaya pada seluruh situs web dengan mudah hanya dengan
              mengubah satu file CSS, tanpa harus mengubah setiap halaman secara
              individual.
            </p>
            <h1 className="font-bold text-xl my-5">Sejarah Perkembangan CSS</h1>
            <ol className="ms-8" type="1">
              <li className="my-5">
                <span className="font-bold">1. Awal Mula (1990-an):</span> CSS
                pertama kali diusulkan oleh Hakon Wium Lie dan Bert Bos pada
                tahun 1994. Mereka melihat perlunya sebuah sistem untuk
                mengendalikan gaya dan tata letak pada halaman web yang terpisah
                dari struktur konten.
              </li>
              <li className="my-5">
                <span className="font-bold">2. CSS1 (1996):</span> CSS level 1
                dirilis pada tahun 1996 sebagai spesifikasi pertama yang resmi.
                Ini menawarkan kemampuan dasar untuk mengatur tata letak, warna,
                jenis huruf, dan beberapa properti gaya lainnya.
              </li>
              <li className="my-5">
                <span className="font-bold">3. CSS2 (1998):</span> CSS level 2
                dirilis pada tahun 1998. Ini menambahkan berbagai fitur baru
                seperti posisi elemen, tata letak tabel yang diperbaiki, dan
                dukungan untuk media cetak.
              </li>
              <li className="my-5">
                <span className="font-bold">4. CSS (1996):</span> CSS level 3
                merupakan perluasan dari CSS2 dan diperkenalkan pada awal tahun
                2000-an. Ini memperkenalkan banyak modul baru seperti CSS
                Transitions, CSS Animations, dan CSS3 Media Queries, yang
                memungkinkan pengembang untuk membuat efek-efek interaktif dan
                desain responsif yang dinamis.
              </li>
              <li className="my-5">
                <span className="font-bold">
                  5. Pengembangan Lanjutan (2010-an):
                </span>{" "}
                CSS terus mengalami pengembangan dan penyempurnaan. Modul-modul
                baru diperkenalkan untuk menangani tata letak yang lebih
                kompleks, seperti CSS Grid Layout dan Flexbox. Ini memberikan
                pengembang lebih banyak alat untuk menciptakan desain web yang
                fleksibel dan responsif.
              </li>
              <li className="my-5">
                <span className="font-bold">6. CSS4 dan Masa Depan:</span>{" "}
                Walaupun tidak ada spesifikasi resmi untuk CSS4, namun
                perkembangan di bidang CSS terus berlanjut. Ada eksperimen dan
                konsep baru yang terus dikembangkan untuk memperbaiki kinerja,
                kemampuan, dan kemudahan penggunaan CSS dalam pengembangan web
                modern.
              </li>
            </ol>
            <p>
              Secara keseluruhan, CSS telah menjadi salah satu teknologi yang
              paling penting dalam pengembangan web. Ia memungkinkan desain web
              yang lebih fleksibel, terstruktur, dan mudah diatur, sehingga
              membantu meningkatkan pengalaman pengguna dalam menjelajahi
              halaman web.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
