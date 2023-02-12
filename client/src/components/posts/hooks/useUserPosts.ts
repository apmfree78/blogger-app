import type { Post, PostData, User } from "shared/types";
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
): Promise<PostData | null> {
  if (!user) return null;
  const { data }: AxiosResponse<PostData> = await axiosInstance.get(
    `/collections/posts/records?perPage=${postsPerPage}&page=${pageNumber}`,
    { headers: getJWTHeader(user) }
  );
  return data;
}

interface UsePost {
  posts: Post[] | null;
  page: number;
  totalPages: number;
  totalItems: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

// hooks that returns user posts by page
export function useUserPosts(): UsePost {
  // userUserPosts will handle page state
  const [page, setPage] = useState(1);
  const { user } = useUser();
  const queryClient = useQueryClient();

  // get user posts from pocketbase
  const { data: postData } = useQuery(
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

  const posts = postData?.items || null;
  const totalPages = postData?.totalPages || 0;
  const totalItems = postData?.totalItems || 0;

  return {
    posts,
    totalPages,
    totalItems,
    page,
    setPage,
  };
}
