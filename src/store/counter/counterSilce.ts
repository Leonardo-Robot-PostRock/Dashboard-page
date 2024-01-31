import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 5,
};

const counterSilce = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const {} = counterSilce.actions;

export default counterSilce.reducer;
