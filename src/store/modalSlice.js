import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

async function fetchData(url) {
     try {
       const response = await axios.get('http://localhost:3000/scrape', {
         params: { url: url }
       });
   
       const data = response.data;
   
       return data;
     } catch (error) {
       console.error('Error fetching scraped data:', error);
       throw new Error('Failed to fetch scraped data');
     }
   }


   const initialState = {
     isOpen: false,
     title: null,
     body: null,
     date: null,
   };

   const modalSlice = createSlice({
     name: 'modal',
     initialState,
     reducers: {
          addContent: (state, action) => ({
               ...state,
               title: action.payload.title,
               body: action.payload.body,
               date: action.payload.date,
          })},
     })


export const { fetchScrapedData } = modalSlice.actions;
export default modalSlice.reducer;