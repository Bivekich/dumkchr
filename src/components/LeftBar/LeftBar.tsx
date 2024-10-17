import { useEffect, useState } from "react";
import Hadis from "../Hadis/Hadis";
import NamazTime from "../Namaz/NamazTime";
import PrayPlace from "../PrayPlace/PrayPlace";
import getSchedule from "../../../sanity/sanity";

export default function LeftBar() {
  const [citysName, setCitysName] = useState<string[]>([]);
  useEffect(() => {
    const query = async () => {
      const shedule = await getSchedule().then((Citys: any) => {
        return Citys[0].Citys;
      });
      setCitysName((prev) => [...prev, shedule.map((item: any) => item.Name)]);
    };
    query();
  }, []);
  useEffect(() => {
    console.log(citysName);
  });
  return (
    <div className="flex gap-3 flex-col w-96 max-[1440px]:w-64">
      <NamazTime></NamazTime>
      <PrayPlace></PrayPlace>
      <Hadis></Hadis>
    </div>
  );
}
