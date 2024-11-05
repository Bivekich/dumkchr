import { useEffect, useState } from "react";
import Hadis from "../Hadis/Hadis";
import NamazTime from "../Namaz/NamazTime";
import PrayPlace from "../PrayPlace/PrayPlace";
import getSchedule from "../../sanity/sanity";

export default function LeftBar() {
  const [today, setToday] = useState([]);
  useEffect(() => {
    const date = new Date();
    const moscowOffset = 3 * 60 * 60 * 1000;
    let moscowTime = new Date(date.getTime() + moscowOffset);
    const currentDate = moscowTime.toISOString().split("T")[0];
    console.log(currentDate);
    const query = async () => {
      const schedule = await getSchedule();
      const today = schedule.filter((item: any) => item.Date === currentDate);
      setToday(today[0].List);
    };
    query();
  }, []);
  return (
    <div className="flex gap-3 flex-col w-96 max-[640px]:w-full max-[1440px]:w-64 max-[1280px]:w-fit max-[850px]:w-full">
      {today && <NamazTime time={today}></NamazTime>}
      <PrayPlace></PrayPlace>
      <Hadis></Hadis>
    </div>
  );
}
