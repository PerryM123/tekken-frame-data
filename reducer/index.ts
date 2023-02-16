import { combineReducers } from 'redux';
import characterListSlice from './characterListSlice';
import frameDataSlice from './frameDataSlice';

const reducer = combineReducers({
  characterList: characterListSlice,
  frameData: frameDataSlice,
});

export default reducer;
