import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "../components/navbar";
import Providers from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
