import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  products: [],
};

export const findItemIndex = (state, action) => {
  return state.products?.findIndex((item) => item.id === action.payload.id);
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
      let sameItemFinder = findItemIndex(state, action);
console.log(sameItemFinder);
      if (sameItemFinder >= 0) {
        let copy = [...state.products];
        copy[sameItemFinder].qty++;
        copy[sameItemFinder].price += action.payload.price;
        return copy;
      } else {
        let copyItem = [...state.products];
        copyItem.push(action.payload);
        return copyItem;
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.data.id);
    },
    qtyIncrease: (state, action) => {
      let sameItemFinder = findItemIndex(state, action);
      let copy = [...state];
      copy[sameItemFinder].qty++;
      let oneItemPrice = action.data.price / action.data.qty;
      copy[sameItemFinder].price += oneItemPrice;
      return copy;
    },
    qtyDecrease: (state, action) => {
      let sameItemFinder = findItemIndex(state, action);
      let copy = [...state];
      copy[sameItemFinder].qty--;
      let oneItemPrice = action.data.price / action.data.qty;
      copy[sameItemFinder].price -= oneItemPrice;
      return copy;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
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
