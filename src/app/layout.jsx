import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Booking | Nails By Sascha Melina ",
  description: "Book tid til din neglebehandling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
