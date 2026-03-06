import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ArticleDetail } from './pages/ArticleDetail';
import { Category } from './pages/Category';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}
