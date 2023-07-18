"use client";

import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [imageSrc, setImageSrc] = useState("/menu3.png");

  useEffect(() => {
    function handleScroll() {
      const menudiv = document.getElementById("menudiv");
      let windowY = window.scrollY || window.pageYOffset;
      console.log(windowY);
      const views = document.getElementById("views");

      if (imageSrc == "/cross2.png") {
        menudiv.style.backgroundColor = "transparent";
        menudiv.style.boxShadow = "none";
        menudiv.style.height = "70px";
        menudiv.style.width = "70px";
        setImageSrc("/menu3.png");
      }

      if (windowY > 0) {
        menudiv.style.backgroundColor = "#5e5e5e";
        menudiv.style.boxShadow =
          "0 0 2px white, 0 0 4px white, 0 0 6px white, 0 0 4px white, 0 0 8px white, 0 0 10px white";
      } else if (windowY === 0) {
        if (imageSrc == "/menu3.png") {
          menudiv.style.backgroundColor = "transparent";
          menudiv.style.boxShadow = "none";
        }
      }

      views.style.display = "none";
    }

    window.onscroll = handleScroll;
  });

  const handleclick = () => {
    let windowY = window.scrollY || window.pageYOffset;
    const menudiv = document.getElementById("menudiv");
    const homebutton = document.getElementById("homebutton");
    const projectbutton = document.getElementById("projectbutton");
    const contactbutton = document.getElementById("contactbutton");
    const skillbarbutton = document.getElementById("skillbarbutton");
    const views = document.getElementById("views");
    if (imageSrc === "/menu3.png") {
      setImageSrc("/cross2.png");
      if (windowY == 0) {
        menudiv.style.backgroundColor = "#5e5e5e";
        menudiv.style.boxShadow =
          "0 0 2px white, 0 0 4px white, 0 0 6px white, 0 0 4px white, 0 0 8px white, 0 0 10px white";
      }
      menudiv.style.height = "360px";
      menudiv.style.width = "95%";
      homebutton.style.display = "flex";
      projectbutton.style.display = "flex";
      contactbutton.style.display = "flex";
      skillbarbutton.style.display = "flex";
      views.style.display = "flex";
    } else {
      setImageSrc("/menu3.png");
      if (windowY == 0) {
        menudiv.style.backgroundColor = "transparent";
        menudiv.style.boxShadow = "none";
      }
      menudiv.style.height = "70px";
      menudiv.style.width = "70px";
      homebutton.style.display = "none";
      projectbutton.style.display = "none";
      contactbutton.style.display = "none";
      skillbarbutton.style.display = "none";
      views.style.display = "none";
    }
  };

  return (
    <>
      <div className={style.navbar}>
        <Link className={style.navelement} href="/">
          <div>
            <Image
              src="/home1.png"
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
              width={30}
              height={7}
              className={style.img}
            />{" "}
            <p>Skillbar</p>
          </div>
        </Link>
        <Link className={style.navelement} href="/contact">
          <div>
            <Image
              src="/contact1.png"
              width={30}
              height={7}
              className={style.img}
            />{" "}
            <p>Contact</p>
          </div>
        </Link>
        <Link
          className={style.views}
          href="https://hits.sh/portfolio-fabius.vercel.app/"
        >
          <img
            alt="Hits"
            src="https://hits.sh/portfolio-fabius.vercel.app.svg?style=for-the-badge&label=Views&extraCount=5&color=ff0000&labelColor=19191F"
          />
        </Link>
      </div>
      <div className={style.navcenter}>
        <div id="menudiv" className={style.menudiv}>
          <Image
            onClick={handleclick}
            id="menu"
            src={imageSrc}
            width={40}
            height={40}
            className={style.menu}
          />
          <a id="homebutton" className={style.homebutton} href="/">
            {" "}
            Home
          </a>
          <a
            id="projectbutton"
            className={style.projectbutton}
            href="/projects"
          >
            Projects
          </a>
          <a
            id="skillbarbutton"
            className={style.skillbarbutton}
            href="/skillbar"
          >
            Skillbar
          </a>
          <a id="contactbutton" className={style.contactbutton} href="/contact">
            Contact
          </a>
          <a
            id="views"
            className={style.views2}
            href="https://hits.sh/portfolio-fabius.vercel.app/"
          >
            <img
              alt="Hits"
              src="https://hits.sh/portfolio-fabius.vercel.app.svg?style=for-the-badge&label=Views&extraCount=5&color=858585"
            />
          </a>
        </div>
      </div>
    </>
  );
}
