import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { analytics } from "./dashboardAPI";

const initialState = {
  data: {},
  status: "idle",
};
export const analyticsAsync = createAsyncThunk("analytics/Data", async () => {
  const response = await analytics();
  return response.data;
});

export const programSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(analyticsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(analyticsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export const selectAnalytics = (state) => state.analytics.data;

export default programSlice.reducer;
