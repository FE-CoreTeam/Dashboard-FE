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

        <div className="p-8 space-y-4 flex flex-col gap-1">
          <a href="https://code.visualstudio.com/download" target="_blank">
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
          </a>

          <a href="https://nodejs.org/en">
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
          </a>

          <a href="https://git-scm.com/downloads">
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
          </a>
        </div>

        <div className="w-full text-center justify-center">
          <span className="text-lg font-bold block">Extensions</span>
          <span className="text-sm block text-stone-500">
            Extensions yang akan kita gunakan
          </span>
        </div>

        <div className="p-8 space-y-4 flex flex-col gap-1">

          <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">
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
          </a>

          <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                Live Server
              </span>
              <img
                src="images/liveserver.png"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a href="https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek">
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                CSS Peek
              </span>
              <img
                src="images/csspeek.png"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a href="https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode">
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                intellicode
              </span>
              <img
                src="images/intellicode.png"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense">
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                Path Intellisense
              </span>
              <img
                src="images/pathintellisense.png"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Tools;
