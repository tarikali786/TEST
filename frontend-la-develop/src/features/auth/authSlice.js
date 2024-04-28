import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  login,
  createUser,
  signOut,
  CheckAuth,
  UpdateAuth,
  checkDataExist,
} from "./authAPI";

const initialState = {
  checkAuth: false,
  status: "idle",
  authInfo: null,
  error: null,
};
export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userData = null, { rejectWithValue }) => {
    try {
      const response = await createUser(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const checkDataExistAsync = createAsyncThunk(
  "auth/checkDataExist",
  async (userData = null, { rejectWithValue }) => {
    try {
      const response = await checkDataExist(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (loginInfo = null, { rejectWithValue }) => {
    try {
      const response = await login(loginInfo);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const checkAuthAsync = createAsyncThunk("auth/check", async () => {
  try {
    const response = await CheckAuth();
    return response.data;
  } catch (error) {}
});
export const signOutAsync = createAsyncThunk("auth/signOut", async (userId) => {
  const response = await signOut(userId);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});
export const UpdateAuthAsync = createAsyncThunk(
  "auth/Update",
  async (update) => {
    const response = await UpdateAuth(update);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetDataIsValid: (state) => {
      state.dataIsValid = false;
    },
    resetError: (state) => {
      state.error = null;
    },
    resetDataValidaionError: (state) => {
      state.dataValidaionError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.authInfo = action.payload;
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.authInfo = action.payload.user;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(checkAuthAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.authInfo = action.payload;
        state.checkAuth = true;
      })
      .addCase(checkAuthAsync.rejected, (state, action) => {
        state.status = "idle";
        state.checkAuth = true;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.authInfo = null;
      })
      .addCase(UpdateAuthAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateAuthAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.authInfo = action.payload;
      });
  },
});
export const selectAuthInfo = (state) => state.auth.authInfo;
export const selectcheckAuth = (state) => state.auth.checkAuth;
export const selectAuthError = (state) => state.auth.error?.err?.message;
  export const selectAuthStatus = (state) => state.auth.status
export const { resetDataValidaionError, resetDataIsValid, resetError } =
  userSlice.actions;
export default userSlice.reducer;
