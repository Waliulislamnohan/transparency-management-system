import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Budgets from "./pages/budgets";
import Upload from './pages/Upload';
import Blogs from './pages/blogs';
import Admin from './pages/admin';
import Process from './pages/process';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/process" element={<Process />} />
      </Routes>
    </BrowserRouter>
  )
}
