import LeftBar from "./components/LeftBar/LeftBar";
import MuftiyaDeputyRightBar from "./components/MuftiyaDeputyRightBar/MuftiyaDeputyRightBar";

export default function MuftiyaDeputyMainPage() {
  return (
    <div className="mt-3 flex gap-2 mb-52">
      <LeftBar></LeftBar>
      <MuftiyaDeputyRightBar />
    </div>
  );
}
