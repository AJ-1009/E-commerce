import React from "react";
import styles from "./card.module.css";
function Card({ description, imageUrl, title, price,discountPercentage,brand,stock }) {
  return (
    <div>
      <div>{price}</div>
      <div
        className={styles["img"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles["heading"]}>{title}</div>
      <div className={styles["description"]}>{description}</div>
      <div>{discountPercentage}</div>
      <div>{brand}</div>
      {stock < 10?(
        <div>Hurry only {stock} left</div>
      ):(<div></div>)}
    </div>
  );
}

export default Card;
