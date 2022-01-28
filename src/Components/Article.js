import React from "react";
import { useLocation, Link } from "react-router-dom";

import { ArrowLeftCircle } from "react-feather";

const Article = () => {
  const location = useLocation();
  const { article } = location.state;
  return (
    <div className="Article">
      <Link
        className="Article__container__button"
        to="/"
        style={{ textDecoration: "none" }}
      >
        <ArrowLeftCircle size={48} />
      </Link>
      <div className="Article__container">
        <div className="Article__container__desc">
          <h1 className="Article__container__desc__title">{article.title}</h1>
          <p className="Article__container__desc__text">
            {article.description}
          </p>
        </div>
        <img
          className="Article__container__img"
          src={article.img}
          alt={article.description}
        />
      </div>
    </div>
  );
};

export default Article;
