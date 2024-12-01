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
              Penggunaan CSS dapat dibagi menjadi tiga cara, yaitu inline,
              internal, dan eksternal:{" "}
            </h1>
            <ul className="type my-5 font-bold">
              <li>Inline CSS :</li>
            </ul>
            <p>
              Inline CSS mengacu pada style yang ditentukan secara langsung di
              dalam elemen HTML yang bersangkutan. Ini dilakukan dengan
              menggunakan atribut &quot;style&quot; di dalam tag HTML.
            </p>
            <p className="my-5">Contoh Penggunaan Inline CSS :</p>
            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/Rizky-Ramdhani/embed/oNONGwY?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              // eslint-disable-next-line react/no-unknown-property
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>

            <p className="my-5">
              <span className="font-bold">Note: </span>Penggunaan inline CSS
              biasanya tidak disarankan karena sulit untuk dikelola dan
              memperbesar ukuran dokumen HTML.
            </p>
            <ul className="type my-5 font-bold">
              <li>Internal CSS :</li>
            </ul>
            <p>
              Internal CSS didefinisikan di dalam bagian &quot;head&quot; dari
              dokumen HTML menggunakan tag &quot;<code>&lt;style&gt;</code>
              &quot;. Ini memungkinkan Anda untuk mendefinisikan style untuk
              satu halaman HTML.
            </p>
            <p className="my-5">Contoh Penggunaan Internal CSS :</p>
            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="internal css"
              src="https://codepen.io/Rizky-Ramdhani/embed/JjVjrBb?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              // eslint-disable-next-line react/no-unknown-property
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>

            <ul className="type my-5 font-bold">
              <li>External CSS :</li>
            </ul>
            <p>
              External CSS memungkinkan Anda untuk mendefinisikan style di file
              terpisah dengan ekstensi .css, Ini memisahkan sepenuhnya style
              dari struktur HTML dan memungkinkan Anda untuk menggunakan style
              yang sama di beberapa halaman HTML.
            </p>
            <p className="my-5">Contoh Penggunaan External CSS :</p>
            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/Rizky-Ramdhani/embed/OJGJxBw?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              // eslint-disable-next-line react/no-unknown-property
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>

            <p className="my-5">
              <span className="font-bold">Note: </span>Dengan penggunaan
              eksternal CSS, Anda dapat mengatur style untuk banyak halaman web
              sekaligus dan mengelola style secara terpusat dalam satu file CSS.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
