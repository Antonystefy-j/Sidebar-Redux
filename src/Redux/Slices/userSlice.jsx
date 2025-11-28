import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserDetails = createAsyncThunk(
  "User/getUserDetails",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const userSlice = createSlice({
  name: "User",
  initialState: {
    User: [],
    UserLoading: false,
    UserError: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.UserLoading = true;
        state.UserError = null;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.UserLoading = false;
        state.User = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.UserLoading = false;
        state.UserError = action.payload;
      });
  },
});

export default userSlice.reducer;
