import { configureStore } from "@reduxjs/toolkit";
import devtoReducer from "publishers/devto/devToSlice";
import hashnodeReducer from "publishers/hashnode/hashnodeSlice";
import mediumReducer from "publishers/medium/mediumSlice";
import {
  publishPost as mediumPublishPost,
  saveData as mediumSaveData,
} from "publishers/medium/mediumSlice";
import postReducer from "redux/postSlice";
import { savePost } from "redux/postSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    medium: mediumReducer,
    hashnode: hashnodeReducer,
    devto: devtoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// test redux here
console.log(store.getState());

store.dispatch(savePost("hello"));

console.log(store.getState());

//save medium post
store.dispatch(
  mediumSaveData({
    title: "how to code",
    contentFormat: "markdown",
    content: "YO",
    canonicalUrl: "",
    tags: ["typescript", "react"],
    publishStatus: "public",
  })
);

console.log(store.getState());

store.dispatch(
  mediumPublishPost({
    title: "how to code",
    contentFormat: "markdown",
    content: "YO",
    canonicalUrl: "",
    tags: ["typescript", "react"],
    publishStatus: "public",
  })
);

console.log(store.getState());
