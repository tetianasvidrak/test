import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "all",
    label: "All",
  },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload.value;
      state.label = action.payload.label;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
