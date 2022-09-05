import { useEffect, useState } from "react";
import PostModel from "../../../../models/Post";
import Post from "./components/Post";
import Alert from "../../../../components/Alert";
import Stack from "../../../../components/Stack";
import { organizePosts } from "./utils";

import styles from "./styles.module.scss";

type PostSort = "ASC" | "DESC";

interface PostsListProps {
  posts: PostModel[];
}

export default function PostsList({ posts }: PostsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState<PostSort>("ASC");
  const organizedPosts = organizePosts(posts, {
    sort,
    searchTerm
  });

  useEffect(() => setSearchTerm(""), [posts]);

  function postsRenderer() {
    if (posts.length === 0) {
      return <Alert>No posts are found.</Alert>;
    }

    if (!!searchTerm && organizedPosts.length === 0) {
      return <Alert>No posts are found based on the search term.</Alert>;
    }

    return (
      <Stack component="ol">
        {organizedPosts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </Stack>
    );
  }

  return (
    <div>
      <div className={styles["posts-list-filter-container"]}>
        <div className={styles["posts-list-filter-container__sorting"]}>
          <button onClick={() => setSort("ASC")} aria-pressed={sort === "ASC"}>
            ↑
          </button>
          <button
            onClick={() => setSort("DESC")}
            aria-pressed={sort === "DESC"}
          >
            ↓
          </button>
        </div>

        <input
          placeholder="search"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
          className={styles["posts-list-filter-container__search"]}
        />
      </div>

      <div className={styles["posts-list-container"]}>{postsRenderer()}</div>
    </div>
  );
}
