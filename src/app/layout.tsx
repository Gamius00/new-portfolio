import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "../components/navbar";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi"

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
            <BiLinkExternal style={{ marginTop: "4px" , marginRight: "4px"}}/>
          Impressum
        </Link>
      </body>
    </html>
  );
}
