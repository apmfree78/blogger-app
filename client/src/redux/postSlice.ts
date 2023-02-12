import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    savePost(state, action: PayloadAction<string>) {
      state = action.payload;
      return state;
    },
  },
});

export const { savePost } = postSlice.actions;
export default postSlice.reducer;
