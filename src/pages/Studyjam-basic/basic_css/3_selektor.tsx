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
            <h1 className="font-bold text-xl mb-3">Pengertian Selektor CSS</h1>
            <p>
              Selektor CSS adalah bagian dari aturan CSS yang digunakan untuk
              menentukan elemen atau kelompok elemen mana yang akan diberi gaya.
              Selektor ini memungkinkan Anda untuk menargetkan elemen HTML
              tertentu atau sekelompok elemen yang memenuhi kriteria tertentu.
            </p>
            <p className="my-5">
              Berikut adalah beberapa jenis selektor CSS beserta contohnya :
            </p>
            <ul className="type my-5 font-bold">
              <li>Selektor Elemen</li>
            </ul>
            <p className="my-5">
              Selektor elemen digunakan untuk menargetkan elemen HTML
              berdasarkan tag elemen tersebut.
            </p>
            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="Selektor Elemen"
              src="https://codepen.io/Rizky-Ramdhani/embed/WNWNZPm?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              // eslint-disable-next-line react/no-unknown-property
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>

            <p className="my-5">
              Dalam contoh di atas, semua elemen &quot;p&quot; akan memiliki
              warna teks biru.{" "}
            </p>

            <ul className="type my-5 font-bold">
              <li>Selektor Class</li>
            </ul>
            <p className="my-5">
              Selektor class digunakan untuk menargetkan elemen yang memiliki
              atribut class tertentu.
            </p>
            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/Rizky-Ramdhani/embed/mdgdBgL?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              // eslint-disable-next-line react/no-unknown-property
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>

            <p className="my-5">
              Dalam contoh di atas, elemen dengan class &quot;judul&quot;
              akan memiliki latar belakang kuning.
            </p>

            <ul className="type my-5 font-bold">
              <li>Selektor ID</li>
            </ul>
            <p className="my-5">
              Selektor id digunakan untuk menargetkan elemen dengan id tertentu.
            </p>
            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="Selektor ID"
              src="https://codepen.io/Rizky-Ramdhani/embed/zYXYEgK?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              // eslint-disable-next-line react/no-unknown-property
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>

            <p className="my-5">
              Dalam contoh di atas, elemen dengan ID &quot;navigasi&quot; akan
              memiliki latar belakang berwarna hijau.
            </p>

            <ul className="type my-5 font-bold">
              <li>Selektor Universal</li>
            </ul>
            <p className="my-5">
              Selektor universal digunakan untuk menargetkan semua elemen di
              dalam dokumen.
            </p>
            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="Universal"
              src="https://codepen.io/Rizky-Ramdhani/embed/mdgdqeG?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              // eslint-disable-next-line react/no-unknown-property
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>

            <p className="my-5">
              Dalam contoh di atas, semua elemen di dalam dokumen akan memiliki
              padding 0, margin 0, dan juga semua font menjadi sans-serif
            </p>

            <ul className="type my-5 font-bold">
              <li>Selektor Kombinasi</li>
            </ul>
            <p className="my-5">
              Selektor kombinasi memungkinkan anda untuk menggabungkan beberapa
              selektor untuk menargetkan elemen dengan kriteria tertentu.
            </p>
            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="Selektor Kombinasi"
              src="https://codepen.io/Rizky-Ramdhani/embed/poBodyJ?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              // eslint-disable-next-line react/no-unknown-property
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>

            <p className="my-5">
              Dalam contoh di atas, elemen &lt;h1&gt; dengan class title akan
              memiliki warna teks merah.
            </p>
            <p className="my-5">
              Selain contoh diatas masih banyak lagi Selektor CSS yang
              selebihnya dapat anda pelajari di{" "}
              <a
                href="https://www.w3schools.com/css/css_selectors.asp"
                target="blank"
                className="text-blue-600 hover:opacity-50 duration-150"
              >
                CSS Selectors Reference (w3schools.com)
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
