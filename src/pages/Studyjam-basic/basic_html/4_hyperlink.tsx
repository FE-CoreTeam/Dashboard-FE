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
            <h1 className="font-bold text-xl mb-3">Hyperlink</h1>
            <p>
              Hyperlink dalam HTML adalah elemen yang digunakan untuk membuat
              tautan atau menghubungkan halaman web dengan halaman web lainnya,
              dokumen, atau sumber daya online lainnya. Hyperlink memungkinkan
              pengguna untuk mengklik teks, gambar, atau elemen lainnya di
              halaman web untuk menuju ke halaman atau sumber daya yang
              ditautkan. Dalam HTML, hyperlink dibuat menggunakan elemen
              &lt;a&gt; (anchor). Contoh sederhana penggunaan hyperlink dalam
              HTML adalah sebagai berikut:
            </p>

            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="hyperlink"
              src="https://codepen.io/Satrio-Agung/embed/WNmMGqp?default-tab=html%2Cresult&editable=true"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-8"
            ></iframe>

            <h1 className="font-bold text-xl mb-3">
              Hasil dari codingan diatas :
              <a
                style={{ textDecoration: "underline", color: "blue" }}
                href="https://www.instagram.com/gdsc.ubj/"
                aria-label="ig gdsc"
              >
                Link ini mengarah ke instagram GDSC Ubhara
              </a>
            </h1>
            <p>
              Di sini, <b>&lt;a&gt;</b> adalah elemen anchor, dan <b>href</b>{" "}
              adalah atribut yang menentukan alamat URL dari halaman atau sumber
              daya yang ditautkan. Ketika pengguna mengklik teks ini adalah
              sebuah hyperlink, mereka akan diarahkan ke URL yang ditentukan di
              dalam atribut href.
            </p>
            <br />
            <p>
              Selain teks, Anda juga dapat menggunakan elemen lain sebagai
              target hyperlink, seperti gambar:
            </p>

            <iframe
              height={300}
              style={{ width: "100%" }}
              scrolling="no"
              title="hyperlink image"
              src="https://codepen.io/Satrio-Agung/embed/dyrdORP?default-tab=html%2Cresult&editable=true"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-8"
            ></iframe>

            <h1 className="font-bold text-xl mb-3 flex items-center gap-3">
              Hasil dari codingan diatas :
              <a
                href="https://www.instagram.com/gdsc.ubj/"
                aria-label="ig gdsc"
              >
                <img
                  src="https://img.icons8.com/fluency/48/instagram-new.png"
                  alt="ig"
                />
              </a>
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Learning;
