import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  error: null,
  data: [],
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
   /*  builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    }) */
  },
});

export default counterSlice.reducer;
