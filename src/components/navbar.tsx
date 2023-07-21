"use client";

import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub, AiFillHome } from "react-icons/ai";
import { BsLinkedin, BsDiscord, BsFillPersonFill } from "react-icons/bs";
import { HiMenuAlt3, HiFolderOpen, HiMail } from "react-icons/hi";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  interface ArrayInterface {
    title: string;
    icon: any;
    link: string;
  }

  const [IconBool, setIconBool] = useState(false);
  const [Icon, setIcon] = useState(<HiMenuAlt3 className={style.Icon} />);
  const [Height, setHeight] = useState("0px");
  const [Border, setBorder] = useState("1px solid #4b4b4b");
  useEffect(() => {
    const Items = document.getElementById("Items");
    const overlay = document.getElementById("overlay");
    if (Items) {
      Items.style.height = Height;
      overlay.style.borderBottom = Border;
    }
  }, [Height]);
  const pages: ArrayInterface[] = [
    { title: "Home", icon: <AiFillHome />, link: "/" },
    { title: "Projects", icon: <HiFolderOpen />, link: "/projects" },
    { title: "Skills", icon: <BsFillPersonFill />, link: "/skillbar" },
    { title: "Contact", icon: <HiMail />, link: "/contact" },
  ];

  const navBarclick = () => {
    if (!IconBool) {
      setIcon(<ImCross className={style.Cross} />);
      setIconBool(true);
      setHeight("264px");
      setBorder("1px solid white");
    } else {
      setIcon(<HiMenuAlt3 className={style.Icon} />);
      setIconBool(false);
      setHeight("0px");
      setBorder("1px solid #4b4b4b");
    }
  };

  return (
    <>
      <div className={style.navbar}>
        <Link className={style.navelement} href="/">
          <div>
            <Image
              src="/home1.png"
              alt="..."
              width={30}
              height={7}
              className={style.img}
            />{" "}
            <p>Home</p>
          </div>
        </Link>
        <Link className={style.navelement} href="/projects">
          <div>
            <Image
              alt="..."
              src="/edit.png"
              width={30}
              height={7}
              className={style.img}
            />{" "}
            <p>Projects</p>
          </div>
        </Link>
        <Link className={style.navelement} href="/skillbar">
          <div>
            <Image
              src="/user1.png"
              alt="..."
              width={30}
              height={7}
              className={style.img}
            />{" "}
            <p>Skills</p>
          </div>
        </Link>
        <Link className={style.navelement} href="/contact">
          <div>
            <Image
              src="/contact1.png"
              alt="..."
              width={30}
              height={7}
              className={style.img}
            />{" "}
            <p>Contact</p>
          </div>
        </Link>
        <Link className={style.views} href={""}>
          <img
            alt="Hits"
            src="https://hits.sh/portfolio-fabius.vercel.app.svg?style=for-the-badge&label=Views&extraCount=5&color=ff0000&labelColor=19191F"
          />
        </Link>
        <AiOutlineGithub
          style={{ height: "40px", width: "40px" }}
          onClick={() => {
            location.href = "https://github.com/Gamius00";
          }}
          className={style.icons}
        />
        <BsLinkedin
          style={{ height: "35px", width: "35px", marginTop: "7px" }}
          className={style.icons}
          onClick={() => {
            location.href =
              "https://www.linkedin.com/in/fabius-schurig-80713b284/";
          }}
        />
        <BsDiscord
          style={{ height: "35px", width: "35px", marginTop: "7px" }}
          className={style.icons}
          onClick={() => {
            location.href = "https://discord.gg/HanXgrKr8J";
          }}
        />
      </div>

      <div className={style.OverLay} id="overlay">
        <div className={style.IconDiv}>
          <h1>FS</h1>
          <span onClick={navBarclick}>{Icon}</span>
        </div>
        <div id="Items" className={style.menu}>
          <div>
            {pages.map((item) => {
              return (
                <div
                  onClick={() => {
                    location.href = item.link;
                  }}
                  className={style.all}
                >
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ marginTop: "4px", marginRight: "5px" }}>
                      {item.icon}
                    </span>{" "}
                    <span>{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
