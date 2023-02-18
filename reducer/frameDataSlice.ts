import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import {
  HeaderType,
  ICharacterFrameData,
  IFrameData,
} from '../interfaces/frameData';

export type User = {
  id: string | null;
  username: string | null;
  password: string | null;
};

export type FrameDataState = {
  name: '';
  description: '';
  moves: [];
};

export const initialState: ICharacterFrameData = {
  name: '',
  description: '',
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
  name: 'frameDataInfo',
  initialState,
  reducers: {
    loadFrameDataIntoStore(state, action: PayloadAction<ICharacterFrameData>) {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.moves = action.payload.moves;
      console.log(
        'function: loadCharacterDataIntoStore: state.name: ',
        state.name
      );
      console.log(
        'function: loadCharacterDataIntoStore: state.description: ',
        state.description
      );
      console.log(
        'function: loadCharacterDataIntoStore: state.moves: ',
        state.moves
      );
    },
    updateFrameDataList(
      state,
      action: PayloadAction<{
        type: HeaderType;
        isAscending: boolean;
      }>
    ) {
      const { type, isAscending } = action.payload;
      orderColumn(type, isAscending, state.moves);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE: ', state, action.payload);
      return {
        ...state,
        ...action.payload.characters,
      };
    },
  },
});

export default frameDataSlice.reducer;

export const { updateFrameDataList, loadFrameDataIntoStore } =
  frameDataSlice.actions;
