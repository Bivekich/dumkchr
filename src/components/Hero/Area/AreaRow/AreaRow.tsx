interface AreaRowProps {
  name: string;
}
export default function AreaRow({ name }: AreaRowProps) {
  return (
    <div className="w-full max-[1440px]:text-[13px] max-[1800px]:text-[12px]  p-4 rounded-full flex items-center justify-between h-10 bg-[#177245] text-white max-[1800px]:text-center max-[1800px]:justify-center ">
      <p>{name}</p>
    </div>
  );
}
