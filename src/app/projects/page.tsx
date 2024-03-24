"use client";

import React from "react";
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
      name: "Weather.io",
      image: "/weatherPage.png",
      height: 260,
      width: 260,
      link: "https://weatherio1.vercel.app/",
      github:
        "https://github.com/The-Creative-Programming-Group/Weather-App/tree/frontend-basic",
      warn: "Work in progress",
    },
    {
      name: "Chat.io",
      image: "/chatIO.png",
      height: 260,
      width: 260,
      github: "https://github.com/FleetAdmiralJakob/chat-io",
      warn: "Work in progress",
    },
    {
      name: "Calendar",
      image: "/atlassianCal.png",
      height: 260,
      width: 260,
      warn: "Work in progress",
      link: "https://fabiusfeuerwehrmann.atlassian.net/wiki/spaces/~71202026dab641e5834bedbb05927f57ee097b/pages/458753/Calendar-App",
    },
    {
      name: "First Portfolio",
      image: "/oldportfolio.png",
      height: 260,
      width: 260,
      link: "https://wonderful-melomakarona-9c27ec.netlify.app/",
      github: "https://github.com/Gamius00/Portfolio",
    },
    {
      name: "Passwort-Generator",
      image: "/pwgenerator.png",
      height: 260,
      width: 260,
      link: "https://password-generator-gamius.netlify.app/",
    },
    {
      name: "Discord Bot",
      image: "/bot.png",
      height: 260,
      width: 260,
      github: "https://github.com/Gamius00/discordbot",
    },
  ];

  return (
    <>
      <div className={style.content}>
        {" "}
        {projects.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: "#19191F" }}
              className={style.items}
            >
              <p>{item.name}</p>
              <Image
                className={style.Laptop}
                alt={item.name}
                src={"/laptop.svg"}
                width={item.width}
                height={item.height}
              />
              <Image
                className={style.Image}
                alt={item.name}
                src={item.image}
                width={170}
                height={165}
              />
              {item.link ? (
                <div className={style.buttonDiv}>
                  <button
                    onClick={() => {
                      location.href = item.link!;
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
                      location.href = item.github!;
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
