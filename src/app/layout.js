import { Inter } from "next/font/google";
import Navbar from "@/app/_components/Navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Онлайн-кинотеатр",
  description: "Тестовое задание от Валуева Михаила",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <main className={'content'}>
          {children}
      </main>
      </body>
      </html>
  );
}
