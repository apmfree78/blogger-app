import { useUserPosts } from "./hooks/usePost";
import { Post } from "shared/types";

interface ListPostsProps {
  posts: Post[];
}
const ListPosts = ({ posts }: ListPostsProps) => {
  return (
    <table className="table is-striped is-hoverable">
      <thead>
        <tr style={{ backgroundColor: "#F5F5F5" }}>
          <th>Post</th>
          <th>Published?</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => {
          const isPublished = post.publishStatus.published ? (
            <i style={{ color: "green" }} className="fas fa-check" />
          ) : (
            <i style={{ color: "red" }} className="fa-solid fa-xmark" />
          );

          return (
            <tr key={post.id}>
              <th>{post.content}</th>
              <th style={{ textAlign: "center" }}>{isPublished}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListPosts;
