import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <nav>
      <a className="header-logo" href="./">
        <img src="/src/assets/icons/Logo.png" alt="Logo" className="logo-img"/> 
      </a>
    <div className="nav-links">
        <div className="options">
          <a className="nav-link" href="./">
          <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h18v-10h3zm-5 8h-14v-10.26l7-6.912 7 6.99v10.182zm-5-1h-4v-6h4v6z"/>
          </svg>
            <span>Home Page</span>
          </a>
          <a className="nav-link" href="/upload">
          <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z"/>
          </svg>
            <span>Upload Data</span>
          </a>
          <a className="nav-link" href="#">
            <svg className="nav-icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-8v-1h8v1zm0-4h-8v1h8v-1zm0-3h-8v1h8v-1zm-9 0h-1v1h1v-1zm0 3h-1v1h1v-1zm0 3h-1v1h1v-1z"/></svg>
            <span>Find Resources</span>
          </a>
        </div>
        <Link to="/admin" className="ad-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
        </svg>
        </Link>
      </div>
            <input type="checkbox" className="check" id="check"/>
            <label htmlFor="check" className="check-label">
              <span className="bar" id="bar1"></span>
              <span className="bar" id="bar2"></span>
              <span className="bar" id="bar3"></span>
            </label>  
        <div className="mb-options">    
        <Link to="/admin" className="mb-nav-link">
        <svg className="mb-nav-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
        </svg>
        <span>admin account</span>
        </Link>
        <a className="mb-nav-link" href="./">
          <svg className="mb-nav-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h18v-10h3zm-5 8h-14v-10.26l7-6.912 7 6.99v10.182zm-5-1h-4v-6h4v6z"/>
          </svg>
            <span>Home Page</span>
          </a>
          <a className="mb-nav-link" href="/admin">
            <svg className="mb-nav-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M19.757 20.171c-.791.524-1.739.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.018-.305 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-7.654.829h-12.103v-20h7c1.695 1.942 2.371 3 4 3h11v7.103c-.574-.586-1.25-1.072-2-1.428v-3.675h-9c-2.339 0-3.537-1.388-4.917-3h-4.083v16h8.675c.356.75.842 1.426 1.428 2zm4.897-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
            <span>Upload Data</span>
          </a>
          <a className="mb-nav-link" href="#">
            <svg className="mb-nav-icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-8v-1h8v1zm0-4h-8v1h8v-1zm0-3h-8v1h8v-1zm-9 0h-1v1h1v-1zm0 3h-1v1h1v-1zm0 3h-1v1h1v-1z"/></svg>
            <span>Find Resources</span>
          </a>        
        </div>
      </nav>
    </>
  )
}