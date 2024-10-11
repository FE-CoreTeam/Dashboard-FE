import Roadmap from "./Roadmap";
import TopBar from "./TopBar";

const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow">
      <TopBar />
      <Roadmap />
    </div>
  );
};

export default Dashboard;
