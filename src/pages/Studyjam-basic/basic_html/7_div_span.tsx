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
            <h1 className="font-bold text-xl mb-3">Div pada HTML</h1>
            <p>
              Elemen &lt;div&gt; dalam HTML adalah sebuah elemen yang digunakan
              untuk membuat suatu divisi atau bagian dalam dokumen HTML. Nama
              &quot;div&quot; sendiri singkatan dari &quot;division&quot; yang
              berarti pembagian atau bagian. Elemen &lt;div&gt; sering digunakan
              untuk mengelompokkan dan mengatur bagian-bagian dari halaman web
              ke dalam blok-blok terpisah.
            </p>
            <br />
            <p>
              Fungsi atau penggunaan dari elemen &lt;div&gt; adalah sebagai
              berikut:
            </p>
            <ul className="my-5">
              <li>
                <b>Pengelompokan Konten</b>: Anda dapat menggunakan &lt;div&gt;
                untuk mengelompokkan elemen-elemen HTML bersama-sama, seperti
                bagian header, konten utama, sidebar, dan bagian footer dari
                halaman web.
              </li>
              <iframe
                height={400}
                style={{ width: "100%" }}
                scrolling="no"
                title="Untitled"
                src="https://codepen.io/Satrioagung10/embed/KwPpMdW?default-tab=html%2Cresult"
                frameBorder="no"
                loading="lazy"
                allowTransparency={true}
                allowFullScreen={true}
                className="my-5"
              >
                See the Pen{" "}
                <a href="https://codepen.io/Satrioagung10/pen/KwPpMdW">
                  Untitled
                </a>{" "}
                by Satrio Agung Wicaksono (
                <a href="https://codepen.io/Satrioagung10">@Satrioagung10</a>)
                on <a href="https://codepen.io">CodePen</a>.
              </iframe>
              <br />
              <li>
                <b> Styling dengan CSS </b>: Elemen &lt;div&gt; sering digunakan
                sebagai target untuk menerapkan style dengan CSS. Dengan
                memberikan id atau class pada elemen &lt;div&gt;, Anda dapat
                merujuknya dalam stylesheet CSS untuk memberikan tata letak,
                warna, dan style lainnya pada bagian-bagian tertentu dari
                halaman web.
              </li>

              <iframe
                height={500}
                style={{ width: "100%" }}
                scrolling="no"
                title="Untitled"
                src="https://codepen.io/Satrioagung10/embed/azoOZdj?default-tab=html%2Cresult"
                frameBorder="no"
                loading="lazy"
                allowTransparency={true}
                allowFullScreen={true}
                className="my-5"
              >
                See the Pen{" "}
                <a href="https://codepen.io/Satrioagung10/pen/azoOZdj">
                  Untitled
                </a>{" "}
                by Satrio Agung Wicaksono (
                <a href="https://codepen.io/Satrioagung10">@Satrioagung10</a>)
                on <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </ul>
            <br />
            <h1 className="font-bold text-xl mb-3">Span pada HTML</h1>
            <p>
              Elemen &lt;span&gt; dalam HTML adalah elemen yang digunakan untuk
              menerapkan style atau menandai bagian-bagian teks tertentu dalam
              dokumen HTML tanpa mengubah struktur blok dokumen itu sendiri.
            </p>
            <br />
            <p>
              Fungsi atau penggunaan dari elemen &lt;span&gt; adalah sebagai
              berikut:
            </p>
            <ul className="my-5">
              <li>
                <b>Pemberian Style</b>: Anda dapat menggunakan elemen
                &lt;span&gt; untuk memberikan style kepada bagian-bagian teks
                tertentu dalam paragraf, misalnya, untuk membuat teks menjadi
                tebal, miring, atau diberi warna tertentu.
              </li>
              <iframe
                height={300}
                style={{ width: "100%" }}
                scrolling="no"
                title="span style"
                src="https://codepen.io/Satrio-Agung/embed/qBvomOL?default-tab=html%2Cresult&editable=true"
                frameBorder="no"
                loading="lazy"
                allowTransparency={true}
                allowFullScreen={true}
                className="my-5"
              ></iframe>

              <br />
              <li>
                <b>Menandai Bagian Teks</b>: &lt;span&gt; dapat digunakan untuk
                menandai bagian-bagian penting dari teks, yang kemudian dapat
                diakses atau dimanipulasi melalui JavaScript atau CSS.
              </li>
              <iframe
                height={300}
                style={{ width: "100%" }}
                scrolling="no"
                title="span class"
                src="https://codepen.io/Satrio-Agung/embed/KKEomgv?default-tab=html%2Cresult&editable=true"
                frameBorder="no"
                loading="lazy"
                allowTransparency={true}
                allowFullScreen={true}
                className="my-5"
              ></iframe>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
