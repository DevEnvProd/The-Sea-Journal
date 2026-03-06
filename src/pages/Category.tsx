import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArticleCard } from '../components/ArticleCard';

interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  publishedAt: string;
  imageUrl: string;
  author: string;
}

export function Category() {
  const { category } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!category) {
        console.log("Category is undefined, skipping fetch");
        setLoading(false);
        return;
      }

      setLoading(true);
      console.log(`Fetching articles for category: ${category}`);
      try {
        const res = await fetch(`/api/articles?category=${encodeURIComponent(category)}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          console.log(`Received ${data.length} articles`);
          setArticles(data);
        } catch (e) {
          console.error('Failed to parse JSON:', text.substring(0, 100));
          throw new Error('Invalid JSON response');
        }
      } catch (error) {
        console.error('Failed to fetch articles', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <>
      <Helmet>
        <title>{capitalize(category || '')} News - SEA Pulse</title>
      </Helmet>

      <main className="container mx-auto px-4 py-12 pb-20">
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="font-serif text-5xl font-bold mb-4">{capitalize(category || '')}</h1>
          <p className="text-gray-500 text-lg">Latest news and updates from the {category} world.</p>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No articles found in this category.
          </div>
        )}
      </main>
    </>
  );
}
