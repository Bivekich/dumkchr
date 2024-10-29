interface Props {
  image: {
    asset: {
      url: string;
    };
  };
}
export default function MuftiyaCHR({ image }: Props) {
  return (
    <div className="flex max-[1800px]:w-[60%] w-[60%] h-full bg-[#E3E3E3] p-4 rounded-[30px] text-white flex-shrink-0">
      <img
        className="w-full rounded-[30px] bg-[#004B2D] object-center"
        alt="Муфтия Карачаево-Черкесской Республики"
        src={image.asset.url}
      ></img>
    </div>
  );
}
