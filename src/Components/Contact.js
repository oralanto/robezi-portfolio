import React, { useEffect, useState } from "react";

import emailjs from "emailjs-com";
import apiKeys from "../apikeys";

import { drawing } from "../Data/data";

const Contact = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(drawing);
  }, []);

  const onSubmit = (e) => {
    console.log("onSubmit", e.target);
    e.preventDefault();
    emailjs
      .sendForm(
        apiKeys.SERVICE_ID,
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          alert("Merci pour votre message", result.text);
        },
        (error) => {
          alert("Une erreur c'est produite, veuillez réessayer", error.text);
        }
      );
  };
  return (
    <div className="Contact">
      <p className="Contact__desc">
        Pour toute demande de dessin n'hesitez pas à utiliser mon formulaire de
        contact
      </p>
      <div className="Contact__containerForm">
        {image ? (
          <img
            src={image}
            alt="drawing exemple"
            className="Contact__containerForm__img"
          />
        ) : (
          <p>Loading</p>
        )}

        <form className="Contact__containerForm__form" onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Nom, prénom"
            className="Contact__containerForm__form__input"
          />
          <input
            name="mail"
            type="text"
            placeholder="Email"
            className="Contact__containerForm__form__input"
          />
          <textarea
            name="message"
            type="text"
            placeholder="Veuillez indiquer votre demande.."
            className="Contact__containerForm__form__textarea"
          />
          <button className="Contact__containerForm__form__button">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
