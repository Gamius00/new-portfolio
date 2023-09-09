"use client";

import React, { useRef } from "react";
import style from "./projects.module.css";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

interface IProjects {
  name: string;
  image: string;
  height: number;
  width: number;
  link?: string;
  github?: string;
  warn?: string;
}

export default function page() {
  const projects: IProjects[] = [
    {
      name: "Passwort-Generator",
      image: "/passwordg.png",
      height: 200,
      width: 200,
      link: "https://password-generator-gamius.netlify.app/",
    },
    {
      name: "SketchIt",
      image: "/sketchit.png",
      height: 200,
      width: 200,
      link: "https://sketchit1.vercel.app/",
      warn: "Work in progress",
      github: "https://github.com/The-Creative-Programming-Group/sketchit-challenge"
    },
    {
      name: "First Portfolio",
      image: "/portfolio2.png",
      height: 100,
      width: 200,
      link: "https://wonderful-melomakarona-9c27ec.netlify.app/",
      github: "https://github.com/Gamius00/Portfolio",
    },
    {
      name: "Discord Bot",
      image: "/dcbot.png",
      height: 200,
      width: 200,
      github: "https://github.com/Gamius00/discordbot",
    },
    {
      name: "Weather.io",
      image: "/weatherio.png",
      height: 200,
      width: 200,
      link: "https://weather-app-git-frontend-basic-creative-programming-group.vercel.app",
      github:
        "https://github.com/The-Creative-Programming-Group/Weather-App/tree/frontend-basic",
      warn: "Work in progress",
    },
    {
      name: "Delizioso",
      image: "/Delizioso.png",
      height: 200,
      width: 200,
      warn: "Work in progress",
    },
    {
      name: "Kotlin App",
      image: "/kotlin-app.png",
      height: 0,
      width: 200,
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
              {item.link ? (
                  <div className={style.buttonDiv}>
                <button
                  onClick={() => {
                    location.href = item.link;
                  }}
                  className={style.buttonTry}
                >
                  Try
                </button>
                  </div>
              ) : null}
              {item.github ? (
                <div className={style.github}>
                  <button
                    onClick={() => {
                      location.href = item.github;
                    }}
                    className={style.githubButton}
                  >
                    <AiOutlineGithub className={style.githubElement} />
                    <span>Github</span>
                  </button>
                </div>
              ) : null}
              {item.warn ? (
                <div className={style.warn}>
                  <p>
                    {" "}
                    <span>{item.warn} 🚧</span>
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
