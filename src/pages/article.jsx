import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import {articlesData} from '../data/content';

export default function Article(){
  const { id } = useParams();  

  const article = articlesData.find((article) => article.id.toString() === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
    <Header/>
    <div className="article-container">
      <h1 className='article-title'>{article.title}</h1>
      <div className='article-content'>
      <p className="article-description">{article.description}</p>
        {article.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p className='article-para' key={index}>{item.text}</p>;
          } else if (item.type === "image") {
            return <img className='article-img' key={index} src= {item.src} alt={item.alt} />;
          }
          return null;
        })}
      </div>
      </div>
      <Footer/>
    </>
  )
}
