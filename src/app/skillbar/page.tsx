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
import { FaReact, FaCircle } from "react-icons/fa";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { SiKotlin, SiWindows11 } from "react-icons/si";
import { useState } from "react";
import { SiAndroidstudio } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";

export default function page() {
  interface Array {
    name: string;
    image: JSX.Element;
    hover: string;
    level?: number;
  }

  const skill: Array[] = [
    {
      name: "HTML",
      image: <DiHtml5 className={style.icon} />,
      hover: "red",
      level: 10,
    },
    {
      name: "CSS",
      image: <BiLogoCss3 className={style.icon} />,
      hover: "blue",
      level: 10,
    },
    {
      name: "JavaScript",
      image: <BiLogoJavascript className={style.icon} />,
      hover: "yellow",
      level: 8,
    },
    {
      name: "TypeScript",
      image: <BiLogoTypescript className={style.icon} />,
      hover: "#2d79c7",
      level: 8,
    },
    {
      name: "Kotlin",
      image: <SiKotlin className={style.icon} />,
      hover: "orange",
      level: 7,
    },
    {
      name: "Python",
      image: <BiLogoPython className={style.icon} />,
      hover: "yellow",
      level: 8,
    },
  ];

  const framework: Array[] = [
    {
      name: "ReactJs",
      image: <FaReact className={style.icon} />,
      hover: "#00b6ff",
      level: 7,
    },
    {
      name: "Next.js",
      image: <TbBrandNextjs className={style.icon} />,
      hover: "purple",
      level: 8,
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
    {
      name: "Windows",
      image: <SiWindows11 className={style.icon} />,
      hover: "#00b6ff",
    },
    {
      name: "Vercel",
      image: <IoLogoVercel className={style.icon} />,
      hover: "#5d5d5d",
    },
  ];

  const [color2, setColor] = useState(null);
  const [color3, setColor1] = useState(null);
  const [color4, setColor2] = useState(null);

  const renderFaCircles = (level, index, color) => {
    const maxLevel = 10;
    const circles = [];

    // Füge zuerst die roten 'FaCircle'-SVGs hinzu.
    for (let i = 0; i < Math.min(level, maxLevel); i++) {
      circles.push(
        <FaCircle
          style={{
            height: "15px",
            width: "15px",
            color: color2 === index ? `${color}` : "#9D9D9D",
            transition: "color 0.3s",
          }}
        />
      );
    }

    // Füge die weißen 'FaCircle'-SVGs hinzu (falls erforderlich).
    for (let i = level; i < maxLevel; i++) {
      circles.push(
        <FaCircle
          style={{
            color: "white",
            height: "15px",
            width: "15px",
          }}
        />
      );
    }

    return circles;
  };

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
              setColor(index);
            }}
            onMouseOut={() => {
              setHoveredElementskill(null);
              setColor(null);
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
              <p
                style={{
                  color: "white",
                  marginTop: "12px",
                  fontSize: "17px",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "3px",
                }}
              >
                Confident Level
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {renderFaCircles(listelement.level, index, listelement.hover)}
              </div>
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
              <p
                style={{
                  color: "white",
                  marginTop: "12px",
                  fontSize: "17px",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "3px",
                }}
              >
                Confident Level
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {renderFaCircles(listelement.level, index, listelement.hover)}
              </div>
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
