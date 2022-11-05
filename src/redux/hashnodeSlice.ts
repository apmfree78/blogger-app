import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HashnodeDataProps } from "lib/publisherInfo";
import { devToURL } from "lib/publisherInfo";

export interface HashnodePublishStatusType {
  // publisher: PublisherType;
  publishURL: string;
  article: HashnodeDataProps;
  loading: boolean;
  error: string;
}
// defining interfaces for
// API data, loading error and data state
// and Action Creators

const initialState: HashnodePublishStatusType = {
  publishURL: devToURL,
  article: {
    title: "",
    contentMarkdown: "",
    tags: [],
    coverImageURL: "",
  },
  loading: false,
  error: "",
};

export const hashnodeSlice = createSlice({
  name: "hashnode",
  initialState,
  reducers: {
    savePost(state, action: PayloadAction<HashnodeDataProps>) {
      const { title, contentMarkdown, coverImageURL, tags } = action.payload;
      state.article.title = title;
      state.article.contentMarkdown = contentMarkdown;
      state.article.coverImageURL = coverImageURL;
      state.article.tags = [...tags];
      return state;
    },
    publishStart(state) {
      state.loading = true;
      state.error = "";
      return state;
    },
    publishError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      return state;
    },
    publishSuccess(state) {
      state.loading = false;
      state.error = "";
      return state;
    },
  },
});

export const { savePost } = hashnodeSlice.actions;
export default hashnodeSlice.reducer;
