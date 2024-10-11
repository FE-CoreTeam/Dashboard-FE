const Roadmap = () => {
  return (
    <>
      <div className="w-full text-center justify-center">
        <span className="text-lg font-bold block">Roadmap</span>
        <span className="text-sm block text-stone-500">
          Materi yang akan dipelajari
        </span>
        <div className="rounded overflow-hidden aspect-[16/9] p-8">
          <img
            src="images/roadmap.svg"
            alt="Placeholder Image"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      <div className="w-full text-start justify-start px-8 pb-8">
        <p className="indent-2 text-base">
          Materi yang akan kita pelajari mencakup beberapa teknologi
          inti dalam pengembangan web. Berikut adalah poin-poin
          penting beserta penjelasannya:
        </p>
        <br />
        <ul className="ps-4">
          <li>
            <h2 className="text-base font-bold">
              1. HTML (HyperText Markup Language)
            </h2>
            <p className="text-base text-stone-500">
              HTML adalah bahasa markup dasar untuk membuat struktur
              halaman web. Elemen-elemen seperti teks, gambar, link,
              tabel, dan form semuanya dibuat menggunakan HTML.
              Penting dipelajari karena HTML adalah fondasi dari semua
              halaman web.
            </p>
          </li>
          <br />
          <li>
            <h2 className="text-base font-bold">
              2. CSS (Cascading Style Sheets)
            </h2>
            <p className="text-base text-stone-500">
              CSS digunakan untuk menentukan tampilan dan tata letak
              dari halaman web yang telah dibuat dengan HTML. Dengan
              CSS, kita dapat mengatur warna, font, margin, dan elemen
              visual lainnya. Memungkinkan kita membuat tampilan yang
              menarik dan responsif.
            </p>
          </li>
          <br />
          <li>
            <h2 className="text-base font-bold">
              3. JavaScript (JS)
            </h2>
            <p className="text-base text-stone-500">
              JavaScript adalah bahasa pemrograman yang memungkinkan
              kita untuk membuat interaksi dinamis di halaman web.
              Contohnya adalah validasi form, animasi, atau mengubah
              konten secara dinamis tanpa perlu me-refresh halaman.
              Merupakan keterampilan yang sangat penting untuk
              pengembangan web modern karena memungkinkan pengalaman
              pengguna yang lebih baik.
            </p>
          </li>
          <br />

          <li>
            <h2 className="text-base font-bold">4. Bootstrap</h2>
            <p className="text-base text-stone-500">
              Bootstrap adalah framework CSS yang membantu kita
              membuat tampilan web yang responsif dengan cepat dan
              efisien. Bootstrap menyediakan komponen seperti grid
              system, tombol, dan form yang sudah diatur sedemikian
              rupa. Mempercepat proses pengembangan tampilan dengan
              komponen yang siap pakai dan responsif.
            </p>
          </li>
          <br />

          <li>
            <h2 className="text-base font-bold">5. Tailwind CSS</h2>
            <p className="text-base text-stone-500">
              Tailwind CSS adalah framework utility-first yang
              memungkinkan kita menulis CSS secara lebih efisien.
              Alih-alih menggunakan kelas-kelas besar, Tailwind
              memfokuskan pada penggunaan kelas-kelas kecil (utility)
              yang dapat dikombinasikan untuk menghasilkan desain yang
              unik. Lebih fleksibel dibandingkan framework CSS
              lainnya, memungkinkan customisasi yang lebih mendetail.
            </p>
          </li>
          <br />

          <li>
            <h2 className="text-base font-bold">6. GitHub</h2>
            <p className="text-base text-stone-500">
              GitHub adalah platform yang digunakan untuk version
              control menggunakan Git. Dengan GitHub, kita dapat
              menyimpan, mengelola, dan berkolaborasi dalam proyek
              pengembangan perangkat lunak. Sangat penting untuk
              manajemen proyek dan kolaborasi, terutama dalam tim
              pengembang.
            </p>
          </li>
        </ul>
        <br />
        <p className="indent-2 text-base">
          Materi ini mencakup berbagai teknologi yang akan memberi
          dasar yang kuat dalam pengembangan web, dari struktur,
          tampilan, interaksi, hingga kolaborasi dalam pengembangan.
        </p>
      </div>
    </>
  );
};

export default Roadmap;
