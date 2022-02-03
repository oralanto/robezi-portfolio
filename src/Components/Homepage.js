import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { articles } from "../Data/data";

const Homepage = () => {
  const [articlesData, setArticlesData] = useState();

  useEffect(() => {
    setArticlesData(articles);
  }, []);
  return (
    <div className="Homepage">
      <div className="Homepage__cards">
        {articlesData ? (
          articlesData.map((image) => {
            return (
              <div className="Homepage__cards__images" key={image.title}>
                <Link
                  to="/article"
                  state={{ article: image }}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    className="Homepage__cards__images__image"
                    src={image.img}
                    alt={image.description}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
