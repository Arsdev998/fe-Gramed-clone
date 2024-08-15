import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice.js';
import authWishlistReducer from '../features/wishlistSlice.js'


const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: authWishlistReducer
  },
});


export default store;