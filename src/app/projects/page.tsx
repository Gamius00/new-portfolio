"use client";

import React, { useRef } from "react";
import style from "./projects.module.css";
import Image from "next/image";

export default function page() {
  const projects = [
    {
      name: "Passwort-Generator",
      image: "/password-generator.jpg",
      height: 200,
      width: 200,
      try: true,
      link: "https://password-generator-gamius.netlify.app/",
    },
    {
      name: "First Portfolio",
      image: "/portfolio.png",
      height: 100,
      width: 200,
      try: true,
      link: "https://wonderful-melomakarona-9c27ec.netlify.app/",
    },
    {
      name: "Discord Bot",
      image: "/discord-bot.png",
      height: 200,
      width: 200,
      try: false,
    },
    {
      name: "Weather Io",
      image: "/weather-io.png",
      height: 200,
      width: 200,
      try: false,
    },
    {
      name: "Delizioso",
      image: "/Delizioso.png",
      height: 200,
      width: 200,
      try: true,
      link: "",
    },
    {
      name: "Kotlin App",
      image: "/kotlin-app.png",
      height: 0,
      width: 200,
      try: false,
    },
  ];

  return (
    <>
      <div className={style.content}>
        {" "}
        {projects.map((item) => {
          return (
            <div style={{ backgroundColor: "#19191F" }} className={style.items}>
              <p>{item.name}</p>
              <Image
                className={style.Image}
                alt={item.name}
                src={item.image}
                width={item.width}
                height={item.height}
              />
              {item.try ? (
                <button
                  onClick={() => {
                    location.href = item.link;
                  }}
                  className={style.buttonTry}
                >
                  Try
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
