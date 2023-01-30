import type { Post, User } from "shared/types";
import { axiosInstance, getJWTHeader } from "axiosInstance";
import { useUser } from "components/user/hooks/useUser";
import { queryKeys } from "react-query/constants";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import { useUpdatePost } from "./useUpdatePost";

//fetch user posts with authorization token
async function fetchUserPostById(
  id: string,
  user: User | null
): Promise<Post | null> {
  if (!user) return null;
  const { data }: AxiosResponse<Post> = await axiosInstance.get(
    `/collections/posts/records/${id}`,
    { headers: getJWTHeader(user) }
  );
  return data;
}

interface UsePost {
  postContent: string | null;
  savePostContent: (content: string) => void;
}

// hooks that returns user posts by page
export function usePostById(id: string): UsePost {
  // userUserPosts will handle page state
  const [post, setPost] = useState<Post | null>(null);
  const updatePost = useUpdatePost();
  const savePostTimer = useRef<number | null>(null);
  const { user } = useUser();

  // load initial post
  // get user posts from pocketbase
  const { data: postData } = useQuery(
    [queryKeys.posts, queryKeys.user, id],
    () => fetchUserPostById(id, user),
    { enabled: !!user }
  );

  // update post state every time new post is loaded
  useEffect(() => {
    if (postData) setPost(postData);
  }, [id, postData?.id, postData]);

  // save post every 30 seconds
  useEffect(() => {
    if (savePostTimer.current !== null) clearTimeout(savePostTimer.current);
    savePostTimer.current = window.setTimeout(() => {
      if (post !== null) updatePost(post);
    }, 30000);
    return () => {
      if (savePostTimer.current !== null) clearTimeout(savePostTimer.current);
    };
  }, [post?.id, post?.content, post, updatePost]);

  // postContent - content of user post with 'id'
  const postContent = post?.content || null;

  const savePostContent = (content: string) => {
    if (post === null) return;
    const updatedPost: Post = { ...post, content };
    setPost(updatedPost);
  };

  return {
    postContent,
    savePostContent,
  };
}
