import { ComponentProps } from "react";
import cx from "classnames";

interface BoxProps extends ComponentProps<"div"> {}

import styles from "./styles.module.scss";

export default function Box({ children, ...props }: BoxProps) {
  return (
    <div {...props} className={cx(styles["box"], props.className)}>
      {children}
    </div>
  );
}
