interface AreaRowProps {
  name: string;
}
export default function AreaRow({ name }: AreaRowProps) {
  return (
    <div className="w-full p-4 rounded-full flex items-center justify-between h-10 bg-[#177245] text-white">
      <p>{name}</p>
    </div>
  );
}
