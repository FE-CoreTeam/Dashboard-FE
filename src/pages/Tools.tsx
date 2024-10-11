import TopBar from "../components/Dashboard/TopBar";
import Sidebar from "../components/Sidebar/Sidebar";

const Tools = () => {
  return (
    <main className="grid gap-4 p-4 sm:grid-cols-[220px,_1fr] grid-cols-1">
      <Sidebar />

      <div className="bg-white rounded-lg pb-4 shadow">
        <TopBar />

        <div className="w-full text-center justify-center">
          <span className="text-lg font-bold block">Tools</span>
          <span className="text-sm block text-stone-500">
            Tools yang akan kita gunakan
          </span>
        </div>

        <div className="p-8 space-y-4">
          <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
            <span className="text-base flex items-center font-bold">
              Visual Studio Code
            </span>
            <img
              src="images/vscode.svg"
              alt=""
              className="w-10 h-10 bg-white rounded object-cover"
            />
          </div>

          <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
            <span className="text-base flex items-center font-bold">
              Prettier
            </span>
            <img
              src="images/prettier.svg"
              alt=""
              className="w-10 h-10 bg-white rounded object-cover"
            />
          </div>

          <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
            <span className="text-base flex items-center font-bold">
              Node Js
            </span>
            <img
              src="images/nodejs.svg"
              alt=""
              className="w-10 h-10 bg-white rounded object-cover"
            />
          </div>

          <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
            <span className="text-base flex items-center font-bold">
              Git Bash
            </span>
            <img
              src="images/gitbash.svg"
              alt=""
              className="w-10 h-10 bg-white rounded object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tools;
