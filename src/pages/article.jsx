import React from 'react';
import { useParams } from 'react-router-dom';

export default function Article(){
  const { id } = useParams();

  const articlesData = [
    {
      id: 1,
      title: "The Importance of Financial Transparency",
      content: [
        {
          type: "paragraph",
          text: "Financial transparency is essential to ensuring public trust in government systems."
        },
        {
          type: "paragraph",
          text: "It allows citizens to understand how their tax money is spent and to ensure it's used for the public good."
        },
        {
          type: "image",
          src: "/images/financial-transparency.jpg",
          alt: "A visual representation of transparency"
        },
        {
          type: "paragraph",
          text: "Our solution helps track spending in real time, making it easier to monitor and control financial flows."
        }
      ]
    },
    {
      id: 2,
      title: "Addressing Corruption through Transparency",
      content: [
        {
          type: "paragraph",
          text: "Corruption often thrives in environments where financial information is hidden or manipulated."
        },
        {
          type: "image",
          src: "/images/corruption.jpg",
          alt: "A visual representation of corruption"
        },
        {
          type: "paragraph",
          text: "By providing real-time visibility into public finances, transparency can deter corrupt activities."
        }
      ]
    },
    {
      id: 3,
      title: "Improving Public Accountability with Technology",
      content: [
        {
          type: "paragraph",
          text: "Advancements in technology have enabled better tracking of public spending, ensuring that taxpayer money is spent effectively and with full accountability."
        },
        {
          type: "image",
          src: "/images/technology.jpg",
          alt: "A visual representation of technology in accountability"
        },
        {
          type: "paragraph",
          text: "With the help of modern data analytics tools, governments can provide real-time financial reports to the public, enhancing trust and reducing the chances of corruption."
        }
      ]
    }
  ];
  

  const article = articlesData.find((article) => article.id.toString() === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <div>
        {article.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.text}</p>;
          } else if (item.type === "image") {
            return <img key={index} src={item.src} alt={item.alt} />;
          }
          return null;
        })}
      </div>
    </div>
  )
}
