import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authslice';
import bookReducer from '../features/book/bookSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import publishingsReducer from '../features/publishings/publishingsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
    categories: categoriesReducer,
    publishings: publishingsReducer
  },
});

export default store;
