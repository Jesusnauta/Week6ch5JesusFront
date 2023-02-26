import { createAction } from "@reduxjs/toolkit";
import { BeersStructure } from "../models/beers";
import { beerActions } from "./beers.actions.types";

export const loadAllCreator = createAction<BeersStructure[]>(
  beerActions.LoadAll
);

export const editBeersCreator = createAction<Partial<BeersStructure>>(
  beerActions.EditBeer
);

export const createBeersCreator = createAction<BeersStructure>(
  beerActions.createBeer
);

export const deleteBeersCreator = createAction<BeersStructure["id"]>(
  beerActions.DeleteBeer
);
