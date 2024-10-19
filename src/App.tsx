import { useEffect } from "react";
import RightBar from "./components/RightBar/RightBar";
import { getPhotos } from "../sanity/sanity";
export default function App() {
  useEffect(() => {
    const query = async () => {
      getPhotos();
    };
    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52">
      <RightBar></RightBar>
    </div>
  );
}
