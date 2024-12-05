import TopBar from "../../../components/Dashboard/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";

const Learning = () => {
    return (
        <main className="grid gap-4 p-4 sm:grid-cols-[220px,_1fr] grid-cols-1">
            <Sidebar />

            <div className="bg-white rounded-lg pb-4 shadow">
                <TopBar />

                <div className="px-5 md:px-10">
                    <h1 className="font-bold text-xl mb-3">Display dan Float pada CSS</h1>
                    <p>Display dan Float adalah properti CSS yang sangat penting untuk mengatur tata letak dan aliran elemen dalam halaman web.</p>

                    <div className="display">
                        <h1 className="font-semibold text-lg mt-5">1. Display</h1>
                        <p>Properti display menentukan bagaimana sebuah elemen ditampilkan dalam layout.</p>
                        <p className="mt-2">Beberapa nilai display yang sering digunakan:</p>
                        <ul className="list-disc ml-8 mt-2">
                            <li><strong>block</strong> - Elemen mengambil lebar penuh dan dimulai pada baris baru</li>
                            <li><strong>inline</strong> - Elemen hanya mengambil ruang sesuai kontennya dan tidak memulai baris baru</li>
                            <li><strong>inline-block</strong> - Kombinasi inline dan block, bisa diatur width dan height</li>
                            <li><strong>none</strong> - Menyembunyikan elemen</li>
                            <li><strong>flex</strong> - Membuat container flexbox untuk layout yang fleksibel</li>
                            <li><strong>grid</strong> - Membuat container grid untuk layout berbasis grid</li>
                        </ul>

                        <iframe
                            height={800}
                            style={{ width: '100%' }}
                            scrolling="no"
                            title="Display CSS Examples"
                            src="https://codepen.io/Satrioagung10/embed/yyBeaNP?default-tab=html%2Cresult&editable=true"
                            frameBorder="no"
                            loading="lazy"
                            allowTransparency={true}
                            allowFullScreen={true}
                            className="my-5"
                        />
                        <h1 className="font-semibold text-lg mt-5">2. Float</h1>
                        <p>Float memungkinkan elemen untuk mengambang ke kiri atau kanan dari container-nya.</p>
                        <p className="mt-2">Nilai-nilai float yang tersedia:</p>
                        <ul className="list-disc ml-8 mt-2">
                            <li><strong>left</strong> - Elemen mengambang ke kiri</li>
                            <li><strong>right</strong> - Elemen mengambang ke kanan</li>
                            <li><strong>none</strong> - Default, elemen tidak mengambang</li>
                        </ul>

                        <iframe
                            height={300}
                            style={{ width: '100%' }}
                            scrolling="no"
                            title="Float CSS Examples"
                            src="https://codepen.io/Satrioagung10/embed/KwPVgMy?default-tab=html%2Cresult&editable=true"
                            frameBorder="no"
                            loading="lazy"
                            allowTransparency={true}
                            allowFullScreen={true}
                            className="my-5"
                        />

                        <div className="tips bg-blue-50 p-4 rounded-lg mt-5">
                            <h2 className="font-semibold">Tips Modern Layout:</h2>
                            <p>Saat ini, penggunaan float untuk layout sudah jarang digunakan. Sebagai gantinya, disarankan menggunakan:</p>
                            <ul className="list-disc ml-8 mt-2">
                                <li>Flexbox - Untuk layout satu dimensi (baris atau kolom)</li>
                                <li>Grid - Untuk layout dua dimensi (baris dan kolom)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Learning;
