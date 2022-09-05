import { ReactNode } from "react";
import Box from "../Box";

interface AlertProps {
  children: ReactNode;
}

export default function Alert({ children }: AlertProps) {
  return <Box role="alert">{children}</Box>;
}
