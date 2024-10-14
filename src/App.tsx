import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";

function App() {
  return (
    <div className="mt-3 flex gap-2">
      <LeftBar></LeftBar>
      <RightBar></RightBar>
    </div>
  );
}

export default App;
