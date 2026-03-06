import { articles } from './_data/articles';

export default function handler(req, res) {
  console.log("GET /api/articles hit (Vercel)");
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
}
