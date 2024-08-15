import { get, post, remove } from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  wishlist: [],
  isLoading: false,
  error: null,
  message: null,
};

export const postWishlist = createAsyncThunk(
  "/addwishlist",
  async ({ userId, bookId }, thunkApi) => {
    try {
      const response = await post("/api/book/wishlist/add", { userId, bookId });
      toast.success("Buku ditambahkan ke wishlist");
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getWishlist = createAsyncThunk("/getwishlist", async ( thunkApi) => {
  try {
    const response = await get("/api/book/wishlist/get");
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkApi.rejectWithValue(message);
  }
});

export const deleteWishlist = createAsyncThunk("/delete-wishhlist",async(id, thunkApi) =>{
    try {
        const response = await remove("/api/book/wishlist/delete/" + id);
        toast.success("Buku dihapus dari wishlist");
        return response
    } catch (error) {
        const message = error.response?.data?.message || error.message;
        return thunkApi.rejectWithValue(message);
    }
})

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    resetErrors: (state) => {
      state.error = null;
      state.message = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postWishlist.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(postWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(postWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = null;
      })
      .addCase(getWishlist.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = null;
      })
      .addCase(deleteWishlist.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = null;
      });
  },
});

export const { resetErrors } = wishlistSlice.actions;
export default wishlistSlice.reducer;
