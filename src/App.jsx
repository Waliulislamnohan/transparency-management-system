import "./styles.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Budgets from "./pages/budgets";
import Blogs from './pages/blogs';
import Admin from './pages/admin';
import Process from './pages/process';

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
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/process" element={<Process />} />
      </Routes>
        </Wrapper>
    </BrowserRouter>
  );
}
