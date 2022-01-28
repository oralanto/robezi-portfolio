import React from "react";
import { Link } from "react-router-dom";

import { Facebook, Instagram } from "react-feather";
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
          <div className="About__container__desc__socialMedia">
            <a
              href="https://www.facebook.com/tsetse.robezi.9"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="About__container__desc__socialMedia__link"
            >
              <Facebook size={50} />
            </a>
            <a
              href="https://www.instagram.com/robezi210_/?hl=fr"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="About__container__desc__socialMedia__link"
            >
              <Instagram size={50} />
            </a>
          </div>
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
