import { useUserPosts } from "./hooks/usePost";
import { Post } from "shared/types";
import { useDeletePost } from "./hooks/useDeletePost";

interface ListPostsProps {
  posts: Post[];
}
const ListPosts = ({ posts }: ListPostsProps) => {
  const deletePost = useDeletePost();

  const confirmAndDeletePost = (postId: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(postId);
    }
  };

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
                  onClick={() => confirmAndDeletePost(post.id)}
                  className="fa-regular fa-circle-xmark"
                />
              </th>
              <th style={{ textAlign: "center" }}>
                <i onClick={() => {}} className="fa-solid fa-pencil" />
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListPosts;
