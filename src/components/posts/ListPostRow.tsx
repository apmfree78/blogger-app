import { Post } from "shared/types";
import { useDeletePost } from "components/posts/hooks/useDeletePost";
import { Link } from "react-router-dom";

const ListPostRow = ({ post }: { post: Post }) => {
  const deletePost = useDeletePost();

  const confirmAndDeletePost = (postId: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(postId);
    }
  };

  // determine icon to show if post is published or not
  const isPublished = post.publishStatus.published ? (
    <i style={{ color: "green" }} className="fas fa-check" />
  ) : (
    <i style={{ color: "red" }} className="fa-solid fa-xmark" />
  );

  return (
    <tr key={post.id}>
      <th>{post.content}</th>
      {/* show check or x icon in this column */}
      <th style={{ textAlign: "center" }}>{isPublished}</th>
      {/* icon to delete post */}
      <th style={{ textAlign: "center" }}>
        <i
          onClick={() => confirmAndDeletePost(post.id)}
          className="fa-regular fa-circle-xmark"
        />
      </th>
      {/* icon to edit post */}
      <th style={{ textAlign: "center" }}>
        <Link to={`/post/${post.id}`}>
          <i className="fa-solid fa-pencil" />
        </Link>
      </th>
    </tr>
  );
};

export default ListPostRow;
