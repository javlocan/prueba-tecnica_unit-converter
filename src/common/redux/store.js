import { configureStore } from "@reduxjs/toolkit";
import favListSlice from "./favListSlice";
import panelSlice from "./panelSlice";

export const store = configureStore({
  reducer: {
    favList: favListSlice,
    panel: panelSlice,
  },
});
