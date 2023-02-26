import { BeersStructure } from "../models/beers";
import { BeersReducer } from "./beers.reducer";
import * as ac from "./beers.actions.creator";

describe("Given the beer reducer", () => {
  let mockState: BeersStructure[];
  let mockPayload: BeersStructure;

  beforeEach(() => {
    mockState = [
      { id: 1, name: "Test-1", price: 2 },
      { id: 2, name: "Test-2", price: 3 },
    ];

    mockPayload = {
      id: 2,
      name: "Test-3",
      price: 2,
    };
  });

  describe("When the action is empty", () => {
    test("Then, it should return the initial state", () => {
      const mainState = [] as BeersStructure[];
      const action = { type: "" };
      const result = BeersReducer(mainState, action);
      expect(result).toStrictEqual([]);
    });
  });

  describe("When the action is load", () => {
    test("Then, it should return the mock state", () => {
      const result = BeersReducer(mockState, ac.loadAllCreator);
      expect(result).toEqual(mockState);
    });
  });

  describe("When the action is creator", () => {
    test("Then, if the initial state is an empty array, it should return the array with the payload", () => {
      const result = BeersReducer([], ac.createBeersCreator(mockPayload));
      expect(result).toEqual([mockPayload]);
    });
  });

  describe("When the action is edit", () => {
    test("Then, it should return the mock state", () => {
      const result = BeersReducer(mockState, ac.editBeersCreator(mockPayload));
      expect(result).toEqual(mockState);
    });
  });

  describe("When the action is delete", () => {
    test("Then, the function should be called", () => {
      const result = BeersReducer(mockState, ac.deleteBeersCreator(2));
      expect(result).toEqual(mockState);
    });
  });
});
