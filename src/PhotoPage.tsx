import { useEffect, useState } from "react";
import { getPhotos } from "./sanity/sanity";

export default function PhotoPage() {
  const [url, setUrl] = useState<string[]>([]);
  useEffect(() => {
    const query = async () => {
      const photos = await getPhotos();
      const urls = photos.map((item: any) => item.asset.url);
      setUrl(urls);
    };
    query();
  }, []);
  return (
    <div className="flex gap-10 mb-52 w-full flex-col">
      {url.length > 0 &&
        url.map((url) => {
          return (
            <img
              className="bg-black rounded-[30px] h-[40rem] w-[60%] max-[2000px]:w-[90%] max-[1440px]:w-[90%] max-[1200px]:w-full"
              src={url}
            ></img>
          );
        })}
    </div>
  );
}
