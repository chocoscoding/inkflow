"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    toast.dismiss();
  }, [pathname]);

  if (!mounted) null;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
