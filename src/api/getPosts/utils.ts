import * as yup from "yup";
import groupBy from "lodash.groupby";
import Post from "../../models/Post";
import Sender from "../../models/Sender";
import { GetPostsResponse, GetPostsInput } from "./types";

export function getPostsSearchParams(input: GetPostsInput): URLSearchParams {
  const searchParams = new URLSearchParams();

  searchParams.set("sl_token", input.slToken);
  searchParams.set("page", input.page.toString());

  return searchParams;
}

export function validateGetPosts(
  response: unknown
): response is GetPostsResponse {
  try {
    const schema: yup.SchemaOf<GetPostsResponse> = yup.object({
      meta: yup
        .object({
          request_id: yup.string().defined()
        })
        .defined(),
      data: yup
        .object({
          page: yup.number().defined(),
          posts: yup
            .array()
            .of(
              yup.object({
                id: yup.string().defined(),
                from_name: yup.string().defined(),
                from_id: yup.string().defined(),
                message: yup.string().defined(),
                type: yup.string().defined(),
                created_time: yup
                  .string()
                  .test((dateString) =>
                    dateString
                      ? new Date(dateString).toString() !== "Invalid Date"
                      : false
                  )
                  .defined()
              })
            )
            .defined()
        })
        .defined()
    });

    schema.validateSync(response);

    return true;
  } catch (_) {
    return false;
  }
}

export function mapResponseToPosts(response: GetPostsResponse): Post[] {
  return response.data.posts.map<Post>((post) => ({
    id: post.id,
    message: post.message,
    createdTime: new Date(post.created_time),
    sender: {
      id: post.from_id,
      name: post.from_name,
      postCount: 0
    }
  }));
}

export function populateSendersFromPostsRequest(
  response: GetPostsResponse
): Sender[] {
  const posts = response.data.posts;
  const groupedPosts = groupBy(posts, (post) => post.from_id);

  return Object.values(groupedPosts).map<Sender>((postOfUsers) => ({
    id: postOfUsers[0].from_id,
    name: postOfUsers[0].from_name,
    postCount: postOfUsers.length
  }));
}
