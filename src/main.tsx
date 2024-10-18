import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header/Header.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import FeedBack from "./Feedback.tsx";
import EducationDepartament from "./EducationDepartment.tsx";
import MuftiyaMainPage from "./MuftiyaMainPage.tsx";
import MuftiyaDeputyMainPage from "./MuftiyaMainDeputyPage.tsx";
import MuftiyaMainSupportPage from "./MuftiyaMainSupportPage.tsx";
import NewsPage from "./NewsPage.tsx";
import NewsReadPage from "./NewsReadPage.tsx";
import LeftBar from "./components/LeftBar/LeftBar.tsx";
import PhotoPage from "./PhotoPage.tsx";
import VideoPage from "./VideoPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/FeedBack",
    element: <FeedBack></FeedBack>,
  },
  {
    path: "/EducationDepartament",
    element: <EducationDepartament></EducationDepartament>,
  },
  {
    path: "/MuftiyaCHR",
    element: <MuftiyaMainPage></MuftiyaMainPage>,
  },
  {
    path: "/MuftiyaDeputy",
    element: <MuftiyaDeputyMainPage></MuftiyaDeputyMainPage>,
  },
  {
    path: "/MuftiyaSupport",
    element: <MuftiyaMainSupportPage></MuftiyaMainSupportPage>,
  },
  {
    path: "/NewsPage",
    element: <NewsPage></NewsPage>,
  },
  {
    path: "/NewsPage/:NewsId",
    element: <NewsReadPage></NewsReadPage>,
  },
  {
    path: "/PhotoPage",
    element: <PhotoPage></PhotoPage>,
  },
  {
    path: "/VideoPage",
    element: <VideoPage></VideoPage>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="relative bg-[url('/Layer_7.png'),url('/Layer_8.png')] w-screen bg-contain bg-repeat-repeat px-14 font-inter ">
      <div className="bg-[#004B2D] w-full h-full flex flex-col gap-3 px-14 ">
        <Header></Header>
        <NavBar></NavBar>
        <div className="flex mt-3 gap-3 mb-52">
          <LeftBar></LeftBar>
          <RouterProvider router={router} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  </StrictMode>
);
