import { useEffect } from "react";
import RightBar from "./components/RightBar/RightBar";
import getSchedule from "../sanity/sanity";

function App() {
  useEffect(() => {
    const query = async () => {
      getSchedule();
    };
    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52">
      <RightBar></RightBar>
    </div>
  );
}

export default App;
