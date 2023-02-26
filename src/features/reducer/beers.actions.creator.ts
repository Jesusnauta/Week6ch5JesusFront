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

export function addCreator(finalBeers: BeersStructure): any {
  throw new Error("Function not exected.");
}
export function updateCreator(finalBeers: void): any {
  throw new Error("Function not exected.");
}

export function deleteCreator(id: number): any {
  throw new Error("Function not exected.");
}
