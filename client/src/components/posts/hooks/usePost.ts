import { useEffect, useRef, useState } from "react";
import { Post } from "shared/types";

import { useUpdatePost } from "./useUpdatePost";

// hook to manage state of current post user is working on
// and save post every time its update with 3 second debounce
export function usePost() {
  const [post, setPost] = useState<Post | null>(null);
  const savePostTimer = useRef<number | null>(null); // for debouncing
  const savePost = useUpdatePost();

  // save post when updated , with 3 second debounce
  useEffect(() => {
    if (savePostTimer.current !== null) clearTimeout(savePostTimer.current);
    savePostTimer.current = window.setTimeout(() => {
      if (post !== null) savePost(post);
    }, 3000);
    return () => {
      if (savePostTimer.current !== null) clearTimeout(savePostTimer.current);
    };
  }, [post?.id, post?.content]);

  return { post, setPost };
}
