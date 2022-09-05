import * as yup from "yup";
import { PostRegisterInput, PostRegisterResponse } from "./types";

export function getPostRegisterFormData(input: PostRegisterInput): FormData {
  const formData = new FormData();

  formData.set("client_id", input.clientId);
  formData.set("email", input.email);
  formData.set("name", input.name);

  return formData;
}

export function isPostRegisterResponse(
  response: unknown
): response is PostRegisterResponse {
  try {
    const schema: yup.SchemaOf<PostRegisterResponse> = yup.object({
      meta: yup
        .object({
          request_id: yup.string().defined()
        })
        .defined(),
      data: yup
        .object({
          client_id: yup.string().defined(),
          email: yup.string().defined(),
          sl_token: yup.string().defined()
        })
        .defined()
    });

    schema.validateSync(response);

    return true;
  } catch (_) {
    return false;
  }
}
