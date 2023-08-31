import { createSlice } from "@reduxjs/toolkit";
import { toFixed2 } from "../../utils";

export const favListSlice = createSlice({
  name: "favList",
  initialState: [],
  reducers: {
    addFav(state, action) {
      let id = `${action.payload.firstUnit}${action.payload.firstValue}`;
      state.forEach((fav) => {
        if (fav.id == id) {
          id = 0;
          alert("Ups! It's repeated. Try again.");
        }
      });

      if (id !== 0) {
        state.push({
          id: id,
          firstValue: action.payload.firstValue,
          firstUnit: action.payload.firstUnit,
          secondValue: toFixed2(
            CONSTANTS[action.payload.firstUnit] * action.payload.firstValue
          ),
          secondUnit: SECOND_UNIT[action.payload.firstUnit],
        });
      }
    },
    // ESTO ESTA YENDO FATAL
    // REPASAR BIEN!
    // A VER SI LO ENTREGAMOS MAÑANA
    removeFav(state, action) {
      let favN;
      state.forEach((fav, i) => {
        if (fav.id === action.payload.id) favN = i;
      });
      state.splice(favN, 1);
    },
  },
});

export const { addFav, removeFav } = favListSlice.actions;
export default favListSlice.reducer;

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
