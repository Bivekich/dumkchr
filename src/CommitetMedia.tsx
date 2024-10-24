import PersonInfo from "./components/PersonInfo/PersonInfo";
/*interface dataInterface {
  data: {
    Image: {
      asset: {
        url: string;
      };
    };
    Name: string;
    LeaderOf: string;
    Description: string;
  };
}*/
export default function CommitetMedia() {
  return (
    <div className="flex gap-2 mb-52 w-full">
      <PersonInfo
        data={{
          Image: { asset: { url: "#" } },
          Name: "hello",
          LeaderOf: "world",
          Description: "hehe",
        }}
      ></PersonInfo>
    </div>
  );
}
