import { ComponentProps } from "react";

interface PageProps extends ComponentProps<"div"> {}

export default function Page({ children, ...props }: PageProps) {
  return <div {...props}>{children}</div>;
}
