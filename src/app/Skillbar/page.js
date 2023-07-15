"use client";

import React from "react";
import style from "./skillbar.module.css";

export default function page() {
  const names = ["Python", "HTML", "CSS", "JavaScript", "React", "TypeScript"];

  const BGcolors = [
    "rgb(24, 62, 97)",
    "rgb(223, 35, 35)",
    "Blue ",
    "Yellow",
    "rgb(24, 62, 97)",
    "rgb(24, 62, 97)",
  ];

  const colors = ["white", "black", "white", "black", "white"];

  const images = ["python.png", "html.png", "css.png", "js.png", "react.png"];

  const boxShadows = [
    "0 0 1px 1px #fff, 0 0 5px 2px #00ffff, 0 0 10px 4px #00bfff, 0 0 15px 5px #0080ff, 0 0 20px 7px #0000ff",
    "0 0 1px 1px #fff, 0 0 5px 2px #ffc5c5, 0 0 7px 4px #ff7373, 0 0 9px 5px #ff5f5f, 0 0 11px 7px #ff2121",
    "0 0 1px 1px #fff, 0 0 5px 2px #00ffff, 0 0 7px 4px #00bfff, 0 0 9px 5px #0080ff, 0 0 11px 7px #ffffff",
    "0 0 1px 1px rgb(255, 255, 255), 0 0 5px 2px rgba(233, 218, 14, 0.3), 0 0 7px 4px rgba(233, 218, 14, 0.3), 0 0 9px 5px rgba(233, 218, 14, 0.3), 0 0 11px 7px rgba(233, 218, 14, 0.3)",
    "0 0 1px 1px #fff, 0 0 5px 2px #00ffff, 0 0 10px 4px #00bfff, 0 0 15px 5px #0080ff, 0 0 20px 7px #0000ff",
    "0 0 1px 1px #fff, 0 0 5px 2px #00ffff, 0 0 10px 4px #00bfff, 0 0 15px 5px #0080ff, 0 0 20px 7px #0000ff",
  ];

  return (
    <div id="Test" className={style.content}>
      {names.map((listelement, index) => (
        <div
          style={{
            backgroundColor: BGcolors[index],
            color: colors[index],
            boxShadow: boxShadows[index],
          }}
          className={style.elements}
        >
          <div>
            <img width={100} src={images[index]} />

            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {listelement}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
