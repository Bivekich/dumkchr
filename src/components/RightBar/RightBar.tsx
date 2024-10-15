import Hero from "../Hero/Hero";
import MainNews from "../MainNews/MainNews";

export default function RightBar() {
  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden">
      <Hero></Hero>
      <MainNews></MainNews>
    </div>
  );
}
