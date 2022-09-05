import InvalidResponseError from "../invalidResponseError";
import config from "../config";
import { validateGetPosts, getPostsSearchParams } from "./utils";
import { GetPostsInput, GetPostsResponse } from "./types";

export default async function getPosts(
  input: GetPostsInput
): Promise<GetPostsResponse> {
  const searchParams = getPostsSearchParams(input);
  const url = `${config.BASE_URL}/posts?${searchParams.toString()}`;

  const response = await fetch(url);
  const serializedResponse = await response.json();

  if (!validateGetPosts(serializedResponse)) {
    throw new InvalidResponseError();
  }

  return serializedResponse;
}
