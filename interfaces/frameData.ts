export const HitType = {
  High: "H",
  Mid: "M",
  Low: "L",
};

export const symbolType = {
  Plus: "+",
  Minus: "-",
  Blank: "",
};

export interface IFrameData {
  input: string;
  startUp: number;
  hitType: string;
  damage: number;
  block: number;
  hit: number;
  counter: number;
}

export interface ICharacterFrameData {
  name: string;
  description: string;
  moves: IFrameData[];
}

export interface ICharacterList {
  characters: ICharacterItem[];
}

export interface ICharacterItem {
  name: string;
  isEntryComplete: boolean;
}

export enum HeaderType {
  START_UP = 0,
  BLOCK = 1,
  HIT = 2,
  COUNTER = 3,
}
