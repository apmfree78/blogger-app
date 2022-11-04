import { configureStore } from "@reduxjs/toolkit";
import postReducer from "redux/postSlice";
import mediumReducer from "redux/mediumSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    medium: mediumReducer,
  },
});
