"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect, ReactNode } from "react";

export default function Providers({ children }: {children: ReactNode}) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}