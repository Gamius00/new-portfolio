import React from "react";
import style from "./impressum.module.css";

export default function Impressum() {
  return (
    <div className={style.content}>
      <div>
        <h1>Impressum</h1>
        <p>
          Fabius Schurig <br /> GescheaftlichGamius@gmx.de
        </p>

        <div className={style.haftung}>
          <h1> Haftung </h1>
          <p>
            Die Inhalte dieser Website wurden sorgfältig geprüft und erstellt,{" "}
            <br />
            jedoch übernehmen wir keine Gewähr für die Richtigkeit, <br />
            Vollständigkeit und Aktualität der bereitgestellten Informationen.{" "}
            <br />
            Wir haften nicht für Schäden oder Verluste, die durch die Nutzung{" "}
            <br />
            dieser Website entstehen. Für den Inhalt verlinkter Seiten sind{" "}
            <br />
            ausschließlich deren Betreiber verantwortlich. Jegliche Haftung für{" "}
            <br />
            externe Inhalte wird hiermit ausdrücklich ausgeschlossen.
          </p>
        </div>
      </div>
    </div>
  );
}
