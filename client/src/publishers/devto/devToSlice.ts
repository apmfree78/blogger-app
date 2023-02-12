import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DevToDataProps, PublishStatusType } from "publishers/publisherInfo";
import { devToURL } from "publishers/publisherInfo";
import { AppDispatch, RootState } from "redux/store";
import axios, { AxiosResponse } from "axios";

const initialState: PublishStatusType<DevToDataProps> = {
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
  success: "",
};

export const publishPost = createAsyncThunk<
  string,
  DevToDataProps,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("devto/publishPost", async (article, { getState }) => {
  const state: PublishStatusType<DevToDataProps> = getState().devto;
  const response: AxiosResponse = await axios.post(state.publishURL, article);
  // if response successful return success message
  if (response.statusText === "OK") {
    const successMessage = "Dev.to Post Successfully Published!";
    console.log(successMessage);
    return successMessage;
  } else return "";
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
      // console.log(current(state));
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(publishPost.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      publishPost.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = "";
        state.success = action.payload;
      }
    );
    builder.addCase(publishPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
    });
  },
});

export const { saveData } = devtoSlice.actions;
export default devtoSlice.reducer;
