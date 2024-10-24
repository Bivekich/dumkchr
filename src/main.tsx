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
import DecreePage from "./DecreePage.tsx";
import ChiffOfStaffPage from "./ChiffOfStaffPage.tsx";
import Kadie from "./Kadie.tsx";
import FoundationPage from "./FoundationPage.tsx";
import Maslahat from "./Maslahat.tsx";
import Hajj from "./Hajj.tsx";
import CommitetMedia from "./CommitetMedia.tsx";
import CommitetYouth from "./CommitetYouth.tsx";
import DocumentPage from "./Documents.tsx";

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
  {
    path: "/Decree",
    element: <DecreePage />,
  },
  {
    path: "/ChiffOfStaff",
    element: <ChiffOfStaffPage></ChiffOfStaffPage>,
  },
  {
    path: "/Kadie",
    element: <Kadie></Kadie>,
  },
  {
    path: "/Foundation",
    element: <FoundationPage></FoundationPage>,
  },
  {
    path: "/Maslahat",
    element: <Maslahat></Maslahat>,
  },
  {
    path: "/Maslahat",
    element: <Maslahat></Maslahat>,
  },
  {
    path: "/Hajj",
    element: <Hajj></Hajj>,
  },
  {
    path: "/ComMedia",
    element: <CommitetMedia></CommitetMedia>,
  },
  {
    path: "/ComYouth",
    element: <CommitetYouth></CommitetYouth>,
  },
  {
    path: "/Documents",
    element: <DocumentPage></DocumentPage>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="relative bg-[url('/Layer_7.png'),url('/Layer_8.png')] w-screen bg-[length:65rem_70rem] bg-repeat-round bg-clip-padding px-14 font-inter">
      <div className="mx-auto max-w-[1920px] min-h-screen">
        <div className="bg-[#004B2D] w-full min-h-screen flex flex-col gap-3 px-14">
          <Header></Header>
          <NavBar></NavBar>
          <div className="flex mt-3 gap-3 mb-52 flex-shrink-0">
            <LeftBar></LeftBar>
            <RouterProvider router={router} />
          </div>
        </div>
        <div className="w-full  flex">
          <Footer></Footer>
        </div>
      </div>
    </div>
  </StrictMode>
);
