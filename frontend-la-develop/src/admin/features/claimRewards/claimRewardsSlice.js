import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { claimRewardUpdate, claimRewards } from "./claimRewardsAPI";
import { PAGE_SIZE } from "../../../Common/CONSTANTS";

const initialState = {
  message: null,
  error: null,
  user: {},
  total: 0,
  totalPages: 0,
  success: false,
  status: "idle",
  data: [],
};
export const claimRewardsAsync = createAsyncThunk(
  "claimRewards",
  async (senData, { rejectWithValue }) => {
    try {
      const response = await claimRewards(senData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const claimRewardUpdateAsync = createAsyncThunk(
  "claimRewards/update",
  async (senData, { rejectWithValue }) => {
    try {
      const response = await claimRewardUpdate(senData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const Slice = createSlice({
  name: "claimRewards",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(claimRewardsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(claimRewardsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload?.data || [];
        state.total = action.payload?.total || 0;
        state.totalPages = action.payload?.totalPages || 0;
      })
      .addCase(claimRewardsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(claimRewardUpdateAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(claimRewardUpdateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload?.message;
        state.success = action.payload?.success || false;
        // Update the data:
        state.data = state.data.filter(
          (data) => data?.reward?._id !== action.payload?.id
        );
        state.total = state.data.length;
        state.totalPages = Math.ceil(state.total / PAGE_SIZE);
      })
      .addCase(claimRewardUpdateAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload?.error?.message;
      });
  },
});
export const { clearMessage, clearError, clearSuccess } = Slice.actions;
export const selectMessage = (state) => state.claimedRewards?.message || null;
export const selectError = (state) => state.claimedRewards?.error || null;
export const selectUser = (state) => state.claimedRewards?.user?.data || {};
export const selectData = (state) => state.claimedRewards?.data || [];
export const selectTotalUsers = (state) => state.claimedRewards?.total || [];
export const selectTotalPages = (state) =>
  state.claimedRewards?.totalPages || 0;

export default Slice.reducer;
