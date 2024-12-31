import { Link } from 'react-router-dom';
import Header from "../components/header.jsx";
import Updates from "../components/updates.jsx";
import Footer from "../components/footer.jsx";
import Stats from "../components/stats.jsx";
import intro from "../assets/img/Intro_bg.png";
import finance from "../assets/img/Financial.jpg";
import funding from "../assets/img/Funding.jpeg";
import policies from "../assets/img/Policies.webp";
import sevices from "../assets/img/Services.jpeg";
import employment from "../assets/img/Employment1.webp";
import projects from "../assets/img/Projects.jpg";
import Intro from '../components/text-animation.jsx';

export default function App(){
  return( 
  <>  
      <Header />
      <main className="main-container">
      <div style={{backgroundImage: `url(${intro})`}} className="intro">
          <Intro/>
        </div>
        <Stats/>
      <section className="info-section"> 
          <Updates/>
          <div className="cards-container">        
            <div className="cards">
              <div className="grid">
                <Link to="/Budgets" className="card-link">
                  <div style={{backgroundImage: `url(${funding})`}} className="card two"><div><h3>Budgets and Operations</h3></div></div>
                </Link>
                <Link to="#" className="card-link">
                <div style={{backgroundImage: `url(${finance})`}} className="card one"><div><h3>Financial Reports</h3></div></div>
                </Link>
                <Link to="#" className="card-link">
                <div style={{backgroundImage: `url(${policies})`}} className="card three"><div><h3>Govt. Policies</h3></div></div>
                </Link>
                <Link to="#" className="card-link">
                <div style={{backgroundImage: `url(${sevices})`}} className="card four"><div><h3>Public Services</h3></div></div>
                </Link>
                <Link to="#" className="card-link">
                <div style={{backgroundImage: `url(${employment})`}} className="card five"><div><h3>Employment</h3></div></div>
                </Link>
                <Link to="#" className="card-link">
                <div style={{backgroundImage: `url(${projects})`}} className="card six"><div><h3>Development Projects</h3></div></div>
                </Link>
              </div>
            </div>            
          </div>
      </section>
    </main>
    <Footer/>
  </>
  );
}