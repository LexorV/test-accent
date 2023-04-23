import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import mainPageStateReduser from './mainPage';

const store = configureStore({
  reducer: {
    main: mainPageStateReduser,
  },
  middleware: [thunk],
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
