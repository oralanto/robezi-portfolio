import React from "react";
import { Link } from "react-router-dom";

import images from "../Assets/images";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="Homepage__cards">
        {images.map((image) => {
          return (
            <div className="Homepage__cards__images" key={image.title}>
              <Link to="/article" state={{ article: image }}>
                <img
                  className="Homepage__cards__images__image"
                  src={image.img}
                  alt={image.description}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
