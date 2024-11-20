import React from 'react';
import { Link } from 'react-router-dom';

export default function Updates() {
  const articlesData = [
    {
      id: 1,
      title: "Importance of Financial Transparency",
      date: "12 January 2024",
      content: "Financial transparency is essential to ensuring public trust in government systems. Learn more about how transparency can help track spending effectively.",
    },
    {
      id: 2,
      title: "Addressing Corruption",
      date: "15 January 2024",
      content: "Corruption thrives where financial information is hidden. By providing transparency, we can help prevent and address corruption in public spending.",
    },
    {
      id: 3,
      title: "Enhancing Public Trust",
      date: "20 January 2024",
      content: "Advancements in technology have enabled better tracking of public spending, ensuring that taxpayer money is spent effectively and with full accountability.",
    }
   ]
  return (
    <>
  <div className="updates-container">
    <div className="updates-header">
      Recent Updates
    </div>
    <div className="updates">
    {articlesData.map((article) => (
        <div className="update" key={article.id}>
          <div className="update-title">{article.title}</div>
          <div className="update-date">{article.date}</div>
          <div className="update-content">
            {article.content}
            
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
