import { useEffect, useState } from 'react';
import { client } from './sanity/sanity';

interface FatwaContent {
  _id: string;
  title?: string;
  pdfFiles?: Array<{
    _key: string;
    asset?: {
      url: string;
      originalFilename?: string;
    };
    title?: string;
    description?: string;
  }>;
}

export default function FetvaPage() {
  const [content, setContent] = useState<FatwaContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFatwaContent = async () => {
      try {
        const query = `*[_type == "fatwa"][0] {
          _id,
          title,
          "pdfFiles": pdfFiles[]{
            _key,
            "asset": asset->{
              "url": url,
              "originalFilename": originalFilename
            },
            title,
            description
          }
        }`;
        const result = await client.fetch(query);
        setContent(result);
      } catch (error) {
        console.error('Error fetching fatwa content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFatwaContent();
  }, []);

  if (loading) {
    return (
      <div className="bg-white w-full rounded-[30px] p-8">
        <div className="text-center">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full rounded-[30px] p-8">
      <h1 className="text-[#004B2D] text-3xl font-semibold mb-8">
        {content?.title || 'ФЕТВЫ'}
      </h1>

      {/* PDF файлы */}
      {content?.pdfFiles && content.pdfFiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.pdfFiles.map((pdf) => (
            <div
              key={pdf._key}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <svg 
                  className="w-8 h-8 text-red-600 mr-3" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">
                    {pdf.title || pdf.asset?.originalFilename || 'PDF документ'}
                  </h3>
                </div>
              </div>
              
              {pdf.description && (
                <p className="text-gray-600 text-sm mb-3">{pdf.description}</p>
              )}
              
              {pdf.asset?.url && (
                <div className="flex gap-2">
                  <a
                    href={pdf.asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#004B2D] text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-[#003d24] transition-colors"
                  >
                    Открыть
                  </a>
                  <a
                    href={pdf.asset.url}
                    download
                    className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-gray-700 transition-colors"
                  >
                    Скачать
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>PDF файлы не найдены</p>
        </div>
      )}
    </div>
  );
}
