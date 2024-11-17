import { configureStore } from '@reduxjs/toolkit';

import contentReducer from './contentSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    content: contentReducer,
    modal: modalReducer,
  },
});

export default store;