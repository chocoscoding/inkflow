import Providers from "./Providers";
import "./globals.css";
import "react-responsive-modal/styles.css";
import { Inter } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inkflow",
  description: "Let's start our journey here",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={true}>
        <ToasterProvider />
        <NextTopLoader
          showSpinner={false}
          color="#FF4401"
          speed={300}
          shadow="0 0 10px #FF4401,0 0 5px #FF4401"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
