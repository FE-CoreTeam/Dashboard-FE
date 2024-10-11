import { useNavigate, useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import { FaBook, FaTools } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuestionAnswer } from "react-icons/md";

export const RouteSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSelected = (title: string) => {
    const formattedTitle = `/${title.toLowerCase()}`;
    return location.pathname === formattedTitle;
  };

  return (
    <div className="space-y-1">
      <Route
        Icon={FaBook}
        selected={isSelected("")}
        title="Roadmap"
        onClick={() => navigate("/")}
      />
      <Route
        Icon={FaTools}
        selected={isSelected("Tools")}
        title="Tools"
        onClick={() => navigate("/tools")}
      />
      <Route
        Icon={MdQuestionAnswer}
        selected={isSelected("Question")}
        title="Question"
        onClick={() => navigate("/question")}
      />
      <Route
        Icon={FiLink}
        selected={isSelected("Integrations")}
        title="Integrations"
        onClick={() => navigate("/integrations")}
      />
      <Route
        Icon={FaBookOpenReader}
        selected={isSelected("Learning")}
        title="Learning"
        onClick={() => navigate("/learning")}
      />
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
  onClick,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon />
      <span>{title}</span>
    </button>
  );
};
