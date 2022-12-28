import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  HeaderType,
  ICharacterFrameData,
  IFrameData,
} from "../interfaces/frameData";
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

const orderColumn = (
  type: HeaderType,
  isAscending: boolean,
  moves: IFrameData[]
) => {
  if (isAscending) {
    moves.sort(function (a: IFrameData, b: IFrameData) {
      if (type === HeaderType.START_UP) {
        return a.startUp - b.startUp;
      } else if (type === HeaderType.BLOCK) {
        return a.block - b.block;
      } else if (type === HeaderType.HIT) {
        return a.hit - b.hit;
      } else {
        return a.counter - b.counter;
      }
    });
  } else {
    moves.sort(function (a: IFrameData, b: IFrameData) {
      if (type === HeaderType.START_UP) {
        return b.startUp - a.startUp;
      } else if (type === HeaderType.BLOCK) {
        return b.block - a.block;
      } else if (type === HeaderType.HIT) {
        return b.hit - a.hit;
      } else {
        return b.counter - a.counter;
      }
    });
  }
};

const frameDataSlice = createSlice({
  name: "frameDataInfo",
  initialState,
  reducers: {
    loadFrameDataInfo(state) {
      console.log("function: loadFrameDataInfo");
      // TODO: APIができたらこの辺API送信する予定
      const frameDataSample: ICharacterFrameData = characterFrameDataSampleData;
      state.name = frameDataSample.name;
      state.description = frameDataSample.description;
      state.moves = frameDataSample.moves;
    },
    updateFrameDataList(
      state,
      action: PayloadAction<{
        type: HeaderType;
        isAscending: boolean;
        isDescending: boolean;
      }>
    ) {
      const { type, isAscending } = action.payload;
      orderColumn(type, isAscending, state.moves);
    },
  },
});

export default frameDataSlice;

export const { loadFrameDataInfo, updateFrameDataList } =
  frameDataSlice.actions;
