import TopBar from "../components/Dashboard/TopBar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";


const Learning = () => {
  return (
    <main className="grid gap-4 p-4 sm:grid-cols-[220px,_1fr] grid-cols-1">
      <Sidebar />

      <div className="bg-white rounded-lg pb-4 shadow">
        <TopBar />

        <div className="px-5 md:px-10">
          <h1 className="font-bold text-xl my-2">HTML Dasar</h1>
          <ul className="text-blue-600">
            <li>
            <Link to="/Pendahuluan-HTML">1. Pendahuluan HTML</Link>
            </li>
            <li>
              <Link to="/Struktur-Dasar-HTML">2. Struktur Dasar Html</Link>
            </li>
            <li>
              <Link to="/Heading-dan-Paragraph">3. Heading dan Paragraph</Link>
            </li>
            <li>
              <Link to="/Hyperlink">4. Hyperlink</Link>
            </li>
            <li>
              <a href="/Image">5. Image</a>
            </li>
            <li>
              <a href="/Lists">6. List</a>
            </li>
            <li>
              <a href="/Div-dan-Span">7. Div dan Span</a>
            </li>
            <li>
              <a href="/Class-dan-id">8. Class dan id</a>
            </li>
            <li>
              <a href="/Tabel">9. Tabel</a>
            </li>
            <li>
              <a href="/Form">10. Form</a>
            </li>
          </ul>
          <h1 className="font-bold text-xl my-2">CSS Dasar</h1>
          <ul className="text-blue-600">
            <li>
              <a href="/Pendahuluan-CSS">1. Pendahuluan CSS</a>
            </li>
            <li>
              <a href="/Penggunaan-CSS">2. Penggunaan CSS</a>
            </li>
            <li>
              <a href="/Selektor-CSS">3. Selektor CSS</a>
            </li>
            <li>
              <a href="/Properti-CSS">4. Properti Dasar CSS</a>
            </li>
            <li>
              <a href="/Box-Model">5. Box Model CSS</a>
            </li>
            <li>
              <a href="/Background-CSS">6. Background pada CSS</a>
            </li>
            <li>
              <a href="/Pengaturan-Posisi-CSS">7. Pengaturan Posisi</a>
            </li>
            <li>
              <a href="/Display-CSS">8. Display dan Float</a>
            </li>
            <li>
              <a href="/Responsive">9. Responsive Pada CSS</a>
            </li>
            <li>
              <a href="/Flexbox-Grid">10. CSS Flexbox dan Grid</a>
            </li>
            <li>
              <a href="/Transformasi-Transisi-CSS">
                11. Transformasi dan Transisi CSS
              </a>
            </li>
            <li>
              <a href="/Vendor-Prefixes">12. CSS Vendor Prefixes</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Learning;
