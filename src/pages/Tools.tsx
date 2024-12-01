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
          <a
            href="https://code.visualstudio.com/download"
            target="_blank"
          >
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

          <a href="https://nodejs.org/en" target="_blank">
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

          <a href="https://git-scm.com/downloads" target="_blank">
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
          <a
            href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
            target="_blank"
          >
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

          <a
            href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
            target="_blank"
          >
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

          <a
            href="https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek"
            target="_blank"
          >
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

          <a
            href="https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode"
            target="_blank"
          >
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

          <a
            href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
            target="_blank"
          >
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

          <a
            href="https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css"
            target="_blank"
          >
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                HTML CSS Support
              </span>
              <img
                src="images/csssupport.svg"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a
            href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"
            target="_blank"
          >
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                indent-rainbow
              </span>
              <img
                src="images/indentrainbow.svg"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a
            href="https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion"
            target="_blank"
          >
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                IntelliSense for CSS class names in HTML
              </span>
              <img
                src="images/intellisenseforcss.svg"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a
            href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
            target="_blank"
          >
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                Material Icon Theme
              </span>
              <img
                src="images/materialicon.svg"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a
            href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme"
            target="_blank"
          >
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                One Dark Pro
              </span>
              <img
                src="images/onedarkpro.svg"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a
            href="https://marketplace.visualstudio.com/items?itemName=Codeium.codeium"
            target="_blank"
          >
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                Codeium: AI
              </span>
              <img
                src="images/codeium.svg"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a
            href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
            target="_blank"
          >
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                Auto Close Tag
              </span>
              <img
                src="images/autoclosetag.svg"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a
            href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
            target="_blank"
          >
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                Auto Rename Tag
              </span>
              <img
                src="images/autorenametag.svg"
                alt=""
                className="w-10 h-10 bg-white rounded object-cover"
              />
            </div>
          </a>

          <a
            href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
            target="_blank"
          >
            <div className="flex cursor-pointer justify-between w-full p-4 rounded bg-stone-100">
              <span className="text-base flex items-center font-bold">
                Tailwind CSS IntelliSense
              </span>
              <img
                src="images/tailwind.svg"
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
