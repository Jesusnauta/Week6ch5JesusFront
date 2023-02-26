import { configureStore } from "@reduxjs/toolkit";
import { beerReducer } from "../features/reducer/beers.reducer";

export const store = configureStore({
  reducer: {
    beers: beerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
