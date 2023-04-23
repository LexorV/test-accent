import { createSlice } from '@reduxjs/toolkit';
import products from '../constans/mockData/products.json';
import brands from '../constans/mockData/brands.json';

const initialState = {
  products,
  brands,
};

const mainPageStateSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setProducts: (state, action) => ({
      ...state, products: action.payload,
    }),
    setBrands: (state, action) => ({
      ...state, products: action.payload,
    }),

  },
});
const mainPageStateReduser = mainPageStateSlice.reducer;
export const {
  setProducts,
  setBrands,
} = mainPageStateSlice.actions;
export default mainPageStateReduser;
