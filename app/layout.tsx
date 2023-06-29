import Providers from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inkflow",
  description: "Let's start our journey here",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToasterProvider/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
