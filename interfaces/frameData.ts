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
  // TODO
  // hitType: "H" | "M" | "L";
  hitType: string;
  damage: number;
  block: number;
  // TODO
  // blockSymbol: "+" | "-" | "";
  blockSymbol: string;
  hit: number;
  // TODO
  // hitSymbol: "+" | "-" | "";
  hitSymbol: string;
  counter: number;
  // TODO
  // counterSymbol: "+" | "-" | "";
  counterSymbol: string;
}

export interface ICharacterFrameDataResponse {
  name: string;
  description: string;
  moves: IFrameData[];
}

export interface ICharacterListResponse {
  characters: ICharacterItem[];
}

export interface ICharacterItem {
  name: string;
  isEntryComplete: boolean;
}
