import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const couterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value++;
    },
    amountAdded: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state) => {
      state.value--;
    },
  },
});

export const { increase, decrease, amountAdded } = couterSlice.actions;
export default couterSlice.reducer;
