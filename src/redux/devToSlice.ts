import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DevToDataProps } from "lib/publisherInfo";
import { devToURL } from "lib/publisherInfo";

export interface DevToPublishStatusType {
  // publisher: PublisherType;
  publishURL: string;
  article: DevToDataProps;
  loading: boolean;
  error: string;
}
// defining interfaces for
// API data, loading error and data state
// and Action Creators

const initialState: DevToPublishStatusType = {
  publishURL: devToURL,
  article: {
    title: "",
    published: true,
    body_markdown: "",
    tags: [],
    series: "",
  },
  loading: false,
  error: "",
};

export const mediumSlice = createSlice({
  name: "medium",
  initialState,
  reducers: {
    savePost(state, action: PayloadAction<DevToDataProps>) {
      const { title, body_markdown, series, tags, published } = action.payload;
      state.article.title = title;
      state.article.body_markdown = body_markdown;
      state.article.series = series;
      state.article.tags = [...tags];
      state.article.published = published;
      return state;
    },
  },
});

export const { savePost } = mediumSlice.actions;
export default mediumSlice.reducer;
