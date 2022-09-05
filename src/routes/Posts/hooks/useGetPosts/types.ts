import Sender from "../../../../models/Sender";
import Post from "../../../../models/Post";

export interface SenderWithPosts extends Sender {
  posts: Post[];
}
