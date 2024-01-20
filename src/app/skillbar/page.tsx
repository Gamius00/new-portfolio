"use client";

import React, { useState } from "react";
import style from "./skillbar.module.css";
import { DiHtml5 } from "react-icons/di";
import Link from "next/link";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaCircle, FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import {
  SiAndroidstudio,
  SiIntellijidea,
  SiKotlin,
  SiPycharm,
  SiTailwindcss,
  SiWindows11,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";
import Image from "next/image";

export default function SkillBarPage() {
  interface Array {
    name: string;
    image: JSX.Element;
    hover: string;
    level?: number;
  }

  interface Experience {
    name: string;
    image: string;
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
      level: 7,
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
      level: 8,
    },
    {
      name: "Next.js",
      image: <TbBrandNextjs className={style.icon} />,
      hover: "purple",
      level: 9,
    },
    {
      name: "Tailwind CSS",
      image: <SiTailwindcss className={style.icon} />,
      hover: "#00b6ff",
      level: 6,
    },
  ];

  const tools: Array[] = [
    {
      name: "VS Code",
      image: <TbBrandVscode className={style.icon} />,
      hover: "#00b6ff",
      level: 10,
    },
    {
      name: "Github",
      image: <BsGithub className={style.icon} />,
      hover: "gray",
      level: 8,
    },
    {
      name: "Android Studio",
      image: <SiAndroidstudio className={style.icon} />,
      hover: "green",
      level: 8,
    },
    {
      name: "Figma",
      image: <FiFigma className={style.icon} />,
      hover: "#DDDA83",
      level: 8,
    },
    {
      name: "Windows",
      image: <SiWindows11 className={style.icon} />,
      hover: "#00b6ff",
      level: 9,
    },
    {
      name: "Vercel",
      image: <IoLogoVercel className={style.icon} />,
      hover: "#5d5d5d",
      level: 7,
    },
    {
      name: "PyCharm",
      image: <SiPycharm className={style.icon} />,
      hover: "#a9da47",
      level: 9,
    },
    {
      name: "IntelliJ",
      image: <SiIntellijidea className={style.icon} />,
      hover: "#f94600",
      level: 7,
    },
  ];

  const experience: Experience[] = [
    {
      name: "Communardo Software GmbH",
      image: "/communardo.jpg",
    },
    {
      name: "Telekom MMS ",
      image: "/Telekom.png",
    },
  ];

  const [color2, setColor] = useState<number | null>();
  const [color3, setColor1] = useState<number | null>();
  const [color4, setColor2] = useState<number | null>();

  const renderFaCircles = (level: number, index: number, color: string) => {
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
        />,
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
        />,
      );
    }

    return circles;
  };

  const renderFaCircles2 = (level: number, index: number, color: string) => {
    const maxLevel = 10;
    const circles = [];

    // Füge zuerst die roten 'FaCircle'-SVGs hinzu.
    for (let i = 0; i < Math.min(level, maxLevel); i++) {
      circles.push(
        <FaCircle
          style={{
            height: "15px",
            width: "15px",
            color: color3 === index ? `${color}` : "#9D9D9D",
            transition: "color 0.3s",
          }}
        />,
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
        />,
      );
    }

    return circles;
  };

  const renderFaCircles3 = (level: number, index: number, color: string) => {
    const maxLevel = 10;
    const circles = [];

    // Füge zuerst die roten 'FaCircle'-SVGs hinzu.
    for (let i = 0; i < Math.min(level, maxLevel); i++) {
      circles.push(
        <FaCircle
          style={{
            height: "15px",
            width: "15px",
            color: color4 === index ? `${color}` : "#9D9D9D",
            transition: "color 0.3s",
          }}
        />,
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
        />,
      );
    }

    return circles;
  };

  const [hoveredElementskill, setHoveredElementskill] = useState<
    number | null
  >();
  const [hoveredElementframework, setHoveredElementframework] = useState<
    number | null
  >();
  const [hoveredElementtools, setHoveredElementtools] = useState<
    number | null
  >();

  return (
    <div className={style.all}>
      <div className={style.header}>Programming Languages</div>
      <div style={{}} id="Test" className={style.content}>
        {skill.map((listelement, index) => (
          <div
            key={index}
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
                Confidence Level
              </p>
              {listelement.level && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {renderFaCircles(listelement.level, index, listelement.hover)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={style.header}>Frameworks</div>
      <div id="Test" className={style.content}>
        {framework.map((listelement, index) => (
          <div
            key={index}
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
              setColor1(index);
            }}
            onMouseOut={() => {
              setHoveredElementframework(null);
              setColor1(null);
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
                Confidence Level
              </p>
              {listelement.level && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {renderFaCircles2(
                    listelement.level,
                    index,
                    listelement.hover,
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={style.header}>Tools</div>
      <div style={{}} id="Test" className={style.content}>
        {tools.map((listelement, index) => (
          <div
            key={index}
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
              setColor2(index);
            }}
            onMouseOut={() => {
              setHoveredElementtools(null);
              setColor2(null);
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
                Confidence Level
              </p>
              {listelement.level && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {renderFaCircles3(
                    listelement.level,
                    index,
                    listelement.hover,
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "33vh",
          marginTop: "50px",
        }}
      >
        <div style={{ display: "block" }}>
          <div
            className={style.Text}
            style={{ display: "block", marginBottom: "50px" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 style={{ fontSize: "27px" }}>Experience</h1>
            </div>
            {experience.map((object, index) => (
              <div className={style.Experience} key={index}>
                <Image
                  style={{ borderRadius: "20px" }}
                  src={object.image}
                  width={36}
                  height={36}
                  alt={"Test"}
                ></Image>
                <p>{object.name}</p>
              </div>
            ))}
          </div>
          <div className={style.Text} style={{ display: "block" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 style={{ fontSize: "27px" }}>Programming Career</h1>
            </div>
            <p
              style={{
                fontSize: "18px",
                margin: "20px",
                marginRight: "30px",
                marginLeft: "30px",
              }}
            >
              Welcome to my Skills page, where I proudly present you my
              programming skills. <br /> These skill assessments were not
              arbitrarily selected <br />
              rather, they have been carefully evaluated by Jakob Rössner,{" "}
              <br /> an programmer, who accompanied me on my Programmer Career{" "}
              <br />
              for several months. You can find Jakob&apos;s portfolio at <br />
              <Link
                href="https://www.roessner.tech"
                style={{ color: "#a81a1a", textDecoration: "underline" }}
              >
                https://www.roessner.tech
              </Link>
              . While these evaluations offer a valuable <br />
              orientation, please keep in mind that they serve as a rough gauge
              of my abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
