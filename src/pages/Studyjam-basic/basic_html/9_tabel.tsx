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
            <h1 className="font-bold text-xl mb-3">
              Pengertian tabel pada HTML
            </h1>
            <p>
              Tabel dalam HTML digunakan untuk menampilkan data secara
              terstruktur dalam baris dan kolom. Tabel ini sangat berguna untuk
              menampilkan data yang memiliki relasi atau keterkaitan antara satu
              entitas dengan entitas lainnya, seperti daftar, jadwal, atau data
              statistik.
            </p>
            <br />

            <p>
              Berikut adalah komponen-komponen utama yang terkait dengan tabel
              dalam HTML:
            </p>

            <ul className="type my-3">
              <li>
                <b>&lt;table&gt;</b>: Elemen &lt;table&gt; digunakan untuk
                mendefinisikan sebuah tabel dalam dokumen HTML.
              </li>
              <br />
              <li>
                <b>&lt;tr&gt;</b>: Elemen &lt;tr&gt; (table row) digunakan untuk
                mendefinisikan sebuah baris dalam tabel.
              </li>
              <br />
              <li>
                <b>&lt;td&gt;</b>: Elemen &lt;td&gt; (table data) digunakan
                untuk mendefinisikan sebuah sel data dalam baris tabel. Setiap
                sel mewakili satu unit data dalam tabel.
              </li>
              <br />
              <li>
                <b>&lt;th&gt;</b>: Elemen &lt;th&gt; (table header) digunakan
                untuk mendefinisikan sebuah sel header dalam baris tabel.
                Biasanya digunakan untuk judul kolom atau baris.
              </li>
            </ul>
            <br />
            <h1 className="font-bold text-xl mb-3">
              contoh penggunaan tabel pada HTML
            </h1>
            <iframe
              height={500}
              style={{ width: "100%" }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/Satrio-Agung/embed/MWxVQKE?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            ></iframe>
            <p>
              Dalam contoh di atas, kita mendefinisikan sebuah tabel dengan tiga
              kolom dan tiga baris. Elemen-elemen tersebut diatur dalam struktur
              yang sesuai: &lt;table&gt; untuk menandai awal dan akhir tabel,
              &lt;tr&gt; untuk setiap baris, dan &lt;td&gt; untuk setiap sel
              data. Pada bagian pertama tabel, baris pertama digunakan sebagai
              header menggunakan elemen &lt;th&gt;. CSS juga digunakan untuk
              menambahkan sedikit gaya ke tabel.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
