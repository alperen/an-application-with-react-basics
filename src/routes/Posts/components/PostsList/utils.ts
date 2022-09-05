import Post from "../../../../models/Post";
import { doesIncludeTerm } from "../../../../utils/string";

type Sort = "ASC" | "DESC";

interface OrganizePostsOptions {
  sort: Sort;
  searchTerm: string;
}

// TODO
export function organizePosts(
  posts: Post[],
  { searchTerm, sort }: OrganizePostsOptions
) {
  const targetPosts = searchTerm
    ? posts.filter((post) => doesIncludeTerm(post.message, searchTerm))
    : posts;

  return targetPosts.sort((a, b) =>
    sort === "ASC"
      ? Number(a.createdTime) - Number(b.createdTime)
      : Number(b.createdTime) - Number(a.createdTime)
  );
}
