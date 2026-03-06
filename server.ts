import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { articles } from "./api/_data/articles";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Routes
  app.get("/api/articles", (req, res) => {
    console.log("GET /api/articles hit");
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
    } else {
      console.log("No valid category filter provided");
    }
    
    if (featured === 'true') {
      filtered = filtered.filter(a => a.featured);
    }

    res.json(filtered);
  });

  app.get("/api/articles/:slug", (req, res) => {
    console.log(`GET /api/articles/${req.params.slug} hit`);
    const article = articles.find(a => a.slug === req.params.slug);
    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ error: "Article not found" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
