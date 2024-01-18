"use client";

import Image from "next/image";
import style from "./home.module.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const date = new Date();

  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const Day = date.getDate();
  const age =
    Month > 1 || (Month === 1 && Day > 2) ? Year - 2009 : Year - 2009 - 1;

  return (
    <>
      <div className={style.hello}>
        <div className={style.content}>
          <p className={style.fabiustext}>Hello there 👋</p>
          <p className={style.fabiustext}>I&apos;m Fabius </p>
          <p className={style.intern}>
            <span className={style.internText}>
              Software Engineering Student for
            </span>
          </p>

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
            alt="..."
            src="/web-development.png"
            width={256}
            height={256}
            className={style.picture}
          />
        </div>
      </div>

      <div className={style.Text}>
        <div className={style.TextHead}>
          <h1>About Me</h1>
        </div>
        <div className={style.TextContent}>
          <p>
            My name is Fabius, and I am an enthusiastic{" "}
            <span>{age} years old programmer</span>. Since my early childhood, I
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
      <div className={style.Text}>
        <div className={style.TextHead}>
          <h1>Hobbies</h1>
        </div>
        <div className={style.TextContent}>
          <p>
            Problem-solving and crafting from scratch truly resonate with me.
            Additionally, <br />
            the strategic challenges of chess captivate me. The intricate moves
            and mental agility required make it truly rewarding.
            <br />
            <br />
            Participating in chess tournaments is a must for me, where I compete
            with fellow players, finding enrichment in every match. These
            hobbies, though distinct, align with my love for intellectual
            challenges and creative solutions. Debugging code or planning a
            chess move both offer a truly gratifying sense of accomplishment.
          </p>
        </div>
      </div>
    </>
  );
}
