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
            <h1 className="font-bold text-xl mb-3">Image</h1>
            <p>
              Elemen &lt;img&gt; dalam HTML digunakan untuk menampilkan gambar
              di halaman web. Elemen &lt;img&gt; tidak memiliki tag penutup
              (closing tag), karena itu merupakan elemen tunggal yang
              self-closing. Elemen &lt;img&gt; memiliki atribut yang digunakan
              untuk menentukan lokasi dan sifat gambar yang akan ditampilkan.
              Berikut adalah contoh penggunaan elemen &lt;img&gt; dalam HTML:
            </p>
            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/Satrioagung10/embed/vEBOGPb?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
            >
              See the Pen{" "}
              <a href="https://codepen.io/Satrioagung10/pen/vEBOGPb">
                Untitled
              </a>{" "}
              by Satrio Agung Wicaksono (
              <a href="https://codepen.io/Satrioagung10">@Satrioagung10</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </iframe>

            <h1 className="font-bold text-xl mb-3">Dalam contoh diatas:</h1>
            <ul className="list-disc pl-6">
              <li>
                Atribut <b>src</b> digunakan untuk menentukan lokasi (URL) dari
                gambar yang akan ditampilkan.
              </li>
              <li>
                Atribut <b>alt</b> (teks alternatif) adalah teks yang akan
                muncul jika gambar tidak dapat dimuat. Selain itu, teks
                alternatif juga membantu dalam aksesibilitas web dan memberikan
                deskripsi singkat tentang gambar bagi pengguna yang menggunakan
                pembaca layar atau dalam situasi di mana gambar tidak dapat
                ditampilkan.
              </li>
            </ul>

            <p>
              Anda juga dapat menambahkan atribut lain ke elemen &lt;img&gt;
              untuk mengontrol aspek lain dari tampilan dan perilaku gambar,
              seperti lebar (width), tinggi (height), dll.
            </p>

            <h1 className="font-bold text-xl my-3">
              Penggunaan tag &lt;img&gt; ada 2:
            </h1>
            <ul className="list-disc pl-6">
              <li>Menggunakan image dari local file.</li>
              <li>Menggunakan link atau image address dari situs lain.</li>
            </ul>

            <div className="local">
              <h1 className="font-bold text-xl my-3">
                A. Menggunakan image dari local file
              </h1>
              <p>1. Buat folder baru dengan judul (Misalnya: belajar image lokal).</p>
              <p>
                2. Kemudian buat folder img di dalam folder image lokal yang
                telah kalian buat.
              </p>
              <p>3. Buka Visual Studio Code dan pilih folder image lokal.</p>
              <p>
                4. Buat file HTML dengan judul (Misalnya: index.html) dan
                letakan gambar atau foto di folder img yang telah kalian buat.
              </p>
              <img
                className="my-3"
                src="https://i.imgur.com/7slB6Cr.png"
                alt="img-1"
              />
              <p>
                5. Dalam tag &lt;img&gt; <b>src</b> masukan file img yang telah
                anda buat. <b>(Note: Sesuaikan tempat anda menaruh file img)</b>
              </p>
              <img
                className="my-3"
                src="https://i.imgur.com/7kjcHwL.png"
                alt="img-2"
                width={600}
              />
              <p>
                6. Supaya lebih mudah anda bisa menekan <b>ctrl+spasi</b> pada
                src kemudian anda akan melihat pilihan seperti gambar di bawah.
              </p>
              <img
                className="my-3"
                src="https://i.imgur.com/hkMbCGz.png"
                alt="img-3"
                width={350}
              />
              <p>
                7. Sesuaikan pilihan tersebut dengan tempat anda menaruh file
                gambar.
              </p>
            </div>

            <div className="link">
              <h1 className="font-bold text-xl my-3">
                B. Menggunakan link atau image address
              </h1>
              <p>1. Buka browser dan cari gambar yang anda inginkan.</p>
              <p>
                2. Kemudian klik kanan di gambar tersebut dan pilih copy image
                address
              </p>
              <p>
                3. Letakan hasil yang telah di copy dari img address browser
                kalian ke dalam <b>src.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
