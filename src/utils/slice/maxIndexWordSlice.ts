import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface maxIndexWordState {
  value: number;
}

const initialState: maxIndexWordState = {
  value: 0,
};

export const maxIndexWordSlice = createSlice({
  name: "maxIndexWord",
  initialState,
  reducers: {
    incrementMax: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementMax } = maxIndexWordSlice.actions;

export default maxIndexWordSlice.reducer;
