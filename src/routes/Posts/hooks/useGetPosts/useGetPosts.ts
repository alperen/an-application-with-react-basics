import { useEffect, useState } from "react";
import getPosts from "../../../../api/getPosts";
import { SenderWithPosts } from "./types";
import { mapGetPostsResponseToSendersWithPosts } from "./utils";

interface UseGetPosts {
  sendersWithPosts: SenderWithPosts[];
  loading: boolean;
  error?: Error;
}

export default function useGetPosts(slToken: string): UseGetPosts {
  const [sendersWithPosts, setSendersWithPosts] = useState<SenderWithPosts[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        setError(undefined);
        setLoading(true);

        const response = await getPosts({
          slToken,
          page: 1
        });

        setSendersWithPosts(mapGetPostsResponseToSendersWithPosts(response));
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, [slToken]);

  return {
    sendersWithPosts,
    loading,
    error
  };
}
