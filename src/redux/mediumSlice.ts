import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { MediumDataProps, PublishStatusType } from "lib/publisherInfo";
import { devToURL } from "lib/publisherInfo";
import { AppDispatch, RootState } from "redux/store";

const initialState: PublishStatusType<MediumDataProps> = {
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
  success: "",
};

export const publishPost = createAsyncThunk<
  string,
  MediumDataProps,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("medium/publishPost", async (article, { getState }) => {
  const state: PublishStatusType<MediumDataProps> = getState().medium;
  const response: AxiosResponse = await axios.post(state.publishURL, article);

  // if response successful return success message
  if (response.statusText === "OK") {
    const successMessage = "Medium Post Successfully Published!";
    console.log(successMessage);
    return successMessage;
  } else return "";
});

export const mediumSlice = createSlice({
  name: "medium",
  initialState,
  reducers: {
    saveData(state, action: PayloadAction<MediumDataProps>) {
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

export const { saveData } = mediumSlice.actions;
export default mediumSlice.reducer;
