import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { MediumDataProps } from "lib/publisherInfo";
import { devToURL } from "lib/publisherInfo";

export interface MediumPublishStatusType {
  // publisher: PublisherType;
  publishURL: string;
  article: MediumDataProps;
  loading: boolean;
  error: string;
}
// defining interfaces for
// API data, loading error and data state
// and Action Creators

const initialState: MediumPublishStatusType = {
  publishURL: devToURL,
  article: {
    title: "",
    contentFormat: "markdown",
    content: "",
    canonicalUrl: "",
    tags: [],
    publishStatus: "public",
  },
  loading: false,
  error: "",
};

export const publishPost = createAsyncThunk(
  "medium/publishPost",
  (state: MediumPublishStatusType) => {
    return axios
      .post(state.publishURL, state.article)
      .then((response) => console.log(response));
  }
);

export const mediumSlice = createSlice({
  name: "medium",
  initialState,
  reducers: {
    savePost(state, action: PayloadAction<MediumDataProps>) {
      const { title, content, canonicalUrl, tags, publishStatus } =
        action.payload;
      state.article.title = title;
      state.article.content = content;
      state.article.canonicalUrl = canonicalUrl;
      state.article.tags = [...tags];
      state.article.publishStatus = publishStatus;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(publishPost.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(publishPost.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(publishPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
    });
  },
});

export const { savePost } = mediumSlice.actions;
export default mediumSlice.reducer;
