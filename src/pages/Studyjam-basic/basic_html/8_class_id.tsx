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
            <p>
              Dalam HTML, class dan id adalah atribut yang digunakan untuk
              memberikan identitas atau style tertentu kepada elemen-elemen
              HTML.
            </p>
            <br />
            <h1 className="font-bold text-xl mb-3">Class atribut</h1>
            <p>
              Dalam HTML, atribut class digunakan untuk memberikan satu atau
              lebih nama class kepada elemen HTML. Nama class ini biasanya
              digunakan untuk menerapkan style tertentu menggunakan CSS atau
              untuk merujuk elemen tersebut melalui JavaScript.
            </p>
            <br />
            <p>Penggunaan class dalam HTML berfungsi untuk:</p>

            <ul className="type my-3">
              <li>
                <b> Memisahkan Style</b>: Dengan menggunakan class, Anda dapat
                memisahkan struktur (HTML) dari style (CSS). Anda dapat
                mendefinisikan style tertentu untuk semua elemen dengan class
                yang sama.
              </li>
              <br />
              <li>
                <b> Menerapkan Style Berulang </b> : Jika ada beberapa elemen
                yang memerlukan style yang sama, Anda dapat menerapkannya dengan
                memberikan class yang sama kepada mereka.
              </li>
              <br />
              <li>
                <b> Menerapkan Style Spesifik</b>: Dengan menggunakan kelas,
                Anda dapat menerapkan style tertentu kepada elemen tertentu yang
                sesuai dengan kriteria class tersebut.
              </li>
            </ul>
            <br />
            <h1 className="font-bold text-xl mb-3">
              contoh penggunaan class atribut
            </h1>
            <ul className="type">
              <li>
                <b>Menerapkan style berulang</b>
              </li>
            </ul>
            <iframe
              height={400}
              style={{ width: "100%" }}
              scrolling="no"
              title="class style berulang"
              src="https://codepen.io/Satrio-Agung/embed/QWomORR?default-tab=html%2Cresult&editable=true"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            ></iframe>
            <ul className="type">
              <li>
                <b>Menerapkan style Spesifik</b>
              </li>
            </ul>
            <iframe
              height={400}
              style={{ width: "100%" }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/Satrio-Agung/embed/JjzLMKy?default-tab=html%2Cresult&editable=true"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            ></iframe>
            <br />
            <h1 className="font-bold text-xl mb-3">Id atribut</h1>
            <p>
              Di dalam HTML, atribut id digunakan untuk memberikan identifikasi
              unik pada elemen tertentu di dalam halaman web.
            </p>
            <br />
            <p>Penggunaan id dalam HTML berfungsi untuk:</p>
            <ul className="type my-3">
              <li>
                <b>Identifikasi Unik</b>: Atribut id digunakan untuk memberikan
                identitas unik pada sebuah elemen di dalam halaman web. Tidak
                ada dua elemen yang boleh memiliki id yang sama di dalam satu
                halaman HTML.
              </li>
              <br />
              <li>
                <b>Referensi dari CSS dan JavaScript</b>: Dengan menggunakan id,
                Anda bisa merujuk ke elemen tersebut dalam kode CSS untuk
                memberikan style atau dalam kode JavaScript untuk melakukan
                manipulasi atau interaksi dengan elemen tersebut.
              </li>
            </ul>
            <br />
            <h1 className="font-bold text-xl mb-3">
              contoh penggunaan id atribut
            </h1>
            <iframe
              height={400}
              style={{ width: "100%" }}
              scrolling="no"
              title="id atribut"
              src="https://codepen.io/Satrio-Agung/embed/wvOmpRB?default-tab=html%2Cresult&editable=true"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
