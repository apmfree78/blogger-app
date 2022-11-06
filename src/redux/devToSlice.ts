import {
  createSlice,
  PayloadAction,
  AnyAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { DevToDataProps } from "lib/publisherInfo";
import { devToURL } from "lib/publisherInfo";
import { AppDispatch, RootState } from "redux/store";
import axios from "axios";

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

export const publishPost = createAsyncThunk<
  any,
  DevToDataProps,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("medium/publishPost", async (article, { getState }) => {
  const state: DevToPublishStatusType = getState().devto;
  const response = await axios.post(state.publishURL, article);
  return response.data;
});

export const devtoSlice = createSlice({
  name: "devto",
  initialState,
  reducers: {
    saveData(state, action: PayloadAction<DevToDataProps>) {
      const { title, body_markdown, series, tags, published } = action.payload;
      state.article.title = title;
      state.article.body_markdown = body_markdown;
      state.article.series = series;
      state.article.tags = [...tags];
      state.article.published = published;
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

export const { saveData } = devtoSlice.actions;
export default devtoSlice.reducer;
