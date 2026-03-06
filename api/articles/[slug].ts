import { articles } from '../../src/data/articles';

export default function handler(req, res) {
  const { slug } = req.query;
  console.log(`GET /api/articles/${slug} hit (Vercel)`);
  
  const article = articles.find(a => a.slug === slug);
  
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
}
