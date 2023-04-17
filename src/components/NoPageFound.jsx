import React from "react";
import sadface from "../images/sadface.svg";
import style from "../css/no-page-found.module.css";

const NoPageFound = () => {
  const { container, image, text, font } = style;
  return (
    <div className={`${container}`}>
      <div className={`${image}`}>
        <img src={sadface} alt="sadface" />
      </div>
      <div className={`${text}`}>Sorry couldn't find any result.</div>
    </div>
  );
};

export default NoPageFound;
