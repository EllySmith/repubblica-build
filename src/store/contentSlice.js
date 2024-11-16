import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     articles: [
          {
            title: 'Il futuro dell’economia italiana',
            body: 'Un’analisi approfondita sulle sfide e opportunità per l’economia italiana nel 2024.',
            id: 101,
            tags: ['economia', 'finanza'],
            img: 'https://example.com/economy.jpg',
            importance: 'normal',
          },
          {
            title: 'Le ultime novità dal mondo politico',
            body: 'Tutti gli aggiornamenti sulla politica interna e internazionale.',
            id: 102,
            tags: ['politica', 'attualità'],
            img: 'https://example.com/politics.jpg',
            importance: 'low',
          },
          {
            title: 'Alluvione a Roma: emergenza in città',
            body: 'Roma colpita da una violenta alluvione: tutti i dettagli dell’evento catastrofico.',
            id: 104,
            tags: ['clima', 'emergenza'],
            img: 'https://example.com/flood.jpg',
            importance: 'breaking',
          },
          {
            title: 'Serie A: Il derby della Capitale',
            body: 'La partita più attesa del campionato tra Roma e Lazio.',
            id: 105,
            tags: ['sport', 'calcio'],
            img: 'https://example.com/derby.jpg',
            importance: 'normal',
          },
          {
            title: 'Startup italiane in crescita',
            body: 'Le startup più innovative in Italia nel 2024.',
            id: 106,
            tags: ['innovazione', 'startup', 'tecnologia'],
            img: 'https://example.com/startup.jpg',
            importance: 'low',
          },
          {
            title: 'Lotta al cambiamento climatico',
            body: 'Le nuove misure adottate dai paesi per combattere il cambiamento climatico.',
            id: 107,
            tags: ['ambiente', 'ecologia'],
            img: 'https://example.com/climate.jpg',
            importance: 'breaking',
          },
          {
            title: 'Cinema italiano: i film più attesi',
            body: 'Una panoramica sui film italiani in uscita quest’anno.',
            id: 108,
            tags: ['cinema', 'spettacolo'],
            img: 'https://example.com/cinema.jpg',
            importance: 'normal',
          },
          {
            title: 'Criptovalute: dove investire nel 2024',
            body: 'Guida agli investimenti nelle criptovalute più promettenti.',
            id: 109,
            tags: ['finanza', 'criptovalute'],
            img: 'https://example.com/crypto.jpg',
            importance: 'low',
          },
          {
            title: 'Salute mentale: l’importanza del benessere psicologico',
            body: 'Come prendersi cura della propria salute mentale.',
            id: 110,
            tags: ['salute', 'psicologia'],
            img: 'https://example.com/mental-health.jpg',
            importance: 'normal',
          },
          {
               title: 'Arte moderna: i nuovi trend',
               body: 'Scopri le ultime tendenze nel mondo dell’arte contemporanea.',
               id: 103,
               tags: ['arte', 'cultura'],
               img: 'https://example.com/art.jpg',
               importance: 'low',
             },
        ],        
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
          addArticle: (state, action) => ({
               ...state,
               articles: [...state.articles, action.payload]
          })
     },
});

export const { showModal, hideModal, changeModalType } = modalSlice.actions;
export default modalSlice.reducer;