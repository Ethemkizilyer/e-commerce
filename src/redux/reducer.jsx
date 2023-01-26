import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  products: [],
  data:[]
};

export const findItemIndex = (state, action) => {
  const nami=state.products?.findIndex((item) => item.id === action.payload.id);
  return nami
};

export const getData = createAsyncThunk("product/getProductData", async () => {
  try {
    const resp = await fetch("https://fakestoreapi.com/products?limit=6");
    // console.log(data);
    return resp.json();
  } catch (error) {
    return console.log(error.message);
  }
});

export const wordSlice = createSlice({
  name: "speed",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
console.log(action.payload);
console.log(state.products);
console.log(state.loading);
      let sameItemFinder = findItemIndex(state, action);
console.log(sameItemFinder);
      if (sameItemFinder >= 0) {
        let copy = [...state.products];
        copy[sameItemFinder].qty++;
        copy[sameItemFinder].price += action.payload.price;
        
      } else {
        let copyItem = [...state.products];
        copyItem.push(action.payload);
       state.products=copyItem
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    qtyIncrease: (state, action) => {
      let sameItemFinder = findItemIndex(state, action);
      let copy = state.products;
      copy[sameItemFinder].qty++;
      let oneItemPrice = action.payload.price / action.payload.qty;
      copy[sameItemFinder].price += oneItemPrice;
   
    },
    qtyDecrease: (state, action) => {
      let sameItemFinder = findItemIndex(state, action);
      let copy = state.products;
      copy[sameItemFinder].qty--;
      let oneItemPrice = action.payload.price / action.payload.qty;
      copy[sameItemFinder].price -= oneItemPrice;
     
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { addToBasket, deleteItem, qtyIncrease, qtyDecrease } =
  wordSlice.actions;

export default wordSlice.reducer;
