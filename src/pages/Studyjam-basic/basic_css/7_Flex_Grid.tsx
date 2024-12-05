import TopBar from "../../../components/Dashboard/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";

const Learning = () => {
    return (
        <main className="grid gap-4 p-4 sm:grid-cols-[220px,_1fr] grid-cols-1">
            <Sidebar />

            <div className="bg-white rounded-lg pb-4 shadow">
                <TopBar />

                <div className="px-5 md:px-10">
                    <h1 className="text-2xl font-bold mb-4">CSS Flexbox dan Grid</h1>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-3">1. CSS Flexbox</h2>
                        <p>Flexbox adalah model layout satu dimensi untuk mengatur elemen dalam baris atau kolom.</p>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Properti Container Flexbox:</h3>
                            <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto">
                                {`/* Container Flexbox */
.container {
    display: flex;
    flex-direction: row | column;     /* Arah flex: horizontal/vertikal */
    justify-content: center;          /* Perataan horizontal */
    align-items: center;             /* Perataan vertikal */
    gap: 10px;                      /* Jarak antar item */
}`}
                            </pre>
                        </div>

                        <div className="nilai-justify">
                            <h3 className="text-lg font-semibold mt-5">Nilai-nilai pada justify-content:</h3>

                            <ul className="list-disc ml-8">
                                <li><code>flex-start</code>: Item dimulai dari kiri.</li>
                                <li><code>center</code>: Item ditengah secara horizontal.</li>
                                <li><code>flex-end</code>: Item dimulai dari kanan.</li>
                                <li><code>space-between</code>: Item memiliki jarak antara elemen-elemen yang didistribusikan.</li>
                                <li><code>space-around</code>: Item memiliki jarak yang sama di sekitar elemen.</li>
                                <li><code>space-evenly</code>: Item memiliki jarak yang sama di antara elemen-elemen dan di luar elemen.</li>
                            </ul>
                        </div>

                        <div className="nilai-align">
                            <h3 className="text-lg font-semibold mt-5">Nilai-nilai pada align-items:</h3>
                            <ul className="list-disc ml-8">
                                <li><code>flex-start</code>: Item dimulai dari atas.</li>
                                <li><code>center</code>: Item ditengah secara vertikal.</li>
                                <li><code>flex-end</code>: Item dimulai dari bawah.</li>
                                <li><code>stretch</code>: Item mengisi ruang vertikal.</li>
                                <li><code>baseline</code>: Item dimulai dari baris teks tertinggi.</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Contoh Penggunaan Flexbox:</h3>
                            <iframe
                                height={500}
                                style={{ width: '100%' }}
                                scrolling="no"
                                title="Flexbox Demo"
                                src="https://codepen.io/Satrioagung10/embed/GgKoNNO?default-tab=html%2Cresult&editable=true"
                                frameBorder="no"
                                loading="lazy"
                                allowTransparency={true}
                                allowFullScreen={true}
                                className="mt-3"
                            />
                            <p className="mt-2 text-sm text-gray-600">
                                Note: Contoh di atas menunjukkan penggunaan flexbox untuk membuat layout yang responsif
                                dengan item-item yang tersusun secara horizontal dan vertikal.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-semibold mb-3">2. CSS Grid</h2>
                            <p>Grid adalah sistem layout dua dimensi untuk mengatur elemen dalam baris dan kolom sekaligus.</p>

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Properti CSS Grid:</h3>
                                <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto">
                                    {`/* Container Grid */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 kolom dengan lebar sama */
    grid-template-rows: auto;              /* Tinggi baris otomatis */
    gap: 20px;                            /* Jarak antar grid */
    grid-template-areas:                   /* Area grid dengan nama */
        "header header header"
        "sidebar main main"
        "footer footer footer";
}`}
                                </pre>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Contoh Penggunaan Grid:</h3>
                                <iframe
                                    height={500}
                                    style={{ width: '100%' }}
                                    scrolling="no"
                                    title="Grid Layout Demo"
                                    src="https://codepen.io/Satrioagung10/embed/raBxWYV?default-tab=html%2Cresult&editable=true"
                                    frameBorder="no"
                                    loading="lazy"
                                    allowTransparency={true}
                                    allowFullScreen={true}
                                    className="mt-3"
                                />
                                <p className="mt-2 text-sm text-gray-600">
                                    Note: Contoh di atas menunjukkan penggunaan grid untuk membuat layout kompleks
                                    dengan area-area yang terdefinisi.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg mt-6">
                                <h3 className="font-semibold mb-2">Kapan Menggunakan Flexbox vs Grid</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold">Gunakan Flexbox untuk:</h4>
                                        <ul className="list-disc ml-5 mt-2">
                                            <li>Layout satu dimensi (baris/kolom)</li>
                                            <li>Navigasi dan menu</li>
                                            <li>Perataan konten sederhana</li>
                                            <li>Layout yang fleksibel</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Gunakan Grid untuk:</h4>
                                        <ul className="list-disc ml-5 mt-2">
                                            <li>Layout dua dimensi</li>
                                            <li>Layout halaman utama</li>
                                            <li>Gallery foto</li>
                                            <li>Layout yang kompleks</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Learning;
