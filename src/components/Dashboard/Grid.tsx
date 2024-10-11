import { StatCards } from "./StatCards";

const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12">
      <StatCards />
    </div>
  );
};

export default Grid;
