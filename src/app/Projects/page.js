"use client";

import React, { useRef } from "react";
import Navbar from "../Navbar";
import style from "./projects.module.css";
import Image from "next/image";

export default function page() {
  const dialog1 = useRef(null);

  const click = () => {
    if (dialog1.current !== null) {
      dialog1.current.showModal();
    }
  };

  const dialog2 = useRef(null);

  const click2 = () => {
    if (dialog2.current !== null) {
      dialog2.current.showModal();
    }
  };

  const dialog3 = useRef(null);

  const click3 = () => {
    if (dialog3.current !== null) {
      dialog3.current.showModal();
    }
  };

  return (
    <div>
      <div className={style.content}>
        <div onClick={click} className={style.passwordgenerator}>
          <Image
            src="/password-generator.jpg"
            width={220}
            height={100}
            className={style.passwordgeneratorimage}
          />
          <a
            className={style.passwordgeneratorbutton}
            href="https://password-generator-gamius.netlify.app"
          >
            Try
          </a>
          <p className={style.passwordgeneratortext}>Password Generator</p>
        </div>

        <dialog className={style.dialog} ref={dialog1}>
          <div>
            <h1>Password Generator</h1>
            <form method="dialog">
              <button className={style.closedialog}>
                <Image
                  id="menu"
                  src="/cross2.png"
                  width={30}
                  height={30}
                  className={style.menu}
                />
              </button>
            </form>
          </div>
          <h2>Programminglanguages</h2>
        </dialog>

        <div onClick={click2} className={style.portfolio}>
          <Image
            src="/portfolio.png"
            width={220}
            height={100}
            className={style.portfolioimage}
          />
          <a
            className={style.portfoliobutton}
            href="https://portfolio-fabius.netlify.app"
          >
            Try
          </a>
          <p className={style.portfoliotext}> First Portfolio</p>
        </div>
      </div>

      <dialog className={style.dialog} ref={dialog2}>
        <div>
          <h1>First Portfolio</h1>
          <form method="dialog">
            <button className={style.closedialog}>
              <Image
                id="menu"
                src="/cross2.png"
                width={30}
                height={30}
                className={style.menu}
              />
            </button>
          </form>
        </div>
        <h2>Programminglanguages</h2>
        <li className={style.HTML}>
          <span className={style.test}>HTML</span>
        </li>
        <li className={style.CSS}>
          <span className={style.test}>CSS</span>
        </li>
        <li className={style.JavaScript}>
          <span className={style.test}>JavaScript</span>
        </li>
      </dialog>

      <div className={style.content2}>
        <div onClick={click3} className={style.bot}>
          <Image
            src="/discord-bot.png"
            width={220}
            height={100}
            className={style.botimage}
          />
          <p className={style.bottext}> Discord Bot</p>
        </div>

        <dialog className={style.dialog} ref={dialog3}>
          <div>
            <h1>Discord Bot</h1>
            <form method="dialog">
              <button className={style.closedialog}>
                <Image
                  id="menu"
                  src="/cross2.png"
                  width={30}
                  height={30}
                  className={style.menu}
                />
              </button>
            </form>
          </div>
          <h2>Programminglanguages</h2>
          <li className={style.python}>
            <span className={style.test}>Python</span>
          </li>
        </dialog>

        <div className={style.kotlinapp}>
          <Image
            src="/kotlin-app.png"
            width={220}
            height={100}
            className={style.kotlinappimage}
          />
          <p className={style.kotlinapptext}> Kotlin App</p>
        </div>
      </div>
    </div>
  );
}
