"use client";

import React from "react";
import style from "./skillbar.module.css";
import { DiHtml5 } from "react-icons/di";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoPython,
} from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { SiKotlin } from "react-icons/si";
import { useState } from "react";
import { SiAndroidstudio } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

export default function page() {
  interface Array {
    name: string;
    image: JSX.Element;
    hover: string;
  }

  const skill: Array[] = [
    {
      name: "HTML",
      image: <DiHtml5 className={style.icon} />,
      hover: "red",
    },
    {
      name: "CSS",
      image: <BiLogoCss3 className={style.icon} />,
      hover: "blue",
    },
    {
      name: "JavaScript",
      image: <BiLogoJavascript className={style.icon} />,
      hover: "yellow",
    },
    {
      name: "TypeScript",
      image: <BiLogoTypescript className={style.icon} />,
      hover: "blue",
    },
    {
      name: "Kotlin",
      image: <SiKotlin className={style.icon} />,
      hover: "orange",
    },
    {
      name: "Python",
      image: <BiLogoPython className={style.icon} />,
      hover: "yellow",
    },
  ];

  const framework: Array[] = [
    {
      name: "ReactJs",
      image: <FaReact className={style.icon} />,
      hover: "#00b6ff",
    },
    {
      name: "Next.js",
      image: <TbBrandNextjs className={style.icon} />,
      hover: "purple",
    },
  ];

  const tools: Array[] = [
    {
      name: "VS Code",
      image: <TbBrandVscode className={style.icon} />,
      hover: "#00b6ff",
    },
    {
      name: "Github",
      image: <BsGithub className={style.icon} />,
      hover: "gray",
    },
    {
      name: "Android Studio",
      image: <SiAndroidstudio className={style.icon} />,
      hover: "green",
    },
    {
      name: "Figma",
      image: <FiFigma className={style.icon} />,
      hover: "#dbdab7",
    },
  ];

  const [hoveredElementskill, setHoveredElementskill] = useState(null);
  const [hoveredElementframework, setHoveredElementframework] = useState(null);
  const [hoveredElementtools, setHoveredElementtools] = useState(null);

  return (
    <div className={style.all}>
      <div className={style.header}>Programming Languages</div>
      <div style={{}} id="Test" className={style.content}>
        {skill.map((listelement, index) => (
          <div
            className={style.elements}
            style={{
              border:
                hoveredElementskill === index
                  ? `1px solid ${listelement.hover}`
                  : "1px solid white",
              color:
                hoveredElementskill === index
                  ? `${listelement.hover}`
                  : "white",
            }}
            onMouseOver={() => {
              setHoveredElementskill(index);
            }}
            onMouseOut={() => {
              setHoveredElementskill(null);
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span>{listelement.image}</span>
              </div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                {listelement.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={style.header}>Frameworks</div>
      <div id="Test" className={style.content}>
        {framework.map((listelement, index) => (
          <div
            className={style.elements}
            style={{
              border:
                hoveredElementframework === index
                  ? `1px solid ${listelement.hover}`
                  : "1px solid white",
              color:
                hoveredElementframework === index
                  ? `${listelement.hover}`
                  : "white",
            }}
            onMouseOver={() => {
              setHoveredElementframework(index);
            }}
            onMouseOut={() => {
              setHoveredElementframework(null);
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span>{listelement.image}</span>
              </div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                {listelement.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={style.header}>Tools</div>
      <div style={{ minHeight: "37vh" }} id="Test" className={style.content}>
        {tools.map((listelement, index) => (
          <div
            className={style.elements}
            style={{
              border:
                hoveredElementtools === index
                  ? `1px solid ${listelement.hover}`
                  : "1px solid white",
              color:
                hoveredElementtools === index
                  ? `${listelement.hover}`
                  : "white",
            }}
            onMouseOver={() => {
              setHoveredElementtools(index);
            }}
            onMouseOut={() => {
              setHoveredElementtools(null);
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span>{listelement.image}</span>
              </div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                {listelement.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
