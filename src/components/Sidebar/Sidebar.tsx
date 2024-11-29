import { useState } from "react";
import AccountToggle from "./AccountToggle";
import Plan from "./Plan";
import { RouteSelect } from "./RouteSelect";
import Search from "./Search";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Toggle Button (Hamburger Icon) */}
      <div className="sm:hidden p-4 bg-gray-200 flex justify-between items-center sticky top-0">
        <div className="logo w-12">
          <img src="images/navbar.png" alt="developer" />
        </div>
        <button
          onClick={toggleSidebar}
          className="flex flex-col items-center justify-center space-y-1 "
        >
          {/* Hamburger icon (3 bars) */}
          <div
            className={`w-6 h-1 bg-gray-500 rounded-md transition-all duration-300 transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-gray-500 rounded-md transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-gray-500 rounded-md transition-all duration-300 transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed sm:sticky top-0 left-0 w-4/6 sm:w-auto h-screen bg-white shadow-lg sm:shadow-none transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="overflow-y-auto h-full p-4 relative">
          <AccountToggle />
          <Search />
          <RouteSelect />
          <div className="plan absolute bottom-3 w-4/5">
            <Plan />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
