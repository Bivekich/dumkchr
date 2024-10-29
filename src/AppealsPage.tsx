import { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";
import Document from "react-pdf/dist/cjs/Document.js";
import Page from "react-pdf/dist/cjs/Page.js";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { getAppeals } from "./sanity/sanity";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
export default function AppealsPage() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const query = async () => {
      const documents = await getAppeals();
      setData(documents);
    };

    query();
  }, []);
  return (
    <div className="flex mb-52 w-full">
      <div className="w-full grid grid-cols-3 grid-rows-1 max-[1650px]:grid-cols-2 max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center gap-y-20 overflow-x-hidden text-white text-[20px]">
        {data &&
          data.map((document: any) => {
            return (
              <div className="flex-wrap flex">
                <a href={document.Appeal.asset.url}>
                  <Document
                    file={document.Appeal.asset.url}
                    onLoadError={console.error}
                    className="w-fit"
                  >
                    <Page pageNumber={1} scale={0.6}></Page>
                  </Document>
                  <a
                    href={document.Appeal.asset.url}
                    className="flex w-fit text-[20px] font-bold hover:text-blue-600"
                  >
                    {document.AppealName}
                  </a>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
