import "./styles.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Budgets from "./pages/budgets";
import Articles from './pages/articles';
import Admin from './pages/admin';
import Process from './pages/process';
import Article from "./pages/article";

export default function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);
  
    return children;
  };

  return (
    <BrowserRouter>
        <Wrapper>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/process" element={<Process />} />
          <Route path="/articles/:id" element={<Article />} />
      </Routes>
        </Wrapper>
    </BrowserRouter>
  );
}
