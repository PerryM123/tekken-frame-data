import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacterFrameData } from "../interfaces/frameData";
import characterFrameDataSampleData from "./../sampleData/api/characterFrameData/heihachi/sampleResponse.json";

export type User = {
  id: string | null;
  username: string | null;
  password: string | null;
};

export type FrameDataState = {
  name: "";
  description: "";
  moves: [];
};

export const initialState: ICharacterFrameData = {
  name: "",
  description: "",
  moves: [],
};

const frameDataSlice = createSlice({
  name: "frameDataInfo",
  initialState,
  reducers: {
    loadFrameDataInfo(state, action: PayloadAction<number>) {
      console.log("function: loadFrameDataInfo");
      // TODO: APIができたらこの辺API送信する予定
      const frameDataSample: ICharacterFrameData = characterFrameDataSampleData;
      state.name = frameDataSample.name;
      state.description = frameDataSample.description;
      state.moves = frameDataSample.moves;
      console.log("function: state: ", state);
    },
  },
});

export default frameDataSlice;
