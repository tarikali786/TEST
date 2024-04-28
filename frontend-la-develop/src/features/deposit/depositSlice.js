import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deposit } from "./depositAPI";

const initialState = {
  message: null,
  status: "idle",
  error: null,
};
export const depositAsync = createAsyncThunk(
  "deposit/deposit",
  async (data) => {
    const response = await deposit(data);
    return response.data;
  }
);

export const depositSlice = createSlice({
  name: "deposit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(depositAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(depositAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload;
      })
      .addCase(depositAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const selectDepositMessage = (state) => state.deposit.message;
export const selectDepositError = (state) => state.deposit.error;

export default depositSlice.reducer;
