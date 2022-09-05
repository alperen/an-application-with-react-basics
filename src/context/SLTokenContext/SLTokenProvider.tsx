import { ReactNode, useState } from "react";
import SLTokenContext from "./context";

interface SLTokenProviderProps {
  children: ReactNode;
}

export default function SLTokenProvider({ children }: SLTokenProviderProps) {
  const [slToken, setSLToken] = useState<string | undefined>(undefined);

  return (
    <SLTokenContext.Provider value={{ slToken, setSLToken }}>
      {children}
    </SLTokenContext.Provider>
  );
}
