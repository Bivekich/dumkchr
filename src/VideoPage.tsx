import { useEffect, useState } from "react";
import { getVideo } from "./sanity/sanity";

export default function VideoPage() {
  const [urls, setUrls] = useState<string[]>([]);
  useEffect(() => {
    const query = async () => {
      const videos = await getVideo();
      const urls = videos.map((video: any) => {
        return video.url;
      });
      setUrls(urls);
    };
    query();
  }, []);
  return (
    <div className="flex gap-10 mb-52 w-full flex-col">
      {urls.length > 0 &&
        urls.map((url, index) => {
          console.log(url);
          return (
            <div className="rounded-[30px] h-[40rem] w-[60%] max-[2000px]:w-[90%] max-[1440px]:w-[90%] max-[1200px]:w-full object-cover">
              <video key={index} className="rounded-[30px]" controls={true}>
                <source src={url} type="video/mp4"></source>
              </video>
            </div>
          );
        })}
    </div>
  );
}
