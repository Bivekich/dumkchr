import { useEffect, useState } from 'react';
import { client } from './sanity/sanity';

interface HalalContent {
  _id: string;
  heading?: string;
  certificates?: Array<{
    _key: string;
    image?: {
      asset?: {
        url: string;
      };
    };
    caption: string;
  }>;
}

export default function HalalPage() {
  const [content, setContent] = useState<HalalContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHalalContent = async () => {
      try {
        const query = `*[_type == "halal"][0] {
          _id,
          heading,
          certificates[] {
            _key,
            image {
              asset-> {
                url
              }
            },
            caption
          }
        }`;
        const result = await client.fetch(query);
        setContent(result);
      } catch (error) {
        console.error('Error fetching halal content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHalalContent();
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
        {content?.heading || 'ХАЛЯЛЬ'}
      </h1>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content?.certificates?.map((cert) => (
          <div key={cert._key} className="bg-gray-50 rounded-lg p-4">
            {cert.image?.asset?.url && (
              <img
                src={cert.image.asset.url}
                alt={cert.caption}
                className="w-full h-auto rounded-lg"
              />
            )}
            <p className="text-center text-gray-700 mt-3">{cert.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
