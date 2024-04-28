import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { withdrawal } from "./withdrawalAPI";

const initialState = {
  message: null,
  status: "idle",
  error: null,
};
export const withdrawalAsync = createAsyncThunk(
  "transction/withdraw",
  async (data, { rejectWithValue }) => {
    try {
      const response = await withdrawal(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const withdrawalSlice = createSlice({
  name: "withdrawal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(withdrawalAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(withdrawalAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload;
      })
      .addCase(withdrawalAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const selectWithdrawalMessage = (state) => state.withdrawal.message;
export const selectWithdrawalError = (state) =>
  state.withdrawal.error?.err?.message;

export default withdrawalSlice.reducer;
