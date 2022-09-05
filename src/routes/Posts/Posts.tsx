import { useEffect, useMemo, useState } from "react";
import PostsShell from "./components/PostsShell";
import SendersSection from "./components/SendersList";
import PostsList from "./components/PostsList";
import Page from "../../components/Page";
import usePosts from "./hooks/useGetPosts";
import Box from "../../components/Box";
import Alert from "../../components/Alert";
import { useSLToken } from "../../context/SLTokenContext";
import Sender from "../../models/Sender";

export default function Posts() {
  const { slToken } = useSLToken();
  const { sendersWithPosts, loading, error } = usePosts(slToken!);
  const [selectedSender, setSelectedSender] = useState<undefined | Sender>(
    undefined
  );
  const posts = useMemo(
    () =>
      selectedSender
        ? sendersWithPosts.find((sender) => sender.id === selectedSender.id)
            ?.posts || []
        : [],
    [selectedSender, sendersWithPosts]
  );

  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      }),
    [selectedSender]
  );

  function postsRenderer() {
    if (loading) {
      return <Box> Loading </Box>;
    }

    if (error) {
      return (
        <Alert>
          An error occured
          {error.message ? `: ${error.message}` : ""}
        </Alert>
      );
    }

    return (
      <PostsShell
        sendersSection={
          <SendersSection
            senders={sendersWithPosts}
            onSenderClick={(sender) => setSelectedSender(sender)}
          />
        }
        postsSection={
          selectedSender ? (
            <PostsList posts={posts} />
          ) : (
            <Alert>Select a sender to see their posts.</Alert>
          )
        }
      />
    );
  }

  return <Page>{postsRenderer()}</Page>;
}
