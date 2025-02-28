import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Blogs } from './pages/Blogs';
import { BlogPost } from './pages/BlogPost';
import { Newsletter } from './pages/Newsletter';
import { BookCall } from './pages/BookCall';
import { About } from './pages/About';
import { useLayoutEffect } from 'react';

// ScrollToTop component to handle scroll behavior
const ScrollToTop = () => {
  const location = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/book-a-call" element={<BookCall />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;