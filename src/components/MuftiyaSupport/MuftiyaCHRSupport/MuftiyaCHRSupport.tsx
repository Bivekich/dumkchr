interface imageProps {
  image: string;
}
export default function MuftiyaCHRSupport({ image }: imageProps) {
  return (
    <div className="w-full h-[37rem] rounded-[30px] flex gap-2 overflow-x-hidden">
      <div className="flex w-[100%] h-full bg-[#E3E3E3] p-4 rounded-[30px] text-white flex-shrink-0">
        <img
          className="w-full rounded-[30px] bg-[#004B2D] object-center"
          alt="Советник"
          src={image}
        ></img>
      </div>
    </div>
  );
}
