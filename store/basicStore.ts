import { Store, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import frameDataSlice, {
  initialState as userState,
} from "../reducer/frameDataSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
// Logger with default options
import logger from "redux-logger";
const preloadedState = () => {
  return userState;
};

// TODO: 確認必須
export type RootState = ReturnType<typeof createStore.getState>;

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const masterReducer = (state: any, action: any) => {
  console.log("function: masterReducer");
  console.log("masterReducer: state: ", state);
  console.log("masterReducer: action: ", action);
  if (!state || !action) {
    console.log("masterReducer: return early");
    return;
  }

  if (action.Type === HYDRATE) {
    console.log("function: masterReducer: action.Type === HYDRATE");
    const nextState = {
      ...state,
      name: state.name,
      description: state.description,
      moves: state.moves,
    };
    return nextState;
  } else {
    console.log("function: masterReducer: ELSE");
    return;
  }
};

export const createStore = configureStore({
  reducer: {
    frameDataInfo: frameDataSlice.reducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware(),
});

const makeStore = () => createStore;
export const wrapper = createWrapper(makeStore);
