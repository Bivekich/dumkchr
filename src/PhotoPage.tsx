import { useEffect, useState } from "react";
import { getPhotos } from "./sanity/sanity";

export default function PhotoPage() {
  const [url, setUrl] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const photos = await getPhotos();
      console.log(photos);
      const urls = photos.map((item: any) => {
        return {
          url: item.Photo.asset.url,
          name: item.PhotoName,
        };
      });
      setUrl(urls);
    };
    query();
  }, []);

  return (
    <div className="flex gap-20 mb-52 w-full flex-col max-[800px]:items-center ">
      {url.length > 0 &&
        url.map((url: any, index: number) => {
          return (
            <div className="text-[20px] text-white font-bold gap-10 flex flex-col ">
              <div key={index} className="rounded-[30px] max-w-[1000px]">
                <img
                  src={url.url}
                  className="w-full h-full rounded-[30px] objcet-cover mb-2"
                ></img>
                <p>{url.name}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
