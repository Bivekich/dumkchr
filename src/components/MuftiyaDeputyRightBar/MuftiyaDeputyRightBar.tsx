import MuftiyaDeputy from "../MuftiyaDeputy/MuftiyaDeputy";
import PersonInfo from "../PersonInfo/PersonInfo";

export default function MuftiyaDeputyRightBar() {
  return (
    <div className="w-full flex flex-col gap-y-3 overflow-x-hidden text-white text-[20px]">
      <MuftiyaDeputy></MuftiyaDeputy>
      <div className="px-4 flex flex-col gap-5">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Proin rutrum
          natoque integer accumsan vestibu lum augue diam aliquam. Dictumst duis
          nam laoreet penatibus odio mi. Rhoncus commodo iaculis nunc aptent
          praesent, sapien imperdiet interdum. Dui amet quis tristique odio
          tristique inceptos fusce. Curabitur nibh efficitur diam quis habitasse
          quam ullamcorper vel tempus.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Proin rutrum
          natoque integer accumsan vestibu lum augue diam aliquam. Dictumst duis
          nam laoreet penatibus odio mi. Rhoncus commodo iaculis nunc aptent
          praesent, sapien imperdiet interdum. Dui amet quis tristique odio
          tristique inceptos fusce. Curabitur nibh efficitur diam quis habitasse
          quam ullamcorper vel tempus.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Proin rutrum
          natoque integer accumsan vestibu lum augue diam aliquam. Dictumst duis
          nam laoreet penatibus odio mi. Rhoncus commodo iaculis nunc aptent
          praesent, sapien imperdiet interdum. Dui amet quis tristique odio
          tristique inceptos fusce. Curabitur nibh efficitur diam quis habitasse
          quam ullamcorper vel tempus.
        </p>
      </div>
      <div className="flex flex-col gap-10 px-4">
        <PersonInfo></PersonInfo>
        <PersonInfo></PersonInfo>
        <PersonInfo></PersonInfo>
      </div>
    </div>
  );
}
