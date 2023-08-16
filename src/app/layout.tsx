import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "../components/navbar";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

const inter = Raleway({ subsets: ["latin-ext"], weight: ["500"] });
const date = new Date();

const Year = date.getFullYear();
const Month = date.getMonth() + 1;
const Day = date.getDate();
const age = Month > 1 || (Month === 1 && Day > 2) ? Year - 2009 : Year - 2009 - 1;


export const metadata = {
  title: "Fabius Schurig | Portfolio",
  description:
    "As a " + age + " years old software development intern with a strong understanding of programming and a passion for it, I have expanded my portfolio by developing high-quality applications and successfully solving complex problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Providers>{children}</Providers>
        <Analytics />
        <Link
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
            marginBottom: "20px",
          }}
          href="/impressum"
        >
          Impressum
        </Link>
      </body>
    </html>
  );
}
