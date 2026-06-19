import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  count: number;
}
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
