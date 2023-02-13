import { AxiosResponse } from "axios";
import { axiosInstance, getJWTHeader } from "axiosInstance";
import { useUser } from "components/user/hooks/useUser";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "react-query/constants";
import type { Post, User } from "shared/types";

import { usePost } from "./usePost";

async function fetchUserPostById(
  id: string | null,
  user: User | null
): Promise<Post | null> {
  if (!user || !id) return null;
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

// hook that returns post by ID and function to create new post and save posts
export function usePostContent(id: string | null = null): UsePost {
  const { post, setPost } = usePost();
  const { user } = useUser();

  // load initial post
  // get post by id from pocketbase
  const { data: postData } = useQuery(
    [queryKeys.posts, queryKeys.user, id],
    () => fetchUserPostById(id, user),
    { enabled: !!user }
  );

  // update post state every time new post is loaded or post is updated
  useEffect(() => {
    if (postData) setPost(postData);
  }, [id, postData?.id, postData]);

  // postContent - content of user post with 'id'
  const postContent = post?.content || null;

  // function to save updated post to server
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
