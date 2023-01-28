import type { Post, PostData, User } from "shared/types";
import { axiosInstance, getJWTHeader } from "axiosInstance";
import { useUser } from "components/user/hooks/useUser";
import { queryKeys } from "react-query/constants";
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { customToast } from "components/hooks/useToast";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

//fetch user posts with authorization token
async function updateUserPost(
  user: User | null,
  id: string
): Promise<PostData | null> {
  if (!user) return null;
  const { data }: AxiosResponse<PostData> = await axiosInstance.patch(
    `/collections/posts/records/${id}`,
    { headers: getJWTHeader(user), data: "ADD DATA HERE" }
  );
  return data;
}

export function useUpdatePost() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate } = useMutation((id: string) => updateUserPost(user, id), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.posts]);
      customToast("Post has been updated", "is-success");
    },
  });
  return mutate;
}
