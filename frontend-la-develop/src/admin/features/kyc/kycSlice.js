import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, userKycUpdate, users } from "./kycAPI";

const initialState = {
  message: null,
  error: null,
  user: {},
  data: {
    data: [],
    total: 0,
    totalPages: 0,
  },
  totalUsers: 0,
  status: "idle",
};
export const usersAsync = createAsyncThunk("users", async (senData) => {
  const response = await users(senData);
  return response.data;
});
export const getUserAsync = createAsyncThunk("user/data", async (senData) => {
  const response = await getUser(senData);
  return response.data;
});
export const userUpdateAsync = createAsyncThunk(
  "user/kyc/update",
  async (senData) => {
    const response = await userKycUpdate(senData);
    return response.data;
  }
);
export const kycUsersSlice = createSlice({
  name: "users/kyc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(usersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(usersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(usersAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(userUpdateAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userUpdateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload;
      })
      .addCase(userUpdateAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});
export const selectMessage = (state) => state.kycLogs?.message?.message || null;
export const selectError = (state) => state.kycLogs?.error?.err || null;
export const selectUser = (state) => state.kycLogs?.user?.data || {};
export const selectUsers = (state) => state.kycLogs?.data?.data || [];
export const selectTotalUsers = (state) => state.kycLogs?.data?.total || [];
export const selectTotalPages = (state) => state.kycLogs?.data?.totalPages || 0;

export default kycUsersSlice.reducer;
