interface imageProps {
  image: string;
}
export default function PersonIcon({ image }: imageProps) {
  return (
    <div className="flex max-[1800px]:w-[80%] w-[70%] h-[35rem] bg-[#E3E3E3] p-4 rounded-[30px] text-white flex-shrink-0">
      <img className="w-full rounded-[30px] object-center" src={image}></img>
    </div>
  );
}
