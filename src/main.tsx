import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header/Header.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="relative bg-[url('/Layer_7.png'),url('/Layer_8.png')] w-screen bg-contain bg-repeat-repeat px-14">
      <div className="bg-[#004B2D] w-full h-full flex flex-col gap-3 px-14">
        <Header></Header>
        <NavBar></NavBar>
        <RouterProvider router={router} />
      </div>
      <Footer></Footer>
    </div>
  </StrictMode>
);
