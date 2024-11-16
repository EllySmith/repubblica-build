import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPageState = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/fetch-page');
    const articles = response.data.articles;
    dispatch(addArticles(articles));
  } catch (error) {
    console.error('Error fetching page:', error);
  }
};
  

const initialState = {
     articles: [],
     chosenTag: null,
     tags: [
          'economia', 'politica', 'attualità', 'arte', 'società', 'sport', 'calcio',
          'tecnologia', 'scienza', 'salute', 'ambiente', 'cultura', 'musica',
          'cinema', 'teatro', 'letteratura', 'viaggi', 'cibo', 'moda',
          'storia', 'educazione', 'finanza', 'lavoro', 'immigrazione', 'religione',
          'sicurezza', 'innovazione', 'startup', 'clima', 'ecologia', 'diritti umani',
          'fotografia', 'automobili', 'motori', 'videogiochi', 'social media',
          'televisione', 'intrattenimento', 'fotografia', 'fitness', 'benessere',
          'spettacolo', 'giustizia', 'famiglia', 'psicologia', 'filosofia', 'scuola',
          'università', 'pandemia', 'vaccini', 'guerra', 'terrorismo', 'diplomazia',
          'criptovalute', 'borsa', 'mercato', 'investimenti', 'real estate',
          'turismo', 'eventi', 'fiere', 'festival', 'tecniche', 'robotica',
          'intelligenza artificiale', 'machine learning', 'blockchain',
          'cybersecurity', 'privacy', 'diritto', 'legislazione', 'politiche sociali'
     ],
};

const modalSlice = createSlice({
     name: 'content',
     initialState,
     reducers: {
          choseTag: (state, action) => ({
               ...state,
               choseTag: action.payload,
          }),
          addArticles: (state, action) => ({
               ...state,
               articles: action.payload,
          })
     },
});

export const { choseTag, addArticles } = modalSlice.actions;
export default modalSlice.reducer;