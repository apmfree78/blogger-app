import { configureStore } from "@reduxjs/toolkit";
import postReducer from "redux/postSlice";
import mediumReducer from "redux/mediumSlice";
import hashnodeReducer from "redux/hashnodeSlice";
import devtoReducer from "redux/devToSlice";

export default configureStore({
  reducer: {
    post: postReducer,
    medium: mediumReducer,
    hashnode: hashnodeReducer,
    devto: devtoReducer,
  },
});
