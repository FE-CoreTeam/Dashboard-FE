import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.tsx";
import Tools from "./pages/Tools.tsx";
import Question from "./pages/Question.tsx";
import Integrations from "./pages/Integrations.tsx";
import Learning from "./pages/Learning.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tools",
    element: <Tools />,
  },
  {
    path: "/question",
    element: <Question />,
  },
  {
    path: "/integrations",
    element: <Integrations />,
  },
  {
    path: "/learning",
    element: <Learning />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
