"use client";

import React from "react";
import style from "./projects.module.css";
import Image from "next/image";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiAtlassian } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoCss3, IoLogoHtml5, IoLogoPython } from "react-icons/io";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { BiCodeBlock } from "react-icons/bi";

interface IProjects {
  name: string;
  image: string;
  height: number;
  description: string;
  width: number;
  link?: string;
  github?: string;
  warn?: string;
  programmingLanguages: string[];
}

interface IProgrammingLanguages {
  name: string;
  icon: React.ElementType;
}

export default function page() {
  const languageIconMap: IProgrammingLanguages[] = [
    { name: "TypeScript", icon: BiLogoTypescript },
    { name: "JavaScript", icon: RiJavascriptFill },
    { name: "React", icon: IoLogoReact },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "CSS", icon: IoLogoCss3 },
    { name: "HTML", icon: IoLogoHtml5 },
    { name: "Python", icon: IoLogoPython },
    { name: "Forge", icon: SiAtlassian },
  ];

  const projects: IProjects[] = [
    {
      name: "Weather.io",
      image: "/weatherPage.png",
      height: 260,
      width: 260,
      description:
        "You can see the weather of your location and search for other locations. You can also see the weather of the next 9 days and many other nerdy stuff (e.g. air quality).",
      link: "https://weatherio1.vercel.app/",
      github: "https://github.com/The-Creative-Programming-Group/Weather-App",
      warn: "Work in progress",
      programmingLanguages: ["React", "TypeScript", "TailwindCSS"],
    },
    {
      name: "Chat.io",
      image: "/chatIO.png",
      height: 260,
      width: 260,
      description:
        "You can chat with other people in real-time and create Todos for you and your Friends. This is a Post Quantum Secured Chat Application.",
      link: "https://chat-io.roessner.tech/",
      github: "https://github.com/FleetAdmiralJakob/chat-io",
      warn: "Work in progress",
      programmingLanguages: ["React", "TypeScript", "TailwindCSS"],
    },
    {
      name: "Calendar",
      image: "/atlassianCal.png",
      height: 260,
      width: 260,
      description:
        "A calendar created by Atlassian Forge. You can create events and see them in a list (yearly/monthly).",
      warn: "Work in progress",
      link: "https://schurig-fabius.atlassian.net/wiki/spaces/~71202017488de92df54daebe5987bd83311286/pages/164172/Calender",
      programmingLanguages: ["React", "JavaScript", "CSS", "Forge"],
    },
    {
      name: "First Portfolio",
      image: "/oldportfolio.png",
      height: 260,
      width: 260,
      description:
        "My first portfolio. It was a simple one, but I learned a lot from it.",
      link: "https://wonderful-melomakarona-9c27ec.netlify.app/",
      github: "https://github.com/Gamius00/Portfolio",
      programmingLanguages: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Passwort-Generator",
      image: "/pwgenerator.png",
      height: 260,
      width: 260,
      description:
        "A simple password generator. You can choose the length of the password and if you want to include numbers and special characters.",
      link: "https://password-generator-gamius.netlify.app/",
      programmingLanguages: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Discord Bot",
      image: "/bot.png",
      height: 260,
      width: 260,
      description:
        "A Discord Bot that can do many things. For example, it can create polls, you can report user on the server, and many more.",
      github: "https://github.com/Gamius00/discordbot",
      programmingLanguages: ["Python"],
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
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  {
                    <div className={style.buttonDiv}>
                      <button className={style.infoButton}>
                        <HiMiniInformationCircle
                          className={style.githubElement}
                        />
                        <span>Info</span>
                      </button>
                    </div>
                  }
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className={"flex font-medium"}>
                      <HiMiniInformationCircle
                        className={style.githubElement}
                      />
                      <p>{item.name}</p>
                    </AlertDialogTitle>
                    <AlertDialogDescription className="pt-3">
                      <p className="text-white">{item.description}</p>
                    </AlertDialogDescription>
                    <AlertDialogDescription className="pb-4 pt-5">
                      <AlertDialogTitle
                        className={"flex font-medium text-white"}
                      >
                        <BiCodeBlock className={style.githubElement} />
                        <p>Programming Languages</p>
                      </AlertDialogTitle>
                      <div className="flex flex-wrap">
                        {item.programmingLanguages.map((language, index) => {
                          return (
                            <div
                              key={index}
                              className={style.programmingLanguages}
                            >
                              {languageIconMap.map((icon, index) => {
                                if (icon.name === language) {
                                  return (
                                    <icon.icon
                                      key={index}
                                      className={
                                        style.programmingLanguagesElement
                                      }
                                    />
                                  );
                                }
                              })}

                              <p>{language}</p>
                            </div>
                          );
                        })}
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Close</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
