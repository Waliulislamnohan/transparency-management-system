import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Budgets from "./pages/budgets";

export default function App(){
  return( 
  <>  
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />}/>
        <Route path="/budgets" element = {<Budgets/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}