import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacterItem, ICharacterList } from '../interfaces/frameData';

export const initialState: ICharacterList = {
  characters: [],
};

const characterListSlice = createSlice({
  name: 'characterList',
  initialState,
  reducers: {
    loadCharacterDataIntoStore(state, action: PayloadAction<ICharacterItem[]>) {
      state.characters = action.payload;
    },
  },
});

export default characterListSlice.reducer;

export const { loadCharacterDataIntoStore } = characterListSlice.actions;
