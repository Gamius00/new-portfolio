import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "./Navbar";

const inter = Raleway({ subsets: ["latin-ext"], weight: ["500"] });

export const metadata = {
  title: "Portfolio-Fabius",
  description: "The Portfolio of Fabius",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
