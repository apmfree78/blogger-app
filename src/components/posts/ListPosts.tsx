import { useUserPosts } from "./hooks/usePost";
import { Post } from "shared/types";
import { useDeletePost } from "./hooks/useDeletePost";

interface ListPostsProps {
  posts: Post[];
}
const ListPosts = ({ posts }: ListPostsProps) => {
  const deletePost = useDeletePost();

  return (
    <table className="table is-striped is-hoverable">
      <thead>
        <tr style={{ backgroundColor: "#F5F5F5" }}>
          <th>Post</th>
          <th>Published?</th>
          <th> </th>
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
              <th style={{ textAlign: "center" }}>
                <i
                  onClick={() => deletePost(post.id)}
                  className="fa-regular fa-circle-xmark"
                />
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListPosts;
