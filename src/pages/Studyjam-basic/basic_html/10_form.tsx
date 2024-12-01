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
              Pengertian Form pada HTML
            </h1>
            <p>
              Form dalam HTML digunakan untuk mengumpulkan data dari pengguna
              melalui berbagai jenis input, seperti teks, pilihan, kotak
              centang, dan sebagainya. Data yang dikumpulkan melalui formulir
              ini kemudian bisa diproses atau diserahkan ke server untuk
              pemrosesan lebih lanjut.
            </p>
            <br />

            <p>Berikut adalah contoh sederhana form dalam HTML:</p>
            <br />

            <iframe
              height={500}
              style={{ width: "100%" }}
              scrolling="no"
              title="Form"
              src="https://codepen.io/Satrio-Agung/embed/ZEPxrao?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            ></iframe>

            <br />
            <h1 className="font-bold text-xl mb-3">
              Penjelasan dari contoh diatas
            </h1>
            <ul className="type">
              <li>
                <b>&lt;form&gt;</b>: Menandai awal dan akhir dari formulir.
                Atribut action menentukan URL tujuan untuk mengirimkan data,
                sedangkan atribut method menentukan metode HTTP yang akan
                digunakan (biasanya POST atau GET).
              </li>
              <br />
              <li>
                <b>&lt;div&gt;</b>: Tag ini digunakan untuk mengelompokkan
                elemen-elemen dalam formulir untuk tujuan styling atau
                manipulasi dengan JavaScript.
              </li>
              <br />
              <li>
                <b>&lt;label&gt;</b>: Ini adalah label untuk setiap elemen
                input. Label ini membantu pengguna memahami apa yang diharapkan
                dari setiap input.
              </li>
              <br />
              <li>
                <b>&lt;input type="text"&gt;</b>: Ini adalah elemen input teks
                yang memungkinkan pengguna memasukkan data teks. Atribut id dan
                name digunakan untuk mengidentifikasi input ini.
              </li>
              <br />
              <li>
                <b>&lt;input type="email"&gt;</b>: Ini adalah elemen input email
                yang memvalidasi apakah input yang dimasukkan adalah alamat
                email yang valid.
              </li>
              <br />
              <li>
                <b>&lt;textarea&gt;</b>: Ini adalah elemen teks area yang
                memungkinkan pengguna memasukkan lebih dari satu baris teks.
                Atribut rows dan cols mengatur jumlah baris dan kolom dalam area
                teks.
              </li>
              <br />
              <li>
                <b>&lt;select&gt;</b> dan <b>&lt;option&gt;</b>: Digunakan untuk
                membuat dropdown atau daftar pilihan.
              </li>
              <br />
              <li>
                <b>&lt;input type="radio"&gt;</b>: Ini adalah elemen radio
                button yang memungkinkan pengguna memilih satu opsi dari
                beberapa pilihan.
              </li>
              <br />
              <li>
                <b>&lt;button&gt;</b>: Ini adalah tombol kirim (submit button)
                yang, ketika ditekan, akan mengirimkan data formulir ke URL yang
                ditentukan dalam atribut action.
              </li>
            </ul>
            <br />
            <p>
              Setelah pengguna mengisi formulir, data biasanya dikirimkan ke
              server untuk diproses lebih lanjut. Hal ini bisa dilakukan dengan
              menggunakan bahasa pemrograman seperti PHP, Python, atau
              JavaScript.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
