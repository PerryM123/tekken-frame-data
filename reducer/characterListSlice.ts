import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacterItem, ICharacterList } from '../interfaces/frameData';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

export const initialState: ICharacterList = {
  characters: [],
};

const characterListSlice = createSlice({
  name: 'characterList',
  initialState,
  reducers: {
    loadCharacterDataIntoStore(state, action: PayloadAction<ICharacterItem[]>) {
      state.characters = action.payload;
      console.log(
        'function: loadCharacterDataIntoStore: state.characters: ',
        state.characters
      );
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

export default characterListSlice.reducer;

export const { loadCharacterDataIntoStore } = characterListSlice.actions;
