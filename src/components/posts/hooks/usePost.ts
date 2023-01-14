import type { Post, User } from "shared/types";
import { axiosInstance, getJWTHeader } from "axiosInstance";
import { useUser } from "components/user/hooks/useUser";
import { queryKeys } from "react-query/constants";
import { useQuery, useQueryClient } from "react-query";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const maxPostPage = 5;
const postsPerPage = 5;

//fetch user posts with authorization token
async function fetchUserPosts(
  user: User | null,
  pageNumber: number
): Promise<Post[] | null> {
  if (!user) return null;
  const { data }: AxiosResponse<Post[]> = await axiosInstance.get(
    `/collections/posts/records?perPage=${postsPerPage}&page=${pageNumber}`,
    { headers: getJWTHeader(user) }
  );
  return data;
}

interface UsePost {
  posts: Post[] | null;
  updatePost: (post: Post) => void;
  deletePost: (post: Post) => void;
}

// hooks that returns user posts by page
export function useUserPosts(): UsePost {
  // userUserPosts will handle page state
  const [page, setPage] = useState(1);
  const { user } = useUser();
  const queryClient = useQueryClient();

  // get user posts from pocketbase
  const { data: posts = [] } = useQuery(
    [queryKeys.posts, queryKeys.user, page],
    () => fetchUserPosts(user, page),
    { enabled: !!user }
  );

  // prefetch next page data, if not at last page
  useEffect(() => {
    if (page < maxPostPage) {
      queryClient.prefetchQuery(
        [queryKeys.posts, queryKeys.user, page + 1],
        () => fetchUserPosts(user, page + 1)
      );
    }
  }, [page, user, queryClient]);

  function updatePost(post: Post): void {
    //queryClient.setQueryData(queryKeys.posts, newUser);
  }

  function deletePost(): void {
    // queryClient.setQueryData(queryKeys.posts, null);
    // queryClient.removeQueries([queryKeys.posts, queryKeys.user]);
  }

  if (posts === undefined) return { posts: null, updatePost, deletePost };
  else return { posts, updatePost, deletePost };
}
