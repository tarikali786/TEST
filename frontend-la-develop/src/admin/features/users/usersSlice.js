import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, userUpdate, users } from "./usersAPI";

const initialState = {
  message: null,
  error: null,
  user: {},
  data: [],
  total: 0,
  totalPages: 0,
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
  "user/update",
  async (senData) => {
    const response = await userUpdate(senData);
    return response.data;
  }
);
export const Slice = createSlice({
  name: "users",
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
      .addCase(usersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(usersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload?.data || [];
        state.total = action.payload?.total || 0;
        state.totalPages = action.payload?.totalPages || 0;
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
        state.message = action.payload.message;
      })
      .addCase(userUpdateAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});
export const { clearMessage, clearError } = Slice.actions;

export const selectMessage = (state) => state.users?.message || null;
export const selectError = (state) => state.users?.error?.err || null;
export const selectUser = (state) => state.users?.user?.data || {};
export const selectUsers = (state) => state.users?.data || [];
export const selectTotalUsers = (state) => state.users?.total || 0;
export const selectTotalPages = (state) => state.users?.totalPages || 0;

export default Slice.reducer;
