import { format } from "date-fns";
import PostModel from "../../../../../../models/Post";
import Box from "../../../../../../components/Box";

interface PostProps {
  post: PostModel;
}

export default function Post({ post }: PostProps) {
  const date = format(post.createdTime, "MMMM dd, yyyy HH:mm:ss");

  return (
    <Box>
      <time dateTime={post.createdTime.toString()}>{date}</time>
      <hr />
      <p>{post.message}</p>
    </Box>
  );
}
