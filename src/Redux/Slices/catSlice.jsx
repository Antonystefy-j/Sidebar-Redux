import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API CALL 1
export const getCatFacts = createAsyncThunk(
  "cats1/getCatFacts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// API CALL 2
export const getCoinDesk = createAsyncThunk(
  "cats1/getCoinDesk",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const catSlice = createSlice({
  name: "cats1",
  initialState: {
    facts: [],
    factsLoading: false,
    factsError: null,

    coin: [],
    coinLoading: false,
    coinError: null,
  },

  extraReducers: (builder) => {
    builder
    
      .addCase(getCatFacts.pending, (state) => {
        state.factsLoading = true;
        state.factsError = null;
      })
      .addCase(getCatFacts.fulfilled, (state, action) => {
        state.factsLoading = false;
        state.facts = action.payload;
      })
      .addCase(getCatFacts.rejected, (state, action) => {
        state.factsLoading = false;
        state.factsError = action.payload;
      })

      
      .addCase(getCoinDesk.pending, (state) => {
        state.coinLoading = true;
        state.coinError = null;
      })
      .addCase(getCoinDesk.fulfilled, (state, action) => {
        state.coinLoading = false;
        state.coin = action.payload;
      })
      .addCase(getCoinDesk.rejected, (state, action) => {
        state.coinLoading = false;
        state.coinError = action.payload;
      });
  },
});

export default catSlice.reducer;
