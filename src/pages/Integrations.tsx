import TopBar from "../components/Dashboard/TopBar";
import Sidebar from "../components/Sidebar/Sidebar";

const Integrations = () => {
  return (
    <main className="grid gap-4 p-4 sm:grid-cols-[220px,_1fr] grid-cols-1">
      <Sidebar />

      <div className="bg-white rounded-lg pb-4 shadow">
        <TopBar />

        <div className="w-full text-center text-base font-bold justify-center py-40">
          Coming Soon...
        </div>
      </div>
    </main>
  );
};

export default Integrations;
