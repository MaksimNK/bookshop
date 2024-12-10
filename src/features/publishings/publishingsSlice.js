import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPublishings = createAsyncThunk('publishings/fetchPublishings', async () => {
  const response = await fetch('http://localhost:5000/category/publishings');
  return await response.json();
});

const publishingsSlice = createSlice({
  name: 'publishings',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublishings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPublishings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPublishings.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default publishingsSlice.reducer;
