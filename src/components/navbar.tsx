"use client";

import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome, AiOutlineGithub } from "react-icons/ai";
import { BsDiscord, BsFillPersonFill, BsLinkedin } from "react-icons/bs";
import { HiFolderOpen, HiMail, HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  interface ArrayInterface {
    title: string;
    icon: JSX.Element;
    link: string;
  }

  const [navBarclicked, setnavBarclicked] = useState(false);

  useEffect(() => {
    const Items = document.getElementById("Items");
    if (Items) {
      if (!navBarclicked) {
        Items.style.height = "0px";
      } else {
        Items.style.height = "264px";
      }
    }
  });

  const pages: ArrayInterface[] = [
    { title: "Home", icon: <AiFillHome />, link: "/" },
    { title: "Projects", icon: <HiFolderOpen />, link: "/projects" },
    { title: "Skills", icon: <BsFillPersonFill />, link: "/skillbar" },
    { title: "Contact", icon: <HiMail />, link: "/contact" },
  ];

  const navBarclick = () => {
    if (!navBarclicked) {
      setnavBarclicked(true);
    } else {
      setnavBarclicked(false);
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
            src="https://hits.sh/www.schurig.tech.svg?style=for-the-badge&label=views&extraCount=1000&color=a81a1a&labelColor=1b1b1b"
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

      <div className={style.OverLay}>
        <div className={style.IconDiv}>
          <h1>FS</h1>
          <span onClick={navBarclick}>
            {navBarclicked ? (
              <ImCross className={style.Cross} />
            ) : (
              <HiMenuAlt3 className={style.Icon} />
            )}
          </span>
        </div>
        <div id="Items" className={style.menu}>
          <div>
            {pages.map((item) => {
              return (
                <div
                  key={item.title}
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
