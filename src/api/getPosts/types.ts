export interface GetPostsInput {
  slToken: string;
  page: number;
}

export interface GetPostsResponse {
  meta: {
    request_id: string;
  };
  data: {
    page: number;
    posts: {
      id: string;
      from_name: string;
      from_id: string;
      message: string;
      type: string;
      created_time: string;
    }[];
  };
}
