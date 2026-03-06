import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { ArrowRight, TrendingUp, Play, BarChart3, ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  publishedAt: string;
  imageUrl: string;
  author: string;
  featured?: boolean;
}

export function Home() {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/articles');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          setFeaturedArticles(data.filter((a: Article) => a.featured));
          setLatestArticles(data.filter((a: Article) => !a.featured));
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
  }, []);

  const marketData = [
    { name: 'STI', value: '3,145.22', change: '+0.45%' },
    { name: 'KLCI', value: '1,456.80', change: '-0.12%' },
    { name: 'SET', value: '1,389.55', change: '+0.89%' },
    { name: 'JKSE', value: '6,890.11', change: '+0.23%' },
    { name: 'PSEi', value: '6,230.45', change: '-0.56%' },
  ];

  const opinionPieces = [
    { title: "Why ASEAN needs a unified digital currency", author: "Dr. Somchai", role: "Economist" },
    { title: "The hidden cost of rapid urbanization in Jakarta", author: "Dewi Lestari", role: "Urban Planner" },
    { title: "Tech talent shortage: A crisis or opportunity?", author: "James Wong", role: "Tech Analyst" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>The SEA Journal - Southeast Asia News</title>
        <meta name="description" content="Breaking news, in-depth analysis and perspectives from Southeast Asia." />
      </Helmet>

      <main className="pb-20 bg-white text-black">
        {/* Breaking News Ticker */}
        <div className="bg-red-700 text-white text-xs md:text-sm py-2">
          <div className="container mx-auto px-4 flex items-center">
            <span className="font-bold uppercase tracking-wider mr-4 shrink-0">Breaking News</span>
            <div className="overflow-hidden whitespace-nowrap">
              <p className="animate-marquee inline-block">
                Singapore announces new green energy initiatives • Vietnam's GDP grows by 5.6% in Q1 • Thailand to host ASEAN summit next month • Indonesia launches new digital nomad visa program
              </p>
            </div>
          </div>
        </div>

        {/* Market Data Bar */}
        <div className="border-b border-gray-200 bg-gray-50 py-3 overflow-x-auto">
          <div className="container mx-auto px-4 flex space-x-8 min-w-max">
            {marketData.map((market) => (
              <div key={market.name} className="flex items-center space-x-2 text-sm">
                <span className="font-bold text-gray-700">{market.name}</span>
                <span className="font-mono">{market.value}</span>
                <span className={market.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {market.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          {featuredArticles.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Feature */}
              <div className="lg:col-span-8">
                <ArticleCard article={featuredArticles[0]} variant="featured" className="h-[400px] md:h-[500px]" />
              </div>
              {/* Side Column */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="border-b-2 border-black pb-2 mb-2">
                  <h3 className="font-serif text-xl font-bold uppercase tracking-wider">Top Stories</h3>
                </div>
                {featuredArticles.slice(1).map((article) => (
                  <ArticleCard key={article.id} article={article} variant="compact" />
                ))}
                {/* Fallback if not enough featured */}
                {featuredArticles.length < 2 && latestArticles.slice(0, 2).map((article) => (
                   <ArticleCard key={article.id} article={article} variant="compact" />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Business & Economy Section */}
        <section className="bg-gray-50 py-16 border-y border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-red-700"></div>
                <h2 className="font-serif text-3xl font-bold">Business & Economy</h2>
              </div>
              <Link to="/category/business" className="text-sm font-bold uppercase tracking-wider hover:text-red-700 flex items-center">
                More Business <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.filter(a => a.category === 'Business' || a.category === 'Technology').slice(0, 3).map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Opinion & Editorial */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
               <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-black"></div>
                <h2 className="font-serif text-3xl font-bold">Latest News</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {latestArticles.slice(0, 4).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-gray-50 p-6 border-t-4 border-red-700">
                <h3 className="font-serif text-2xl font-bold mb-6">Opinion</h3>
                <div className="space-y-6 divide-y divide-gray-200">
                  {opinionPieces.map((piece, idx) => (
                    <div key={idx} className="pt-6 first:pt-0">
                      <h4 className="font-serif text-lg font-bold leading-tight mb-2 hover:text-red-700 cursor-pointer">
                        {piece.title}
                      </h4>
                      <div className="text-sm text-gray-500">
                        <span className="font-bold text-black uppercase text-xs">{piece.author}</span>
                        <span className="mx-2">•</span>
                        <span className="italic">{piece.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 border border-black py-3 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                  View All Opinions
                </button>
              </div>

              {/* Newsletter Mini */}
              <div className="mt-12 bg-black text-white p-6">
                <h3 className="font-serif text-xl font-bold mb-2">Daily Briefing</h3>
                <p className="text-gray-400 text-sm mb-4">Essential news, expert analysis.</p>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white/10 border border-white/20 p-2 text-sm mb-2 focus:outline-none focus:border-white"
                />
                <button className="w-full bg-red-700 text-white py-2 text-sm font-bold uppercase hover:bg-red-600 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Multimedia / Video Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl font-bold flex items-center gap-3">
                <Play className="h-6 w-6 text-red-600 fill-current" />
                Multimedia
              </h2>
              <Link to="/multimedia" className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white">
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video bg-gray-800 mb-3 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/video${i}/600/400`} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-700/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-5 w-5 fill-white text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs font-bold">
                      4:2{i}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg leading-tight group-hover:text-red-500 transition-colors">
                    Special Report: The changing landscape of Southeast Asian digital economy
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
