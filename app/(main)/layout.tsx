import Navbar from "../components/Navbar/Navbar";
import "../globals.css";
import Footer from "@/app/components/Navbar/LNavigation";

export const metadata = {
  title: "Inkflow",
  description: "Pour what you have up there👆",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="bg-secondaryBg-20 dark:bg-dark-20">{children}</div>
      <Footer bottom />
    </div>
  );
}
