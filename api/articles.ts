import { articles } from './_data/articles';

export default function handler(req, res) {
  try {
    console.log("GET /api/articles hit (Vercel)");
    
    if (!articles) {
      console.error("Articles data is undefined or null");
      return res.status(500).json({ error: "Internal Server Error: Data missing" });
    }

    console.log("Query params:", req.query);
    const { category, featured } = req.query;
    let filtered = articles;
    
    if (category && typeof category === 'string' && category !== 'undefined') {
      const categoryParam = category.toLowerCase().trim();
      console.log(`Filtering by category: '${categoryParam}'`);
      
      filtered = filtered.filter(a => {
        const articleCategory = a.category.toLowerCase().trim();
        const match = articleCategory === categoryParam;
        return match;
      });
      
      console.log(`Found ${filtered.length} articles for category '${categoryParam}'`);
    }
    
    if (featured === 'true') {
      filtered = filtered.filter(a => a.featured);
    }

    res.status(200).json(filtered);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
