import { ElementType, ReactNode, ComponentProps } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

type StackProps<T extends ElementType = "div"> = {
  component?: T;
  children?: ReactNode;
} & ComponentProps<T>;

export default function Stack<T extends ElementType = "div">({
  component,
  children,
  ...props
}: StackProps<T>) {
  const Component = component || "div";

  return (
    <Component {...props} className={cx(styles["stack"], props.className)}>
      {children}
    </Component>
  );
}
