import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, create, deleteAnouncement } from "./announcementsAPI";
import { PAGE_SIZE } from "../../../Common/CONSTANTS";

const initialState = {
  message: null,
  error: null,
  total: 0,
  success: false,
  totalPages: 0,
  status: "idle",
  data: [],
};
export const getAsync = createAsyncThunk("announcements", async (data) => {
  const response = await get(data);
  return response.data;
});
export const createAsync = createAsyncThunk(
  "announcements/create",
  async (senData) => {
    const response = await create(senData);
    return response.data;
  }
);
export const deleteAnouncementAsync = createAsyncThunk(
  "announcements/delete",
  async (senData) => {
    const response = await deleteAnouncement(senData);
    return response.data;
  }
);
export const Slice = createSlice({
  name: "announcements",
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
      .addCase(getAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload?.data || [];
        state.total = action.payload?.total || 0;
        state.totalPages = action.payload?.totalPages || 0;
      })
      .addCase(getAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(createAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload?.message || null;
        state.success = action.payload?.success || false;
      })
      .addCase(createAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(deleteAnouncementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteAnouncementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload?.message || null;
        state.success = action.payload?.success || false;
        // Update the data:
        state.data = state.data.filter(
          (data) => data._id !== action.payload?.id
        );
        state.total = state.data.length;
        state.totalPages = Math.ceil(state.total / PAGE_SIZE);
      })
      .addCase(deleteAnouncementAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});
export const { clearMessage, clearError, clearSuccess } = Slice.actions;

export const selectMessage = (state) => state.announcements?.message || null;
export const selectError = (state) => state.announcements?.error?.err || null;
export const selectData = (state) => state.announcements?.data || [];
export const selectSuccess = (state) => state.announcements?.success || false;

export const selectTotal = (state) => state.announcements?.total || 0;
export const selectTotalPages = (state) => state.announcements?.totalPages || 0;

export default Slice.reducer;
