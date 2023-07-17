"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import style from "./home.module.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className={style.hello}>
        <div className={style.content}>
          <p className={style.fabiustext}>Hello there 👋</p>
          <p className={style.fabiustext}>I'm Fabius </p>
          <p className={style.intern}>Software Engineering Student for</p>

          <TypeAnimation
            className={style.portfoliotext}
            sequence={[
              "Web Development",
              2000,
              "Mobile Development",
              2000,
              "Discord Bot Development",
              2000,
            ]}
            repeat={Infinity}
            speed={3}
          />
        </div>

        <div className={style.picturecontainer}>
          <Image
            src="/programmerpic.png"
            width={180}
            height={180}
            className={style.picture}
          />
        </div>
      </div>

      <div className={style.About}>
        <div className={style.AboutHead}>
          <h1>About Me</h1>
        </div>
        <div className={style.AboutContent}>
          <p>
            My name is Fabius, and I am an enthusiastic{" "}
            <span>14 years old programmer</span>. Since my early childhood, I
            have been fascinated by the world of technology, and I have always
            been interested in computers and how they work. <br />
            <br /> This passion eventually led me to programming, where I can
            fully express my creativity and <span>analytical skills.</span>
            <br />
            In my free time, I am devoted to programming. <br />
            <br /> I find it incredibly exciting how just a few lines of code
            can solve complex problems. By experimenting with different
            programming languages and development environments, I have
            continuously improved my skills and I am always eager{" "}
            <span>to learn something new.</span> I enjoy finding creative
            solutions and developing programs that can help people.
          </p>
        </div>
      </div>
    </>
  );
}
