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
      <h1 className="font-bold text-xl mb-3">Heading</h1>
      <p>
        Heading dalam HTML adalah sebuah elemen yang digunakan untuk menandai
        judul atau kepala dari sebuah bagian atau subbagian dalam dokumen HTML.
        Heading memberikan struktur hierarkis kepada halaman web, memungkinkan
        pengguna dan mesin pencari untuk memahami konten dengan lebih baik.
      </p>
      <p>
        Terdapat beberapa level heading yang tersedia dalam HTML, mulai dari
        &lt;h1&gt; hingga &lt;h6&gt;, di mana &lt;h1&gt; merupakan heading
        level tertinggi dan &lt;h6&gt; merupakan heading level terendah.
        Semakin tinggi level heading, semakin besar ukuran dan kepentingan
        relatifnya.
      </p>
      <p>Berikut adalah contoh penggunaan heading dalam HTML:</p>

      <iframe
        height={400}
        style={{ width: '100%' }}
        scrolling="no"
        title="Heading"
        src="https://codepen.io/Satrio-Agung/embed/oNVExvr?default-tab=html%2Cresult&editable=true"
        frameBorder="no"
        loading="lazy"
        allowTransparency={true}
        allowFullScreen={true}
        className="my-8"
      ></iframe>

      <h1 className="font-bold text-xl mb-3">Paragraph</h1>
      <p>
        Paragraph dalam HTML adalah sebuah elemen yang digunakan untuk menandai
        teks atau konten yang membentuk sebuah paragraf. Elemen &lt;p&gt; (paragraph)
        digunakan untuk mengelompokkan teks menjadi satu unit paragraf, memisahkan
        konten teks yang berbeda dalam halaman web.
      </p>
      <p>
        Dengan menggunakan elemen &lt;p&gt;, kita dapat dengan mudah mengatur
        dan menampilkan teks dalam bentuk paragraf yang terstruktur. Ini membantu
        meningkatkan keterbacaan dan pemahaman konten oleh pengguna. Berikut adalah
        contoh penggunaan paragraph dalam HTML:
      </p>
      <iframe
        height={400}
        style={{ width: '100%' }}
        scrolling="no"
        title="Paragraph"
        src="https://codepen.io/Satrio-Agung/embed/GReQZvN?default-tab=html%2Cresult&editable=true"
        frameBorder="no"
        loading="lazy"
        allowTransparency={true}
        allowFullScreen={true}
        className="my-8"
      ></iframe>
    </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
