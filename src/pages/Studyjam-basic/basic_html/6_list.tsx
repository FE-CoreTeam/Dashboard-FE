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
      <h1 className="font-bold text-xl mb-3">Apa yang dimaksud lists?</h1>
      <p>
        Lists dalam HTML adalah struktur markup yang digunakan untuk
        menyusun dan menampilkan informasi dalam bentuk daftar. Terdapat
        dua jenis utama dari list dalam HTML:
      </p>

      <h1 className="font-bold text-xl my-3">
        1. Ordered Lists (Daftar Berurut)
      </h1>
      <p>
        Ordered lists digunakan untuk menampilkan item dalam urutan
        tertentu, biasanya diwakili oleh angka atau huruf. Untuk membuat
        ordered list, Anda menggunakan tag <b> &lt;ol&gt; </b> (Ordered
        List) dan setiap item dalam list didefinisikan menggunakan tag{" "}
        <b> &lt;li&gt; </b> (List Item).
      </p>
      <br />
      <p>Contoh kode HTML untuk ordered list:</p>
      <iframe
        height={300}
        style={{ width: "100%" }}
        scrolling="no"
        title="Lists"
        src="https://codepen.io/Satrio-Agung/embed/jOJZjMQ?default-tab=html%2Cresult&editable=true"
        frameBorder="no"
        loading="lazy"
        allowTransparency={true}
        allowFullScreen={true}
        className="my-3"
      ></iframe>

      <h1 className="font-bold text-xl my-3">
        2. Unordered Lists (Daftar Tidak Berurut)
      </h1>
      <p>
        Unordered lists digunakan untuk menampilkan item tanpa
        memperhatikan urutan tertentu. Biasanya, item-item ini
        direpresentasikan dengan bullet points. Untuk membuat unordered
        list, Anda menggunakan tag <b> &lt;ul&gt; </b> (Unordered List)
        dan setiap item dalam list juga didefinisikan menggunakan tag{" "}
        <b> &lt;li&gt; </b> (List Item).
      </p>
      <br />
      <p>Contoh kode HTML untuk unordered list:</p>
      <iframe
        height={300}
        style={{ width: "100%" }}
        scrolling="no"
        title="Unordered lists"
        src="https://codepen.io/Satrio-Agung/embed/PoLQrpQ?default-tab=html%2Cresult&editable=true"
        frameBorder="no"
        loading="lazy"
        allowTransparency={true}
        allowFullScreen={true}
        className="my-3"
      ></iframe>
      <br />

      <h1 className="font-bold text-xl my-3">Macam-macam tipe lists</h1>
      <p>
        Dalam HTML, terdapat berbagai macam tipe list yang dapat digunakan
        untuk mengorganisir konten.
      </p>
      <br />

      <h1 className="font-bold text-xl my-3">Ordered Lists</h1>
      <iframe
        height={500}
        style={{ width: "100%" }}
        scrolling="no"
        title="tipe ordered list"
        src="https://codepen.io/Satrio-Agung/embed/eYXVwyY?default-tab=html%2Cresult&editable=true"
        frameBorder="no"
        loading="lazy"
        allowTransparency={true}
        allowFullScreen={true}
        className="my-3"
      ></iframe>
      <h1 className="font-bold text-xl my-5">Penjelasan tipe ordered lists</h1>
      <ul className="type">
        <li>
          <b>Type=&quot;1&quot;</b> : Item daftar akan diberi nomor dengan
          angka (default).
        </li>
        <li>
          <b>Type=&quot;A&quot;</b> : Item daftar akan diberi nomor dengan
          huruf besar.
        </li>
        <li>
          <b>Type=&quot;a&quot;</b> : Item daftar akan diberi nomor dengan
          huruf kecil.
        </li>
        <li>
          <b>Type=&quot;I&quot;</b> : Item daftar akan diberi nomor dengan
          huruf romawi besar.
        </li>
        <li>
          <b>Type=&quot;i&quot;</b> : Item daftar akan diberi nomor dengan
          huruf romawi kecil.
        </li>
      </ul>
      <br />

      <h1 className="font-bold text-xl my-3">Unordered Lists</h1>
      <iframe
        height={500}
        style={{ width: "100%" }}
        scrolling="no"
        title="tipe unordered lists"
        src="https://codepen.io/Satrio-Agung/embed/QWoQXJR?default-tab=html%2Cresult&editable=true"
        frameBorder="no"
        loading="lazy"
        allowTransparency={true}
        allowFullScreen={true}
        className="my-3"
      ></iframe>
      <h1 className="font-bold text-xl my-5">Penjelasan tipe unordered lists</h1>
      <ul className="type">
        <li>
          <b> disc </b> : Mengatur penanda item daftar ke poin (default).
        </li>
        <li>
          <b> circle </b> : Mengatur penanda item daftar menjadi lingkaran.
        </li>
        <li>
          <b> square </b> : Mengatur penanda item daftar menjadi persegi.
        </li>
        <li>
          <b> none </b> : Item daftar tidak akan ditandai.
        </li>
      </ul>
    </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
