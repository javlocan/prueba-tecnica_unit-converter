import { createSlice } from "@reduxjs/toolkit";

export const panelSlice = createSlice({
  name: "panel",
  initialState: { result: 0, value: 0, firstUnit: "" },
  reducers: {
    setValues(state, action) {
      state.value = parseFloat(action.payload.value);
      state.result = action.payload.value * CONSTANTS[state.firstUnit];

      return state;
    },
    setUnits(state, action) {
      state.firstUnit = action.payload.firstUnit;
      state.result = state.value * CONSTANTS[action.payload.firstUnit];
      return state;
    },
    swapThings(state) {
      window.document.getElementById("unit-value").value = state.result;
      return {
        value: state.result,
        result: state.value,
        firstUnit: SECOND_UNIT[state.firstUnit],
      };
    },
  },
});

export const { setValues, setUnits, swapThings } = panelSlice.actions;
export default panelSlice.reducer;

const CONSTANTS = {
  "": 0,
  km: 1.8,
  miles: 0.62,
  m: 3.28084,
  ft: 0.3048,
  cm: 0.393701,
  in: 2.54,
};

const SECOND_UNIT = {
  "": "",
  km: "miles",
  miles: "km",
  m: "ft",
  ft: "m",
  cm: "in",
  in: "cm",
};
