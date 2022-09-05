import groupBy from "lodash.groupby";
import { GetPostsResponse } from "../../../../api/getPosts/types";
import { SenderWithPosts } from "./types";

export function mapGetPostsResponseToSendersWithPosts(
  response: GetPostsResponse
): SenderWithPosts[] {
  const postGroups = groupBy(response.data.posts, (post) => post.from_id);

  return Object.values(postGroups).map<SenderWithPosts>((posts) => ({
    id: posts[0].from_id,
    name: posts[0].from_name,
    postCount: posts.length,
    posts: posts.map((post) => ({
      id: post.id,
      message: post.message,
      createdTime: new Date(post.created_time)
    }))
  }));
}
