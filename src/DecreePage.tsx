import { useEffect, useState } from "react";
import { getDecree } from "./sanity/sanity";
import { pdfjs } from "react-pdf";
import Document from "react-pdf/dist/cjs/Document.js";
import Page from "react-pdf/dist/cjs/Page.js";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
export default function DecreePage() {
  const [data, setData] = useState<
    { DecreeName: string; Decree: { asset: { url: string } } }[]
  >([]);
  useEffect(() => {
    const query = async () => {
      const documents = await getDecree();
      setData(documents);
    };

    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52 w-full">
      <div className="w-full grid grid-cols-3 grid-rows-1 gap-1 overflow-x-hidden text-white text-[20px]">
        {data &&
          data.map((document) => {
            return (
              <div className="flex-wrap flex">
                <div>
                  <Document
                    file={document.Decree.asset.url}
                    onLoadError={console.error}
                    className="w-fit"
                  >
                    <Page pageNumber={1} scale={0.6}></Page>
                  </Document>
                  <a
                    href={document.Decree.asset.url}
                    className="flex w-fit text-[20px] font-bold hover:text-blue-600"
                  >
                    {document.DecreeName}
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
