import "./styles.css";
import Header from "./components/header.jsx";
import Updates from "./components/updates.jsx";
import Footer from "./components/footer.jsx";
import Stats from "./components/stats.jsx";

export default function App(){
  return( 
  <>  
      <Header />
      <main>
        <div className="intro">
          <h1 className="title">Transparency Portal</h1>
          <div className="search-bar">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="Search" type="search" className="input"/>
            <button className="search-btn">Search</button>
          </div>    
        </div>
        <Stats/>
      <div className="info-section"> 
          <Updates/>
          <div className="cards-container">        
            <div className="cards">
              <div className="grid">
                <a href="" className="card-link">
                  <div className="card two"><div><h3>Budgets and Operations</h3></div></div>
                </a>
                <a href="" className="card-link">
                  <div className="card one"><div><h3>Financial Reports</h3></div></div>
                </a>
                <a href="" className="card-link">
                  <div className="card three"><div><h3>Govt. Policies</h3></div></div>
                </a>
                <a href="" className="card-link">
                  <div className="card six"><div><h3>Development Projects</h3></div></div>
                </a>
                <a href="" className="card-link">
                  <div className="card five"><div><h3>Employment</h3></div></div>
                </a>
                <a href="" className="card-link">
                  <div className="card four"><div><h3>Public Services</h3></div></div>
                </a>
              </div>
            </div>            
          </div>
      </div>
    </main>
    <Footer/>
  </>
  );
}