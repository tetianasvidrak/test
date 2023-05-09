import { createSlice } from "@reduxjs/toolkit";

const followSlice = createSlice({
  name: "follow",
  initialState: {
    ids: [],
  },
  reducers: {
    toggleFollows(state, action) {
      if (state.ids.includes(action.payload)) {
        state.ids = [...state.ids.filter((id) => id !== action.payload)];
      } else {
        state.ids = [...state.ids, action.payload];
      }
    },
  },
});
export const { toggleFollows } = followSlice.actions;
export const followReducer = followSlice.reducer;
