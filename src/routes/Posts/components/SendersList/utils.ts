import Sender from "../../../../models/Sender";
import { doesIncludeTerm } from "../../../../utils/string";

interface OrganizeSendersOptions {
  searchTerm: string;
}

export function organizeSenders(
  senders: Sender[],
  { searchTerm }: OrganizeSendersOptions
) {
  const targetSenders = searchTerm
    ? senders.filter((sender) => doesIncludeTerm(sender.name, searchTerm))
    : senders;

  return targetSenders
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => b.postCount - a.postCount);
}
