import React from "react";
import images from "../Assets/images";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="Homepage__cards">
        {images.map((image) => {
          return (
            <div className="Homepage__cards__images">
              <img
                className="Homepage__cards__images__image"
                src={image.img}
                alt={image.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;