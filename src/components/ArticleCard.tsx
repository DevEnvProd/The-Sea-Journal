import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '../lib/utils';

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

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}

export function ArticleCard({ article, variant = 'default', className }: ArticleCardProps) {
  if (variant === 'featured') {
    return (
      <Link to={`/article/${article.slug}`} className={cn("group block relative overflow-hidden rounded-xl", className)}>
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
          <span className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">{article.category}</span>
          <h2 className="text-white font-serif text-2xl md:text-4xl font-bold leading-tight mb-3 group-hover:underline decoration-2 underline-offset-4">
            {article.title}
          </h2>
          <p className="text-gray-300 line-clamp-2 max-w-2xl mb-4 hidden md:block">
            {article.summary}
          </p>
          <div className="flex items-center text-white/60 text-xs space-x-3">
            <span className="font-medium text-white">{article.author}</span>
            <span>•</span>
            <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/article/${article.slug}`} className={cn("group flex gap-4 items-start", className)}>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-600 text-xs font-bold uppercase tracking-wider">{article.category}</span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-gray-400 text-xs">{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
          </div>
          <h3 className="font-serif text-lg font-bold leading-snug mb-2 group-hover:text-red-700 transition-colors">
            {article.title}
          </h3>
        </div>
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.slug}`} className={cn("group block", className)}>
      <div className="aspect-[3/2] w-full overflow-hidden rounded-lg mb-4 bg-gray-100">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-red-600 text-xs font-bold uppercase tracking-wider">{article.category}</span>
        <span className="text-gray-400 text-xs">•</span>
        <span className="text-gray-400 text-xs">{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
      </div>
      <h3 className="font-serif text-xl font-bold leading-tight mb-2 group-hover:text-red-700 transition-colors">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
        {article.summary}
      </p>
    </Link>
  );
}
