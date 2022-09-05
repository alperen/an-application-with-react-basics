import InvalidResponseError from "../invalidResponseError";
import config from "../config";
import { getPostRegisterFormData, isPostRegisterResponse } from "./utils";
import { PostRegisterInput, PostRegisterResponse } from "./types";

export default async function postRegister(
  input: PostRegisterInput
): Promise<PostRegisterResponse> {
  const url = `${config.BASE_URL}/register`;
  const formData = getPostRegisterFormData(input);
  const response = await fetch(url, {
    method: "POST",
    body: formData
  });

  const jsonResponse = await response.json();

  if (!isPostRegisterResponse(jsonResponse)) {
    throw new InvalidResponseError();
  }

  return jsonResponse;
}
