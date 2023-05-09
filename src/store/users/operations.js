import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../services/api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const users = await getUsers();
      return users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
