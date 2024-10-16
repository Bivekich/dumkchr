import EducationDepartamentRightBar from "./components/EducationDepartamentRightBar/EducationDepartamentRightBar";
import LeftBar from "./components/LeftBar/LeftBar";

export default function EducationDepartament() {
  return (
    <div className="mt-3 flex gap-2 mb-52">
      <LeftBar></LeftBar>
      <EducationDepartamentRightBar />
    </div>
  );
}
