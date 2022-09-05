import { ComponentProps } from "react";
import SenderModel from "../../../../../../models/Sender";
import Box from "../../../../../../components/Box";
import Badge from "../../../../../../components/Badge";

import styles from "./styles.module.scss";

interface SenderProps
  extends Omit<ComponentProps<typeof Box>, "role" | "onClick" | "className"> {
  sender: SenderModel;
  onClick: (sender: SenderModel) => void;
}

export default function Sender({ sender, onClick, ...boxProps }: SenderProps) {
  return (
    <Box
      {...boxProps}
      role="button"
      onClick={() => onClick(sender)}
      className={styles["sender"]}
    >
      {sender.name}
      <Badge className={styles["sender__post-count"]}>{sender.postCount}</Badge>
    </Box>
  );
}
