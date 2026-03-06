import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { formatDistanceToNow, format } from 'date-fns';
import { Clock, User, Share2, Bookmark } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  publishedAt: string;
  imageUrl: string;
  author: string;
}

export function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/articles/${slug}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          setArticle(data);
        } catch (e) {
          console.error('Failed to parse JSON:', text.substring(0, 100));
          throw new Error('Invalid JSON response');
        }
      } catch (error) {
        console.error('Failed to fetch article', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!article) return <div className="min-h-screen flex items-center justify-center">Article not found</div>;

  return (
    <>
      <Helmet>
        <title>{article.title} - The SEA Journal</title>
        <meta name="description" content={article.summary} />
      </Helmet>

      <main className="pb-20">
        <article className="container mx-auto px-4 max-w-4xl pt-8 md:pt-12">
          {/* Header */}
          <header className="mb-8 md:mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-red-600 font-bold uppercase tracking-wider text-sm">{article.category}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              {article.summary}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 border-y border-gray-100 py-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium text-gray-900">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{format(new Date(article.publishedAt), 'MMMM d, yyyy')}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-auto object-cover max-h-[600px]"
              referrerPolicy="no-referrer"
            />
            <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 text-right">
              Photo by Unsplash
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar (Share) */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 flex flex-row lg:flex-col gap-4 justify-center lg:justify-start">
                <button className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Text */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-gray max-w-none font-serif">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
