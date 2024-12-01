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
import Pendahuluan from "./pages/Studyjam-basic/basic_html/1_pendahuluan.tsx"
import Struktur from "./pages/Studyjam-basic/basic_html/2_struktur_html.tsx"
import Heading from "./pages/Studyjam-basic/basic_html/3_Heading_Paragraf.tsx"
import Hyperlink from "./pages/Studyjam-basic/basic_html/4_hyperlink.tsx"

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

  {
    path: "/Pendahuluan-HTML",
    element: <Pendahuluan />,
  },

  {
    path: "/Struktur-Dasar-HTML",
    element: <Struktur />,
  },

  {
    path: "/Heading-dan-Paragraph",
    element: <Heading />,
  },

  {
    path: "/Hyperlink",
    element: <Hyperlink/>,
  },




]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
