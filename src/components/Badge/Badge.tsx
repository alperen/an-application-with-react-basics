import { ComponentProps } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

interface BadgeProps extends ComponentProps<"span"> {}

export default function Badge({ children, ...props }: BadgeProps) {
  return (
    <span {...props} className={cx(styles["badge"], props.className)}>
      {children}
    </span>
  );
}
