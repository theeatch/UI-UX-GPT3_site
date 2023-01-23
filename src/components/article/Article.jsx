import React from "react";
import "./article.css";

const Article = ({ image, date, title }) => {
  return (
    <div className="gpt3__article-container">
      <div className="gpt3__article ">
        <div className="gpt3__article-img">
          <img src={image} alt="blogimg" />
        </div>
        <div className="gpt3__article-info">
          <h1>{title}</h1>
          <p>{date}</p>

          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
