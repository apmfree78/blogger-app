import type { Post, User } from "shared/types";
import { axiosInstance, getJWTHeader } from "axiosInstance";
import { useUser } from "components/user/hooks/useUser";
import { queryKeys } from "react-query/constants";
import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { queryClient } from "react-query/queryClient";
import { customToast } from "components/hooks/useToast";

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

// hook to create new post
export function useCreatePost() {
  const { user } = useUser();

  const { mutate: createPost } = useMutation(() => fetchNewPost(user), {
    onSuccess: () => {
      //clear cache
      queryClient.invalidateQueries([queryKeys.posts]);
      customToast("post created", "is-success");
    },
  });
  return createPost;
}
