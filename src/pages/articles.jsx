import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import blog from "../assets/img/blog-img.jpg";

export default function Articles() {

  // Array of article data
  const articles = [
    {
      id: 1,
      title: "The Importance of Financial Transparency",
      excerpt: "Financial transparency is key to ensuring trust in government systems. In this article, we discuss why it matters and how our solution can help.",
      category: "Transparency",
      image: blog,
      link: "/articles/1"
    },
    {
      id: 2,
      title: "Addressing Corruption through Transparency",
      excerpt: "Corruption often thrives where financial information is hidden. We explore how transparency helps fight corruption.",
      category: "Corruption",
      image: blog,
      link: "/articles/2"
    },
    {
      id: 3,
      title: "Improving Public Accountability with Technology",
      excerpt: "Technology plays a significant role in improving transparency and accountability in public spending.",
      category: "Technology",
      image: blog,
      link: "/articles/3"
    }
  ];

  return (
    <>
      <Header />
      <div className="blog-container">
        {articles.map((article) => (
          <div className="blog-card" key={article.id}>
            <img className="blog-image" src={article.image} alt="Article Thumbnail" />
            <div className="blog-content">
              <h3 className="blog-title">{article.title}</h3>
              <p className="blog-excerpt">{article.excerpt}</p>
              <div className="blog-footer">
                <Link to={article.link} className="blog-read-more">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
