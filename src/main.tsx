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
import PendahuluanHTML from "./pages/Studyjam-basic/basic_html/1_pendahuluan.tsx"
import Struktur from "./pages/Studyjam-basic/basic_html/2_struktur_html.tsx"
import Heading from "./pages/Studyjam-basic/basic_html/3_Heading_Paragraf.tsx"
import Hyperlink from "./pages/Studyjam-basic/basic_html/4_hyperlink.tsx"
import Image from "./pages/Studyjam-basic/basic_html/5_image.tsx"
import List from "./pages/Studyjam-basic/basic_html/6_list.tsx"
import Div from "./pages/Studyjam-basic/basic_html/7_div_span.tsx"
import Class from "./pages/Studyjam-basic/basic_html/8_class_id.tsx"
import Tabel from "./pages/Studyjam-basic/basic_html/9_tabel.tsx"
import Form from "./pages/Studyjam-basic/basic_html/10_form.tsx"
import PendahuluanCSS from "./pages/Studyjam-basic/basic_css/1_pendahuluan.tsx"
import Penggunaan from "./pages/Studyjam-basic/basic_css/2_penggunaan.tsx"
import Selektor from "./pages/Studyjam-basic/basic_css/3_selektor.tsx"

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

  // Path learning HTML

  {
    path: "/Pendahuluan-HTML",
    element: <PendahuluanHTML />,
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

  {
    path: "/Image",
    element: <Image/>,
  },

  {
    path: "/List",
    element: <List/>,
  },

  {
    path: "/Div-dan-Span",
    element: <Div/>,
  },

  {
    path: "/Class-dan-Id",
    element: <Class/>,
  },

  {
    path: "/Tabel",
    element: <Tabel/>,
  },

  {
    path: "/Form",
    element: <Form/>,
  },

  // Path learning CSS

  {
    path: "/Pendahuluan-CSS",
    element: <PendahuluanCSS/>,
  },

  {
    path: "/Penggunaan-CSS",
    element: <Penggunaan/>,
  },

  {
    path: "/Selektor-CSS",
    element: <Selektor/>,
  },


]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
