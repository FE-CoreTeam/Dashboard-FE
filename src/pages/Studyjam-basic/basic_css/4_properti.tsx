import TopBar from "../../../components/Dashboard/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";

const Learning = () => {
  return (
    <main className="grid gap-4 p-4 sm:grid-cols-[220px,_1fr] grid-cols-1">
      <Sidebar />

      <div className="bg-white rounded-lg pb-4 shadow">
        <TopBar />

        <div className="px-5 md:px-10">
          <h1 className="font-bold text-xl mb-3">Properti dasar CSS</h1>
          <p>Properti dasar CSS adalah atribut yang sering digunakan untuk mengatur tampilan dan gaya pada elemen HTML.</p>

          <div className="color">
            <h1 className="font-semibold text-lg mt-5">1. Color</h1>
            <ul className="list-disc ml-8">
              <li>Digunakan untuk mengubah warna teks pada elemen</li>
              <li>Nilai dapat menggunakan nama warna, kode heksadesimal, RGB, atau HSL.</li>
            </ul>
            <iframe
              height={300}
              style={{ width: '100%' }}
              scrolling="no"
              title="color"
              src="https://codepen.io/Satrioagung10/embed/vEBLKLz?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            >
            </iframe>
          </div>

          <div className="background">
            <h1 className="font-semibold text-lg mt-5">2. Background-color</h1>
            <p>Digunakan untuk mengubah warna latar belakang elemen.</p>
            <iframe
              height={300}
              style={{ width: '100%' }}
              scrolling="no"
              title="background-color"
              src="https://codepen.io/Satrioagung10/embed/NPKxrRW?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            >
              See the Pen <a href="https://codepen.io/Satrioagung10/pen/NPKxrRW">
                background-color</a> by Satrio Agung Wicaksono (<a href="https://codepen.io/Satrioagung10">@Satrioagung10</a>)
              on <a href="https://codepen.io">CodePen</a>
            </iframe>
          </div>

          <div className="font-family">
            <h1 className="font-semibold text-lg mt-5">3. Font-family</h1>
            <p>Digunakan untuk menentukan jenis font pada teks.</p>
            <iframe
              height={300}
              style={{ width: '100%' }}
              scrolling="no"
              title="font-family"
              src="https://codepen.io/Satrioagung10/embed/jENWrVb?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            >
            </iframe>
          </div>

          <div className="font-size">
            <h1 className="font-semibold text-lg mt-5">4. Font-size</h1>
            <p>Digunakan untuk mengubah ukuran teks. Ukuran bisa menggunakan satuan px, em, rem, %, dan lainnya.</p>
            <iframe
              height={300}
              style={{ width: '100%' }}
              scrolling="no"
              title="font-size"
              src="https://codepen.io/Satrioagung10/embed/zxOrBZd?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            >
            </iframe>
          </div>

          <div className="text-align">
            <h1 className="font-semibold text-lg mt-5">5. Text-align</h1>
            <p>Digunakan untuk mengatur posisi teks dalam elemen misalnya left, center, right and justify.</p>
            <iframe
              height={300}
              style={{ width: '100%' }}
              scrolling="no"
              title="text-align"
              src="https://codepen.io/Satrioagung10/embed/ZYzQOye?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            >
            </iframe>
          </div>

          <div className="margin">
            <h1 className="font-semibold text-lg mt-5">6. Margin</h1>
            <p>Digunakan untuk mengatur jarak antara elemen dengan elemen lainnya, margin dapat diatur pada sisi kiri, kanan, atas, atau bawah.</p>
            <iframe
              height={500}
              style={{ width: '100%' }}
              scrolling="no"
              title="margin"
              src="https://codepen.io/Satrioagung10/embed/jENWrZr?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            >
            </iframe>
          </div>

          <div className="padding">
            <h1 className="font-semibold text-lg mt-5">7. Padding</h1>
            <p>Digunakan untuk memberikan ruang di dalam elemen antara border dan konten, padding dapat diatur pada sisi kiri, kanan, atas, atau bawah.</p>
            <iframe
              height={500}
              style={{ width: '100%' }}
              scrolling="no"
              title="padding"
              src="https://codepen.io/Satrioagung10/embed/GgKoqdb?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            >
            </iframe>
          </div>

          <div className="borderr">
            <h1 className="font-semibold text-lg mt-5">8. Border</h1>
            <p>Digunakan untuk menambahkan garis pembatas di sekitar elemen. Dapat mengatur ketebalan, jenis, dan warna garis.</p>
            <iframe
              height={300}
              style={{ width: '100%' }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/Satrioagung10/embed/KwPVMbW?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            >
            </iframe>
          </div>

          <div className="width-height">
            <h1 className="font-semibold text-lg mt-5">9. Width dan Height</h1>
            <p>Digunakan untuk mengatur lebar dan tinggi elemen.</p>
            <iframe
              height={300}
              style={{ width: '100%' }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/Satrioagung10/embed/EaYPyMR?default-tab=html%2Cresult"
              frameBorder="no"
              loading="lazy"
              allowTransparency={true}
              allowFullScreen={true}
              className="my-5"
            >
              See the Pen <a href="https://codepen.io/Satrioagung10/pen/EaYPyMR">
                Untitled</a> by Satrio Agung Wicaksono (<a href="https://codepen.io/Satrioagung10">@Satrioagung10</a>)
              on <a href="https://codepen.io">CodePen</a>
            </iframe>
          </div>


        </div>
      </div>
    </main>
  );
};

export default Learning;
