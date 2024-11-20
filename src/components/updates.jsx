import React from 'react';
import { Link } from 'react-router-dom';
import {articlesData} from '../data/content'

export default function Updates() {
  
  return (
    <>
  <div className="updates-container">
    <div className="updates-header">Latest Insights</div>
    <div className="updates">
    {articlesData.slice(0, 3).map((article) => (
        <div className="update" key={article.id}>
          <Link to={`/articles/${article.id}`}><div className="update-title">{article.title}</div></Link>
          <div className="update-date">{article.date}</div>
          <div className="update-content">
            {article.description}            
          </div>
          <Link to={`/articles/${article.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
    <div className="view-blogs">
      <a href="/articles" className="view-blogs-link">See all</a>
    </div>
  </div>
</>

  )
}
