import { useEffect, useState } from "react";
import MuftiyaRightBar from "./components/MuftiyaRightBar/MuftiyaRightBar";
import { getLeaders } from "./sanity/sanity";

export default function MuftiyaMainPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const query = async () => {
      const data = await getLeaders();
      const MyftiyaData = data.filter(
        (data: {
          Image: { asset: { url: string } };
          Name: string;
          LeaderOf: string;
          Description: string;
        }) => {
          return data.LeaderOf === "Muftiya";
        }
      );
      setData(MyftiyaData);
    };

    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52 w-full">
      {data.length > 0 && <MuftiyaRightBar data={data[0]}></MuftiyaRightBar>}
    </div>
  );
}
