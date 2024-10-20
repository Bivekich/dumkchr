import { useEffect, useState } from "react";
import { getDecree } from "./sanity/sanity";
import { pdfjs } from "react-pdf";
import Document from "react-pdf/dist/cjs/Document.js";
import Page from "react-pdf/dist/cjs/Page.js";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
export default function DecreePage() {
  const [data, setData] = useState<{ url: string; fileName: string }[]>([]);
  useEffect(() => {
    const query = async () => {
      const documents = await getDecree();
      setData(documents);
    };

    query();
  }, []);

  return (
    <div className="flex gap-2 mb-52 w-full">
      <div className="w-full flex flex-col gap-y-10 overflow-x-hidden text-white text-[20px]">
        {data &&
          data.map((document) => {
            return (
              <div className="flex gap-2">
                <Document
                  file={document.url}
                  onLoadError={console.error}
                  className="w-fit"
                >
                  <Page pageNumber={1} scale={0.6}></Page>
                </Document>
                <a
                  href={document.url}
                  className="flex w-fit text-[20px] font-bold hover:text-blue-600"
                >
                  {document.fileName.split(".pdf")[0]}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
