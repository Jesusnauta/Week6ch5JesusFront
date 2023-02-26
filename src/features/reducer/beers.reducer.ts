import { createReducer } from "@reduxjs/toolkit";
import { BeersStructure } from "../models/beers";
import * as ac from "./beers.actions.creator";

const initialState: BeersStructure[] = [];

export const BeersReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadAllCreator, (_state, { payload }) => payload);

  builder.addCase(ac.createBeersCreator, (state, { payload }) => [
    ...state,
    payload,
  ]);

  builder.addCase(ac.editBeersCreator, (state, { payload }) => {
    state.map((item) => (item.id === payload.id ? payload : item));
  });

  builder.addCase(ac.deleteBeersCreator, (state, { payload }) => {
    state.filter((item) => item.id !== payload);
  });

  builder.addDefaultCase((state) => state);
});
