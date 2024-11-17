import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchScrapedData = createAsyncThunk(
  'modal/fetchScrapedData',
  async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3001/scrape', {
        params: { url: url }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching scraped data:', error);
      return rejectWithValue('Failed to fetch scraped data');
    }
  }
);

const initialState = {
  isOpen: false,
  title: null,
  body: null,
  date: null,
  link: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addContent: (state, action) => {
      state.title = action.payload.title;
      state.body = action.payload.body;
      state.date = action.payload.date;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScrapedData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchScrapedData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.title = action.payload.title;
        state.body = action.payload.body;
        state.date = action.payload.date;
        state.link = action.payload.link;
      })
      .addCase(fetchScrapedData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { fetchData, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
