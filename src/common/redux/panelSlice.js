import { createSlice } from "@reduxjs/toolkit";

import { toFixed2 } from "../../utils/toFixed2";

export const panelSlice = createSlice({
  name: "panel",
  initialState: { result: 0, value: 0, firstUnit: " " },
  reducers: {
    setValues(state, action) {
      state.value = action.payload.value;
      state.result = toFixed2(
        action.payload.value * CONSTANTS[state.firstUnit]
      );
      return state;
    },
    setUnits(state, action) {
      state.firstUnit = action.payload.firstUnit;
      state.result =
        toFixed2(state.value * CONSTANTS[action.payload.firstUnit]) +
        " " +
        SECOND_UNIT[state.firstUnit];
      return state;
    },
  },
});

export const { setValues, setUnits } = panelSlice.actions;
export default panelSlice.reducer;

const CONSTANTS = {
  km: 1.8,
  miles: 0.62,
  m: 3.28084,
  ft: 0.3048,
  cm: 0.393701,
  in: 2.54,
};

const SECOND_UNIT = {
  km: "miles",
  miles: "km",
  m: "ft",
  ft: "m",
  cm: "in",
  in: "cm",
};
