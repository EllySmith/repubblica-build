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
     headerMenuItems: [{name: 'Sezioni', contents: []}, {name: 'Edizioni Locali', contents: null}, {name: 'Il Quotidiano', contents: null}, {name: 'Servizi', contents: null}, {name: 'A-Z', contents: null}],
     sideBar: [
          { category: "Politica", link: "https://www.repubblica.it/politica/?ref=RHHD-MS" },
          { category: "Economia", link: "https://www.repubblica.it/economia/?ref=RHHD-MS" },
          { category: "Esteri", link: "https://www.repubblica.it/esteri/?ref=RHHD-MS" },
          { category: "Italia", link: "https://www.repubblica.it/italia/?ref=RHHD-MS" },
          { category: "Cronaca", link: "https://www.repubblica.it/cronaca/?ref=RHHD-MS" },
          { category: "Commenti", link: "https://www.repubblica.it/commenti/?ref=RHHD-MS" },
          { category: "Scuola", link: "https://www.repubblica.it/scuola/?ref=RHHD-MS" },
          { category: "Cultura", link: "https://www.repubblica.it/cultura/?ref=RHHD-MS" },
          { category: "Robinson", link: "https://www.repubblica.it/robinson/?ref=RHHD-MS" },
          { category: "Venerdì", link: "https://www.repubblica.it/venerdi/?ref=RHHD-MS" },
          { category: "Sport", link: "https://www.repubblica.it/sport/?ref=RHHD-MS" },
          { category: "Spettacoli", link: "https://www.repubblica.it/spettacoli/?ref=RHHD-MS" },
          { category: "Serie Tv", link: "https://www.repubblica.it/serietv?ref=RHHD-MS" },
          { category: "Rubriche", link: "https://www.repubblica.it/rubriche/?ref=RHHD-MS" },
          { category: "Podcast", link: "https://www.repubblica.it/podcast/?ref=RHHD-MS" },
          { category: "Video", link: "https://www.repubblica.it/video/?ref=RHHD-MS" },
          { category: "Metropolis", link: "https://www.repubblica.it/rubriche/metropolis/?ref=RHHD-MS" },
          { category: "Salute", link: "https://www.repubblica.it/salute/?ref=RHHD-MS" },
          { category: "Green&Blue", link: "https://www.repubblica.it/green-and-blue/?ref=RHHD-MS" },
          { category: "Italian Tech", link: "https://www.repubblica.it/tecnologia/?ref=RHHD-MS" },
          { category: "Moda e Beauty", link: "https://www.repubblica.it/moda-e-beauty?ref=RHHD-MS" },
          { category: "Design", link: "https://design.repubblica.it/?ref=RHHD-MS" },
          { category: "Il Gusto", link: "https://www.repubblica.it/il-gusto/?ref=RHHD-MS" },
          { category: "La Zampa", link: "https://www.repubblica.it/la-zampa/?ref=RHHD-MS" },
          { category: "Motori", link: "https://www.repubblica.it/motori/?ref=RHHD-MS" },
          { category: "Viaggi", link: "https://www.repubblica.it/viaggi/?ref=RHHD-MS" },
          { category: "Vaticano", link: "https://www.repubblica.it/vaticano/?ref=RHHD-MS" },
          { category: "Londra", link: "https://www.repubblica.it/londra/?ref=RHHD-MS" },
          { category: "Elezioni", link: "https://elezioni.repubblica.it/?ref=RHHD-MS" },
          { category: "Mondo Solidale", link: "https://www.repubblica.it/solidarieta/?ref=RHHD-MS" },
          { category: "Repubblica@Scuola", link: "https://scuola.repubblica.it/?ref=RHHD-MS" },
     ],
};

const contentSlice = createSlice({
     name: 'content',
     initialState,
     reducers: {
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

export const { choseTag, addArticles, addMenuItems } = contentSlice.actions;
export default contentSlice.reducer;