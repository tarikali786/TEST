import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { programData } from './programAPI';

const initialState = {
  data: [],
  status: 'idle',
};
export const programDataAsync = createAsyncThunk(
  'program/Data',
  async () => {
    const response = await programData();
    return response.data;
  }
);

export const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(programDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(programDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});


export const selectprogramData = (state) => state.program.data?.data;


export default programSlice.reducer;
