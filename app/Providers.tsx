"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import { SessionProvider } from "next-auth/react";
export default function Providers({ children, session }: { children: ReactNode; session: any }) {
  const [mounted, setMounted] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    toast.dismiss();
  }, [pathname]);

  if (!mounted) null;

  const hider = () => {
    if (process.env.NODE_ENV === "production") return true;
    return false;
  };
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class" enableSystem={false} forcedTheme="dark">
          <SkeletonTheme
            baseColor="#2C353D"
            highlightColor="#1E252B">
            {children}
          </SkeletonTheme>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
