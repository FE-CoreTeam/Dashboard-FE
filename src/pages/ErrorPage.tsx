import TopBar from "../components/Dashboard/TopBar";
import Sidebar from "../components/Sidebar/Sidebar";
import React from "react";
import error from "../assets/error404.svg"

const ErrorPage: React.FC = () => {
  return (
    <main className="grid gap-4 p-4 sm:grid-cols-[220px,_1fr] grid-cols-1">
      <Sidebar />

      <div className="bg-white rounded-lg pb-4 shadow">
        <TopBar />

        <div className="px-5 md:px-10">
          <div className="error-page text-center">
            <div className="error w-full md:w-1/2 mx-auto">
            <img src={error} alt="error img" />
            </div>
            <h1 className="text-blue-600 text-xl md:text-3xl">404 - Halaman Tidak Ditemukan</h1>
            <p className="mb-7 md:mb-10 md:text-lg">
              Maaf, halaman yang Anda cari tidak ada atau dalam tahap pengembangan.
            </p>
            <a className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 md:px-10 md:py-3 rounded-xl text-center block mx-auto md:w-1/2" href="/">Kembali ke Beranda</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
