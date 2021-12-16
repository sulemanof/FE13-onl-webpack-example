import { createSlice } from '@reduxjs/toolkit';

const clickerSlice = createSlice({
  name: 'CLIKCER',
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
    reset() {
      return 0;
    },
  },
});

export const { increment, decrement, reset } = clickerSlice.actions;
export const { reducer: clickerReducer } = clickerSlice;
