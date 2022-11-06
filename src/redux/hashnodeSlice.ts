import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HashnodeDataProps } from "lib/publisherInfo";
import { devToURL } from "lib/publisherInfo";
import { AppDispatch, RootState } from "redux/store";

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

export const publishPost = createAsyncThunk<
  any,
  HashnodeDataProps,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("medium/publishPost", async (article, { getState }) => {
  const state: HashnodePublishStatusType = getState().hashnode;
  const response = await axios.post(state.publishURL, article);
  return response.data;
});

export const hashnodeSlice = createSlice({
  name: "hashnode",
  initialState,
  reducers: {
    saveData(state, action: PayloadAction<HashnodeDataProps>) {
      const { title, contentMarkdown, coverImageURL, tags } = action.payload;
      state.article.title = title;
      state.article.contentMarkdown = contentMarkdown;
      state.article.coverImageURL = coverImageURL;
      state.article.tags = [...tags];
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

export const { saveData } = hashnodeSlice.actions;
export default hashnodeSlice.reducer;
