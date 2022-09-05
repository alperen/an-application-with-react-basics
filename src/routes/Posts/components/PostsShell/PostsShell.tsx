import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface PostsShellProps {
  sendersSection: ReactNode;
  postsSection: ReactNode;
}

export default function PostsShell({
  sendersSection,
  postsSection
}: PostsShellProps) {
  return (
    <div className={styles["posts-shell"]}>
      <div>{sendersSection}</div>
      <div>{postsSection}</div>
    </div>
  );
}
