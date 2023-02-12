import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  devToURL,
  HashNodeDataProps,
  PublishStatusType,
} from "publishers/publisherInfo";
import { AppDispatch, RootState } from "redux/store";

const initialState: PublishStatusType<HashNodeDataProps> = {
  publishURL: devToURL,
  article: {
    title: "",
    contentMarkdown: "",
    tags: [],
    coverImageURL: "",
  },
  loading: false,
  error: "",
  success: "",
};

export const publishPost = createAsyncThunk<
  string,
  HashNodeDataProps,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("hashnode/publishPost", async (article, { getState }) => {
  const state: PublishStatusType<HashNodeDataProps> = getState().hashnode;
  const response: AxiosResponse = await axios.post(state.publishURL, article);
  if (response.statusText === "OK") {
    const successMessage = "Hashnode Post Successfully Published!";
    console.log(successMessage);
    return successMessage;
  } else return "";
});

export const hashnodeSlice = createSlice({
  name: "hashnode",
  initialState,
  reducers: {
    saveData(state, action: PayloadAction<HashNodeDataProps>) {
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

export const { saveData } = hashnodeSlice.actions;
export default hashnodeSlice.reducer;
