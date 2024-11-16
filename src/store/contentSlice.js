import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPageState = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/fetch-page');
    const articles = response.data.articles;
    const menuItems = response.data.menuItems;
    dispatch(addArticles(articles));
    dispatch(addMenuItems(menuItems));
  } catch (error) {
    console.error('Error fetching page:', error);
  }
};
  

const initialState = {
     articles: [],
     menuItems: [],
};

const modalSlice = createSlice({
     name: 'content',
     initialState,
     reducers: {
          choseTag: (state, action) => ({
               ...state,
               choseTag: action.payload,
          }),
          addMenuItems: (state, action) => ({
               ...state,
               menuItems: action.payload,
          }),
          addArticles: (state, action) => ({
               ...state,
               articles: action.payload,
          })
     },
});

export const { choseTag, addArticles, addMenuItems } = modalSlice.actions;
export default modalSlice.reducer;