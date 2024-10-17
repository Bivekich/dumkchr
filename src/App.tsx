import { useEffect } from "react";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import getSchedule from "../sanity/sanity";
function App() {
  useEffect(() => {
    const query = async () => {
      console.log(await getSchedule());
    };
    query();
  }, []);
  return (
    <div className="mt-3 flex gap-2">
      <LeftBar></LeftBar>
      <RightBar></RightBar>
    </div>
  );
}

export default App;
