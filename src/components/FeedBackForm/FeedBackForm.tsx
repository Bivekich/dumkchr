import Area from "../Hero/Area/Area";
import Form from "./Form/Form";

export default function FeedBackForm() {
  return (
    <div className="w-full rounded-[30px] flex gap-2 overflow-x-hidden max-[800px]:flex-col">
      <div className="w-full flex min-[800px]:hidden">
        <Area></Area>
      </div>
      <Form />

      <div className="w-full flex max-[800px]:hidden">
        <Area></Area>
      </div>
    </div>
  );
}
