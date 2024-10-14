import Hero from "../Hero/Hero";
import MainNews from "../MainNews/MainNews";

export default function RightBar() {
  return (
    <div className="w-full flex flex-col gap-3">
      <Hero></Hero>
      <MainNews></MainNews>
    </div>
  );
}
