import { useEffect, useState } from "react";
import { getPhotos } from "./sanity/sanity";

export default function PhotoPage() {
  const [url, setUrl] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const photos = await getPhotos();
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
    <div className="flex gap-20 mb-52 w-full flex-col max-[800px]:items-center ">
      {url.length > 0 &&
        url.map((url: any, index: number) => {
          return (
            <div className="text-[20px] text-white font-bold gap-10 flex flex-col ">
              <div
                key={index}
                className="rounded-[30px] h-[35rem] w-[35rem] max-[800px]:size-[40rem] max-[680px]:size-[30rem] max-[550px]:size-[25rem] max-[500px]:size-[20rem]"
              >
                <img
                  src={url.url}
                  className="w-full h-full rounded-[30px] objcet-cover mb-2 "
                ></img>
                <p>{url.name}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
