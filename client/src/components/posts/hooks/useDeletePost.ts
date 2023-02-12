import { AxiosResponse } from "axios";
import { axiosInstance, getJWTHeader } from "axiosInstance";
import { customToast } from "components/hooks/useToast";
import { useUser } from "components/user/hooks/useUser";
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { queryKeys } from "react-query/constants";
import type { PostData, User } from "shared/types";

//fetch user posts with authorization token
async function deleteUserPost(
  user: User | null,
  id: string
): Promise<PostData | null> {
  if (!user) return null;
  const { data }: AxiosResponse<PostData> = await axiosInstance.delete(
    `/collections/posts/records/${id}`,
    { headers: getJWTHeader(user) }
  );
  return data;
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate } = useMutation((id: string) => deleteUserPost(user, id), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.posts]);
      customToast("Post has been deleted", "is-warning");
    },
  });
  return mutate;
}
