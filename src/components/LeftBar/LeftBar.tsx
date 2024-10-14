import Hadis from "../Hadis/Hadis";
import NamazTime from "../Namaz/NamazTime";
import PrayPlace from "../PrayPlace/PrayPlace";

export default function LeftBar() {
  return (
    <div className="flex gap-3 flex-col w-96">
      <NamazTime></NamazTime>
      <PrayPlace></PrayPlace>
      <Hadis></Hadis>
    </div>
  );
}
