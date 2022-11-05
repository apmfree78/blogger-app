import { configureStore } from "@reduxjs/toolkit";
import postReducer from "redux/postSlice";
import mediumReducer from "redux/mediumSlice";
import hashnodeReducer from "redux/hashnodeSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    medium: mediumReducer,
    hashnode: hashnodeReducer,
  },
});
