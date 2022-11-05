import { configureStore } from "@reduxjs/toolkit";
import postReducer from "redux/postSlice";
import mediumReducer from "redux/mediumSlice";
import hashnodeReducer from "redux/hashnodeSlice";
import devtoReducer from "redux/devToSlice";
import { savePost } from "redux/postSlice";
import { saveData } from "redux/mediumSlice";

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

store.dispatch(
  saveData({
    title: "how to code",
    contentFormat: "markdown",
    content: "YO",
    canonicalUrl: "",
    tags: ["typescript", "react"],
    publishStatus: "public",
  })
);

console.log(store.getState());
