import { get, post } from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  status: "idle",
  error: null,
  isLoading: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const data = await post("/api/auth/login", credentials);
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkApi) => {
    try {
      const data = await post("/api/auth/register", userInfo);
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getMe = createAsyncThunk("/api/auth/me", async () => {
  try {
    const response = await get("/api/auth/me");
    return response;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkApi.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("/api/auth/logout", async () => {
  try {
    const response = await post("/api/auth/logout");
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkApi.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetErrors: (state) => {
      state.error = null;
      state.message = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.status = "failed";
        state.error = action.payload;
      });
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        console.log("Logout succes");
      })
      .addCase(logout.rejected, (state) => {
        state.status = "failed";
        console.log("Logout failed");
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
        state.status = "failed";
      });
  },
});

export const { resetErrors } = authSlice.actions;

export default authSlice.reducer;
