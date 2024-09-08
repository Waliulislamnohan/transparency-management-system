import "./styles.css"

export default function App(){
  return( <div>
    
  <nav>
      <a classNameName="header-logo" href="./">
        <img src="./src/assets/img/Logo.png" alt="Logo" className="logo-img"/> 
      </a>
    <div className="nav-links">
        <div className="options">
          <a className="nav-link" href="">
            <svg className="nav-icon"  clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6.864 3.424c.502-.301 1.136.063 1.136.642 0 .264-.138.509-.365.644-2.476 1.486-4.135 4.197-4.135 7.292 0 4.691 3.808 8.498 8.498 8.498s8.497-3.807 8.497-8.498c0-3.093-1.656-5.803-4.131-7.289-.225-.136-.364-.38-.364-.644 0-.582.635-.943 1.137-.642 2.91 1.748 4.858 4.936 4.858 8.575 0 5.519-4.479 9.998-9.997 9.998s-9.998-4.479-9.998-9.998c0-3.641 1.951-6.83 4.864-8.578zm.831 8.582s2.025 2.021 3.779 3.774c.147.147.339.22.53.22.192 0 .384-.073.531-.22 1.753-1.752 3.779-3.775 3.779-3.775.145-.145.217-.336.217-.526 0-.192-.074-.384-.221-.531-.292-.293-.766-.294-1.056-.004l-2.5 2.499v-10.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v10.693l-2.498-2.498c-.289-.289-.762-.286-1.054.006-.147.147-.221.339-.222.531 0 .19.071.38.215.524z" fill-rule="nonzero"/></svg>
            <span>Download Data</span>
          </a>
          <a className="nav-link" href="">
            <svg className="nav-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.757 20.171c-.791.524-1.739.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.018-.305 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-7.654.829h-12.103v-20h7c1.695 1.942 2.371 3 4 3h11v7.103c-.574-.586-1.25-1.072-2-1.428v-3.675h-9c-2.339 0-3.537-1.388-4.917-3h-4.083v16h8.675c.356.75.842 1.426 1.428 2zm4.897-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
            <span>Explore Data</span>
          </a>
          <a className="nav-link" href="">
            <svg className="nav-icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-8v-1h8v1zm0-4h-8v1h8v-1zm0-3h-8v1h8v-1zm-9 0h-1v1h1v-1zm0 3h-1v1h1v-1zm0 3h-1v1h1v-1z"/></svg>
            <span>Find Resources</span>
          </a>
        </div>
      </div>
      </nav>
      <main>
        <div className="intro">
          <h1 className="title">Transparency Portal</h1>
          <div className="search-bar">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="Search" type="search" className="input"/>
          </div>    
      </div>   
      <div className="info-section">
          <div className="updates">
              <h3>Recent Updates</h3>
              <div className="record">New Update</div>
              <div className="record">New Update</div>
              <div className="record">New Update</div>
              <div className="record">New Update</div>
          </div>          
          <div className="cards">
              <div className="grid">
                <a href="./pages/budget.html" className="card-link">
                  <div className="card two"><div><h3>Budgets and Operations</h3></div></div>
                </a>
                <a href="./pages/finance.html" className="card-link">
                  <div className="card one"><div><h3>Financial Reports</h3></div></div>
                </a>
                <a href="" className="card-link">
                  <div className="card three"><div><h3>Govt. Policies</h3></div></div>
                </a>
                <a href="" className="card-link">
                  <div className="card six"><div><h3>Development Projects</h3></div></div>
                </a>
                <a href="./pages/employment.html" className="card-link">
                  <div className="card five"><div><h3>Employment</h3></div></div>
                </a>
                <a href="" className="card-link">
                  <div className="card four"><div><h3>Public Services</h3></div></div>
                </a>
              </div>
          </div>
      </div>
  </main>
  <footer>

  </footer>
  </div>);
}