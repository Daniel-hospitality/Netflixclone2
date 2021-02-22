import React from "react";
import { css } from "@emotion/css";

const Card = () => {
  const card = css`
    max-width: 500px;
    padding: 60px 80px 60px 20px;
    background-color: #fdfdfd;
    h1 {
      font-family: "Abril Fatface", cursive;
      font-weight: 400;
      font-size: 36px;
      margin-bottom: 10px;
      color: #424246;
    }
    p {
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 20px;
      color: #424246;
    }
  `;

  const cardButtons = css`
    display: flex;
    flex-wrap: wrap;

    div {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 12px;
      padding: 10px 30px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
  `;

  const blackButton = css`
    color: #fdfdfd;
    background-color: #424246;
  `;

  const blueButton = css`
    color: #fdfdfd;
    background-color: #1d499b;
  `;

  const yellowButton = css`
    color: #424246;
    background-color: #f9d648;
  `;

  return (
    <div className={card} >
      <h1>Your Life is Your Message</h1>
      <p className={cardButtons}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed
        elementum egestas blandit. Proin augue lacus, phasellus vel lorem risus.
      </p>
      <div className={cardButtons}>
        <div className={blackButton}>Black</div>
        <div className={blackButton}>Black</div>
        <div className={blackButton}>Black</div>
        <div className={blueButton}>Blue</div>
        <div className={yellowButton}>Yellow</div>
      </div>
    </div>
  );
};

export default Card;
