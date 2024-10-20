interface imageProps {
  image: string;
}
export default function MuftiyaCHRSupport({ image }: imageProps) {
  return (
    <div className="flex max-[1800px]:w-[80%] w-[70%] h-full bg-[#E3E3E3] p-4 rounded-[30px] text-white flex-shrink-0">
      <img
        className="w-full rounded-[30px]"
        alt="Советник Муфтия"
        src={image}
      ></img>
    </div>
  );
}
