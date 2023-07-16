import { useState, useEffect, ReactNode } from "react";

const ClientOnly = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return <>{isClient ? null : children}</>;
};

export default ClientOnly;
