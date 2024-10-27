import { useEffect, useState } from "react";
import { getVideo } from "./sanity/sanity";

export default function VideoPage() {
  const [videos, setVideos] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const videos = await getVideo();
      const urls = videos.map((video: any) => {
        return { url: video.url, name: video.fileName };
      });
      setVideos(urls);
    };
    query();
  }, []);
  return (
    <div className="flex gap-10 mb-52 w-full flex-col">
      {videos.length > 0 &&
        videos.map((item: any, index: number) => {
          return (
            <div className="rounded-[30px] h-[35rem] w-[50rem] max-[850px]:w-[90%] object-cover text-[20px] text-white font-bold gap-3">
              <div className="flex flex-col gap-3">
                <video key={index} className="rounded-[30px]" controls={true}>
                  <source src={item.url} type="video/mp4"></source>
                </video>
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
