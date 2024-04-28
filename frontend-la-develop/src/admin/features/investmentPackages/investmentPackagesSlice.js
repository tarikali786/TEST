import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProftConfig, updateProftConfig } from "./investmentPackagesAPI";

const initialState = {
  message: null,
  error: null,
  data: {},
  status: "idle",
};
export const getProftConfigAsync = createAsyncThunk("profit", async () => {
  const response = await getProftConfig();
  return response.data;
});
export const updateProftConfigAsync = createAsyncThunk(
  "profit/update",
  async (senData) => {
    const response = await updateProftConfig(senData);
    return response.data;
  }
);
export const Slice = createSlice({
  name: "profit",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProftConfigAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProftConfigAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload?.data;
      })
      .addCase(getProftConfigAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(updateProftConfigAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProftConfigAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload?.message;
        state.data = action.payload?.data?.profit;
      })
      .addCase(updateProftConfigAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const { clearMessage, clearError } = Slice.actions;

export const selectStatus = (state) => state.profitConfig?.status;
export const selectMessage = (state) => state.profitConfig?.message || null;
export const selectError = (state) => state.profitConfig?.error || null;
export const selectProgramConfig = (state) => state.profitConfig?.data || {};

export default Slice.reducer;
