import LeftBar from "./components/LeftBar/LeftBar";
import MuftiyaSupportRightBar from "./components/MuftiyaSupportRightBar/MuftiyaSupportRightBar";

export default function MuftiyaMainSupportPage() {
  return (
    <div className="mt-3 flex gap-2 mb-52">
      <LeftBar></LeftBar>
      <MuftiyaSupportRightBar></MuftiyaSupportRightBar>
    </div>
  );
}
