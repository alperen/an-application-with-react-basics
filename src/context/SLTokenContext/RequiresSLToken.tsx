import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useSLToken from "./useSLToken";

interface RequiresSLTokenProps {
  children: ReactNode;
}

export default function RequiresSLToken({ children }: RequiresSLTokenProps) {
  const { slToken } = useSLToken();

  if (!slToken) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
