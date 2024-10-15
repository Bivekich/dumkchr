import FeedBackRightBar from "./components/FeedBackRightBar/FeedBackRightBar";
import LeftBar from "./components/LeftBar/LeftBar";

export default function FeedBack() {
  return (
    <div className="mt-3 flex gap-2 mb-52">
      <LeftBar></LeftBar>
      <FeedBackRightBar></FeedBackRightBar>
    </div>
  );
}
