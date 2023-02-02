import type { Post, User } from "shared/types";
import { axiosInstance, getJWTHeader } from "axiosInstance";
import { useUser } from "components/user/hooks/useUser";
import { queryKeys } from "react-query/constants";
import { useMutation, useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import { useUpdatePost } from "./useUpdatePost";
import { usePost } from "./usePost";
import { queryClient } from "react-query/queryClient";
import { customToast } from "components/hooks/useToast";

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

async function fetchNewPost(user: User | null): Promise<Post | null> {
  if (!user) return null;
  const { data }: AxiosResponse<Post> = await axiosInstance.post(
    `/collections/posts/records`,
    {
      content: "",
      publishStatus: { published: false, publisher: "", publishDate: "" },
      author: user.id,
    },
    { headers: getJWTHeader(user) }
  );
  return data;
}

interface UsePost {
  postContent: string | null;
  savePostContent: (content: string) => void;
  createPost: () => void;
}

// hook that returns post by ID and function to create new post and save posts
export function usePostContent(id: string | null = null): UsePost {
  const { post, setPost } = usePost();
  const savePost = useUpdatePost();
  const savePostTimer = useRef<number | null>(null);
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

  // function to create new post
  const { mutate: createPost } = useMutation(() => fetchNewPost(user), {
    onSuccess: (newPostData: Post | null) => {
      if (!newPostData) return;
      // save existing post first, in case there are unsaved changes
      if (post !== null) savePost(post);
      //set state to new user Post
      setPost(newPostData);
      //clear cache
      queryClient.invalidateQueries([queryKeys.posts]);
      customToast("post created", "is-success");
    },
  });

  // function to save updated post to server
  const savePostContent = (content: string) => {
    if (post === null) return;
    const updatedPost: Post = { ...post, content };
    setPost(updatedPost);
  };

  return {
    postContent,
    savePostContent,
    createPost,
  };
}
