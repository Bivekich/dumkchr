import LeftBar from "./components/LeftBar/LeftBar";
import MuftiyaRightBar from "./components/MuftiyaRightBar/MuftiyaRightBar";

export default function MuftiyaMainPage() {
  return (
    <div className="mt-3 flex gap-2 mb-52">
      <LeftBar></LeftBar>
      <MuftiyaRightBar></MuftiyaRightBar>
    </div>
  );
}
