export const HitType = {
  High: "H",
  Mid: "M",
  Low: "L",
};

export interface IFrameData {
  input: string;
  startUp: number;
  hitType: "H" | "M" | "L";
  damage: number;
  block: number;
  blockSymbol: "+" | "-" | "";
  hit: number;
  hitSymbol: "+" | "-" | "";
  counter: number;
  counterSymbol: "+" | "-" | "";
}
