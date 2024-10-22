import { useEffect } from "react";
import RightBar from "./components/RightBar/RightBar";
import { getNews } from "./sanity/sanity";

export default function App() {
  useEffect(() => {
    const query = async () => {
      const news = await getNews();
      console.log(news);
    };
    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52 w-full">
      <RightBar></RightBar>
    </div>
  );
}
