import { articles } from '../_data/articles';

export default function handler(req, res) {
  try {
    const { slug } = req.query;
    console.log(`GET /api/articles/${slug} hit (Vercel)`);
    
    if (!articles) {
       console.error("Articles data is undefined or null");
       return res.status(500).json({ error: "Internal Server Error: Data missing" });
    }

    const article = articles.find(a => a.slug === slug);
    
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ error: "Article not found" });
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
