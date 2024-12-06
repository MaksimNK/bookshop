import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchBooksCategory = createAsyncThunk(
  'books/fetchBooksByCategory', 
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        params: { category },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchLastestBook = createAsyncThunk(
  'books/fetchLastestBook', 
  async(_, {rejectWithValue}) => {
    try {
      const response = await axios.get(`${API_URL}/lastes`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchBooksPublishing = createAsyncThunk(
  'books/fetchBooksByPublishing', 
  async (publishing, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, { params: { publishing } });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchBooksbyId = createAsyncThunk('books/fetchBooksbyId', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const searchBooksByTitle = createAsyncThunk(
  'books/searchBooksByTitle',
  async (title, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: { title },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    book: null,
    favoriteBooks: JSON.parse(localStorage.getItem('favoriteBooks')) || [],
    basketBooks: JSON.parse(localStorage.getItem('basketBooks')) || [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addToFavorites: (state, action) => {
      const bookExists = state.favoriteBooks.some(book => book.id === action.payload.id);
      if (bookExists) {
        state.favoriteBooks = state.favoriteBooks.filter(book => book.id !== action.payload.id);
      } else {
        state.favoriteBooks.push(action.payload);
      }
      localStorage.setItem('favoriteBooks', JSON.stringify(state.favoriteBooks));
    },
    addToBasket: (state, action) => {
      const bookExists = state.basketBooks.some(book => book.id === action.payload.id);
      if (bookExists) {
        state.basketBooks = state.basketBooks.filter(book => book.id !== action.payload.id);
      } else {
        state.basketBooks.push(action.payload);
      }
      localStorage.setItem('basketBooks', JSON.stringify(state.basketBooks));
    },
    removeFromFavorites: (state, action) => {
      state.favoriteBooks = state.favoriteBooks.filter(book => book.id !== action.payload.id);
      localStorage.setItem('favoriteBooks', JSON.stringify(state.favoriteBooks));
    },
    removeFromBasket: (state, action) => {
      state.basketBooks = state.basketBooks.filter(book => book.id !== action.payload.id);
      localStorage.setItem('basketBooks', JSON.stringify(state.basketBooks));
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setBookById: (state, action) => {
      state.book = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchBooksbyId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksbyId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.book = action.payload;
      })
      .addCase(fetchBooksbyId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(searchBooksByTitle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(searchBooksByTitle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchBooksCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
        console.log('Fetched books by category:', action.payload);
      })
      .addCase(fetchBooksPublishing.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
        console.log('Fetched books by category:', action.payload);
      })
      .addCase(fetchBooksCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "An unexpected error occurred";
      })
      .addCase(fetchBooksPublishing.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || "An unexpected error occurred";
      })
      .addCase(fetchLastestBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchLastestBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "An unexpected error occurred";
      })
      ;

  
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  addToBasket,
  removeFromBasket,
  setBooks,
  setBookById,
} = booksSlice.actions;

export default booksSlice.reducer;
