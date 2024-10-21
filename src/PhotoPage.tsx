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
          url: item.url,
          name: item.fileName,
        };
      });
      setUrl(urls);
    };
    query();
  }, []);

  return (
    <div className="flex gap-20 mb-52 w-full flex-col">
      {url.length > 0 &&
        url.map((url: any, index: number) => {
          return (
            <div className="text-[20px] text-white font-bold gap-10 flex flex-col">
              <div
                key={index}
                className="bg-black rounded-[30px] h-[40rem] w-[60%] max-[2000px]:w-[90%] max-[1440px]:w-[90%] max-[1200px]:w-full"
              >
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
