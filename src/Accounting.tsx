import { useEffect, useState } from "react";
import { getAccounting } from "./sanity/sanity";
import { pdfjs } from "react-pdf";
import Document from "react-pdf/dist/cjs/Document.js";
import Page from "react-pdf/dist/cjs/Page.js";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { PortableText } from "@portabletext/react";
export default function AccountingPage() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const query = async () => {
      const documents = await getAccounting();
      setData(documents.Array);
    };

    query();
  }, []);
  return (
    <div className="flex mb-52 w-full">
      <div className="w-full flex flex-col gap-24 overflow-x-hidden text-white text-[20px] ml-10">
        {data &&
          data.map((document) => {
            return (
              <div className="flex-wrap flex flex-col">
                <PortableText
                  value={document.text}
                  components={{
                    types: {
                      span: ({ value }) => <span>{value}</span>,
                      p: ({ value }) => <p>{value}</p>,
                    },
                    marks: {
                      strong: ({ children }) => <strong>{children}</strong>,
                    },
                  }}
                ></PortableText>
                <a href={document.doc.asset.url}>
                  <Document
                    file={document.doc.asset.url}
                    onLoadError={console.error}
                    className="w-fit"
                  >
                    <Page pageNumber={1} scale={0.6}></Page>
                  </Document>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
