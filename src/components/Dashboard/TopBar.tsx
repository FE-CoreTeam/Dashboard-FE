import { FiCalendar } from "react-icons/fi";

const TopBar = () => {
  // Get current date and format it in WIB timezone
  const date = new Date().toLocaleString("en-ID", {
    weekday: "long",   // Full weekday name
    year: "numeric",   // Full year
    month: "short",    // Short month name
    day: "numeric",    // Day of the month
    timeZone: "Asia/Jakarta", // WIB Timezone
  });

  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex item-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">
            🚀 Hello Dev!
          </span>
          <span className="text-xs block text-stone-500">
            {date}
          </span>
        </div>

        <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded">
          <FiCalendar />
          <span>Coming Soon</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
