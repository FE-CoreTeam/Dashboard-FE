import TopBar from "../../../components/Dashboard/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";

const Learning = () => {
    return (
        <main className="grid gap-4 p-4 sm:grid-cols-[220px,_1fr] grid-cols-1">
            <Sidebar />

            <div className="bg-white rounded-lg pb-4 shadow">
                <TopBar />

                <div className="px-5 md:px-10">
                    <h1 className="font-bold text-xl mb-3">Responsive CSS</h1>
                    <p>Responsive CSS memungkinkan website untuk menyesuaikan tampilan dengan berbagai ukuran layar, dari desktop hingga mobile.</p>

                    <div className="responsive">
                        <h1 className="font-semibold text-lg mt-5">1. Media Queries</h1>
                        <p>Media queries adalah teknik CSS yang memungkinkan kita menerapkan gaya berbeda untuk ukuran layar yang berbeda.</p>
                        <p className="mt-2">Contoh penggunaan media queries:</p>
                        <pre className="bg-gray-100 p-3 rounded-lg mt-2 text-sm">
                            {`/* Untuk layar mobile (dibawah 768px) */
@media screen and (max-width: 768px) {
    .container {
        background-color: red;
        width: 100%;
        margin: auto;
    }
}

/* Untuk tablet (768px - 1024px) */
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .container {
        background-color: yellow;
        width: 100%;
        margin: auto;
    }
}

/* Untuk desktop (diatas 1024px) */
@media screen and (min-width: 1024px) {
    .container {
        background-color: green;
        width: 100%;
        margin: auto;
    }
}`}
                        </pre>

                        <h1 className="font-semibold text-lg mt-5">2. Viewport Meta Tag</h1>
                        <p>Tag meta viewport diperlukan untuk mengatur tampilan pada perangkat mobile:</p>
                        <pre className="bg-gray-100 p-3 rounded-lg mt-2 text-sm">
                            {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
                        </pre>

                        <h1 className="font-semibold text-lg mt-5">3. Responsive Units</h1>
                        <p>Gunakan unit yang responsif daripada ukuran tetap:</p>
                        <ul className="list-disc ml-8 mt-2">
                            <li><strong>%</strong> - Relatif terhadap parent element</li>
                            <li><strong>vw/vh</strong> - Relatif terhadap viewport (layar)</li>
                            <li><strong>em</strong> - Relatif terhadap font-size parent</li>
                            <li><strong>rem</strong> - Relatif terhadap font-size root element</li>
                        </ul>

                        <h1 className="font-semibold text-lg mt-5">4. Contoh Responsive Layout</h1>
                        <p>Berikut adalah contoh layout responsif menggunakan media queries:</p>

                        <iframe 
                            height={300} 
                            style={{ width: '100%' }} 
                            scrolling="no" 
                            title="Responsive CSS Example" 
                            src="https://codepen.io/Satrioagung10/embed/azodmYr?default-tab=html%2Cresult&editable=true" 
                            frameBorder="no" 
                            loading="lazy" 
                            allowTransparency={true} 
                            allowFullScreen={true}
                        >
                        </iframe>
                        <p>Note: Jika di ukuran layar mobile, container akan berwarna merah. Jika di ukuran layar tablet, container akan berwarna kuning. Jika di ukuran layar desktop, container akan berwarna hijau.</p>

                        <div className="tips bg-blue-50 p-4 rounded-lg mt-5">
                            <h2 className="font-semibold">Tips Responsive Design:</h2>
                            <ul className="list-disc ml-8 mt-2">
                                <li>Gunakan Flexbox atau Grid untuk layout yang fleksibel</li>
                                <li>Hindari menggunakan ukuran tetap (px) untuk container</li>
                                <li>Test website pada berbagai ukuran layar</li>
                                <li>Gunakan breakpoints standar:
                                    <ul className="list-disc ml-8 mt-1">
                                        <li>Mobile: &lt; 768px</li>
                                        <li>Tablet: 768px - 1024px</li>
                                        <li>Desktop: &gt; 1024px</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Learning;
