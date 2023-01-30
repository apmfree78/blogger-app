import type { Post, User } from "shared/types";
import { axiosInstance, getJWTHeader } from "axiosInstance";
import { useUser } from "components/user/hooks/useUser";
import { queryKeys } from "react-query/constants";
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { customToast } from "components/hooks/useToast";

//fetch user posts with authorization token
async function updateUserPost(post: Post, user: User | null): Promise<void> {
  if (!user) return;
  const { content, publishStatus, author } = post;
  await axiosInstance.patch(
    `/collections/posts/records/${post.id}`,
    { content, publishStatus, author },
    { headers: getJWTHeader(user) }
  );
}

export function useUpdatePost() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate } = useMutation((post: Post) => updateUserPost(post, user), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.posts]);
      customToast("Post has been updated", "is-success");
    },
  });
  return mutate;
}
