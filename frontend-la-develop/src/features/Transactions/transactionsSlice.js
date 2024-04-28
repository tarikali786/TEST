import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deposit, withdraw } from "./transactionsAPI";

const initialState = {
  data: [],
  error: null,
  status: "idle",
};
export const withdrawAsync = createAsyncThunk(
  "transction/withdraw",
  async (senData) => {
    const response = await withdraw(senData);
    return response.data;
  }
);
export const depositAsync = createAsyncThunk(
  "transction/deposit",
  async (senData) => {
    const response = await deposit(senData);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "transction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(withdrawAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(withdrawAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(withdrawAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(depositAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(depositAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(depositAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});
export const selectTransactionsData = (state) => state.transction?.data || [];



export default counterSlice.reducer;
