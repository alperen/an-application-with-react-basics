import { useState } from "react";
import SenderModel from "../../../../models/Sender";
import Alert from "../../../../components/Alert";
import Stack from "../../../../components/Stack";
import Sender from "./components/Sender";
import { organizeSenders } from "./utils";

import styles from "./styles.module.scss";

interface SenderListProps {
  senders: SenderModel[];
  onSenderClick: (sender: SenderModel) => void;
}

export default function SendersList({
  senders,
  onSenderClick
}: SenderListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const organizedSenders = organizeSenders(senders, { searchTerm });

  function sendersRenderer() {
    if (senders.length === 0) {
      return <Alert>No senders are found.</Alert>;
    }

    if (!!searchTerm && organizedSenders.length === 0) {
      return <Alert>No senders are found based on the search term.</Alert>;
    }

    return (
      <Stack component="ol" className={styles["senders-list"]}>
        {organizedSenders.map((sender) => (
          <li key={sender.id}>
            <Sender sender={sender} onClick={onSenderClick} />
          </li>
        ))}
      </Stack>
    );
  }

  return (
    <div>
      <input
        placeholder="search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
      />

      <div className={styles["senders-list-container"]}>
        {sendersRenderer()}
      </div>
    </div>
  );
}
