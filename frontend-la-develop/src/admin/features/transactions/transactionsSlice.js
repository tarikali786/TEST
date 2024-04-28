import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transactionUpdate, transactions } from "./transactionsAPI";

const initialState = {
  message: null,
  error: null,
  total: 0,
  totalPages: 0,
  data: [],
  status: "idle",
};
export const transactionsAsync = createAsyncThunk(
  "transactions",
  async (senData) => {
    const response = await transactions(senData);
    return response.data;
  }
);
export const transactionUpdateAsync = createAsyncThunk(
  "transactions/update",
  async (senData, { rejectWithValue }) => {
    try {
      const response = await transactionUpdate(senData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const Slice = createSlice({
  name: "transactions",
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
      .addCase(transactionsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(transactionsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload?.data || [];
        state.total = action.payload?.total || 0;
        state.totalPages = action.payload?.totalPages || 0;
      })
      .addCase(transactionsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(transactionUpdateAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(transactionUpdateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload?.message;
      })
      .addCase(transactionUpdateAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});
export const { clearMessage, clearError, clearSuccess } = Slice.actions;

export const selectMessage = (state) => state.transactions?.message || null;
export const selectError = (state) => state.transactions?.error?.err || null;
export const selectData = (state) => state.transactions?.data || [];
export const selectTotal = (state) => state.transactions?.total || 0;
export const selectTotalPages = (state) => state.transactions?.totalPages || 0;

export default Slice.reducer;
