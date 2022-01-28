import React from "react";

import { profilPicture } from "../Assets/images";

const About = () => {
  return (
    <div className="About">
      <div className="About__container">
        <div className="About__container__desc">
          <h1 className="About__container__desc__title">Robezi</h1>
          <p className="About__container__desc__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            beatae fugit eos necessitatibus accusantium id nobis incidunt amet
            quam officiis. Quidem itaque similique ad quae ipsa repudiandae
            obcaecati ipsum quos?
          </p>
        </div>
        <img
          src={profilPicture}
          alt="Robezi Tsétsé Ralantoarison"
          className="About__container__img"
        />
      </div>
    </div>
  );
};

export default About;
