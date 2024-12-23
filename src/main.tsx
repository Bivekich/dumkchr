import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Header from './components/Header/Header.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import Footer from './components/Footer/Footer.tsx';
import FeedBack from './Feedback.tsx';
import EducationDepartament from './EducationDepartment.tsx';
import MuftiyaMainPage from './MuftiyaMainPage.tsx';
import MuftiyaDeputyMainPage from './MuftiyaMainDeputyPage.tsx';
import MuftiyaMainSupportPage from './MuftiyaMainSupportPage.tsx';
import NewsPage from './NewsPage.tsx';
import NewsReadPage from './NewsReadPage.tsx';
import LeftBar from './components/LeftBar/LeftBar.tsx';
import PhotoPage from './PhotoPage.tsx';
import VideoPage from './VideoPage.tsx';
import DecreePage from './DecreePage.tsx';
import ChiffOfStaffPage from './ChiffOfStaffPage.tsx';
import Kadie from './Kadie.tsx';
import FoundationPage from './FoundationPage.tsx';
import Hajj from './Hajj.tsx';
import CommitetMedia from './CommitetMedia.tsx';
import CommitetYouth from './CommitetYouth.tsx';
import DocumentPage from './Documents.tsx';
import SectionsPage from './Sections.tsx';
import RegionPage from './RegionPage.tsx';
import Contact from './ContactsPage.tsx';
import AppealsPage from './AppealsPage.tsx';
import AccountingPage from './Accounting.tsx';
import CouncilofUlema from './CouncilUlemaPage.tsx';
import HalalPage from './HalalPage.tsx';
import FetvaPage from './FetvaPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/FeedBack',
    element: <FeedBack></FeedBack>,
  },
  {
    path: '/EducationDepartament',
    element: <EducationDepartament></EducationDepartament>,
  },
  {
    path: '/MuftiyaCHR',
    element: <MuftiyaMainPage></MuftiyaMainPage>,
  },
  {
    path: '/MuftiyaDeputy',
    element: <MuftiyaDeputyMainPage></MuftiyaDeputyMainPage>,
  },
  {
    path: '/MuftiyaSupport',
    element: <MuftiyaMainSupportPage></MuftiyaMainSupportPage>,
  },
  {
    path: '/NewsPage',
    element: <NewsPage></NewsPage>,
  },
  {
    path: '/NewsPage/:NewsId',
    element: <NewsReadPage></NewsReadPage>,
  },
  {
    path: '/PhotoPage',
    element: <PhotoPage></PhotoPage>,
  },
  {
    path: '/VideoPage',
    element: <VideoPage></VideoPage>,
  },
  {
    path: '/Decree',
    element: <DecreePage />,
  },
  {
    path: '/ChiffOfStaff',
    element: <ChiffOfStaffPage></ChiffOfStaffPage>,
  },
  {
    path: '/Kadie',
    element: <Kadie></Kadie>,
  },
  {
    path: '/Foundation',
    element: <FoundationPage></FoundationPage>,
  },
  {
    path: '/Hajj',
    element: <Hajj></Hajj>,
  },
  {
    path: '/ComMedia',
    element: <CommitetMedia></CommitetMedia>,
  },
  {
    path: '/ComYouth',
    element: <CommitetYouth></CommitetYouth>,
  },
  {
    path: '/Documents',
    element: <DocumentPage></DocumentPage>,
  },
  {
    path: '/Sections/:Section',
    element: <SectionsPage></SectionsPage>,
  },
  {
    path: '/Regions/:RegionName',
    element: <RegionPage></RegionPage>,
  },
  {
    path: '/Contacts',
    element: <Contact></Contact>,
  },
  {
    path: '/Appeals',
    element: <AppealsPage></AppealsPage>,
  },
  {
    path: '/Accounting',
    element: <AccountingPage></AccountingPage>,
  },
  {
    path: '/CouncilofUlema',
    element: <CouncilofUlema></CouncilofUlema>,
  },
  {
    path: '/Halal',
    element: <HalalPage />,
  },
  {
    path: '/Fetvy',
    element: <FetvaPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="relative min-[1280px]:bg-[url('/Layer_7.png'),url('/Layer_8.png')] w-screen bg-[length:50rem_80rem] bg-repeat-round bg-clip-padding min-[1280px]:px-14 font-inter">
      <div className="mx-auto max-w-[1920px] min-h-screen">
        <div className="bg-[#004B2D] w-full min-h-screen flex flex-col gap-3 min-[1280px]:px-14 px-4">
          <Header></Header>
          <NavBar></NavBar>
          <div className="flex mt-3 gap-3 mb-52 max-[1280px]:hidden">
            <LeftBar></LeftBar>
            <RouterProvider router={router} />
          </div>
          <div className="flex mt-3 gap-0 mb-52 min-[1281px]:hidden">
            <RouterProvider router={router} />
          </div>
        </div>
        <div className="w-full flex">
          <Footer></Footer>
        </div>
      </div>
    </div>
  </StrictMode>
);
