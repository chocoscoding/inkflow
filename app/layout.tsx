import Providers from "./Providers";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-responsive-modal/styles.css";
import { Inter } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import NextTopLoader from "nextjs-toploader";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inkflow",
  description: "Let's start our journey here",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

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
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
