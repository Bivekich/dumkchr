import Area from "../Hero/Area/Area";
import Form from "./Form/Form";

export default function FeedBackForm() {
  return (
    <div className="w-full  rounded-[30px] flex gap-2 overflow-x-hidden ">
      <Form />
      <Area></Area>
    </div>
  );
}
