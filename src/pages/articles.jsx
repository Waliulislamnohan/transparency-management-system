import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import {articlesData} from '../data/content';

export default function Articles() {

  return (
    <>
      <Header />
      <div className="blog-container">
        {articlesData.map((article) => (
          <Link to={article.link}>
            <div className="blog-card" key={article.id}>
            <img className="blog-image" src={article.image} alt="Article Thumbnail" />
            <div className="blog-content">
              <h3 className="blog-title">{article.title}</h3>
              <p className="blog-description">{article.description}</p>
              <div className="blog-footer">
                <Link to={article.link} className="blog-read-more">Read More</Link>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
