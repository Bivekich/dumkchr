import { useEffect, useState } from 'react';
import { client } from './sanity/sanity';

interface FatwaContent {
  _id: string;
  title?: string;
  images?: Array<{
    _key: string;
    asset?: {
      url: string;
    };
    caption?: string;
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
          "images": images[]{
            _key,
            "asset": asset->{
              "url": url
            },
            caption
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content?.images?.map((fatwa) => (
          <div
            key={fatwa._key}
            className="bg-gray-50 rounded-lg p-4 flex flex-col h-full"
          >
            {fatwa.asset?.url && (
              <div className="flex-grow">
                <img
                  src={fatwa.asset.url}
                  alt={fatwa.caption || ''}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
            {fatwa.caption && (
              <p className="text-center text-gray-700 mt-2">{fatwa.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
