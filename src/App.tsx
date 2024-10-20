import { useEffect } from "react";
import RightBar from "./components/RightBar/RightBar";
import { getDecree } from "./sanity/sanity";
export default function App() {
  useEffect(() => {
    const query = async () => {
      const Decree = await getDecree();
      console.log(Decree);
    };
    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52">
      <RightBar></RightBar>
    </div>
  );
}
