import { Post } from "shared/types";
import PostRow from "./PostRow";

interface ListPostsProps {
  posts: Post[];
}

const PostTable = ({ posts }: ListPostsProps) => {
  return (
    <table className="table is-striped is-hoverable">
      <thead>
        <tr style={{ backgroundColor: "#F5F5F5" }}>
          <th>Post</th>
          <th>Published?</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <PostRow post={post} />
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
