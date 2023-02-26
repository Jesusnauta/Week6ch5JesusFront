type HasId = {
  id: number;
};

export type ProtoBeersStructure = {
  id: number;
  name: string;
  price: number;
};

export type BeersStructure = HasId & ProtoBeersStructure;
