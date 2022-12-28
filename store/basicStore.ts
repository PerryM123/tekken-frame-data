import { Store, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import frameDataSlice, {
  initialState as userState,
} from "../reducer/frameDataSlice";
import { createWrapper } from "next-redux-wrapper";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
// Logger with default options
import logger from "redux-logger";
const preloadedState = () => {
  return userState;
};

export type RootState = ReturnType<typeof createStore.getState>;
export type StoreState = ReturnType<typeof preloadedState>;
export type ReduxStore = Store<StoreState>;
export const createStore = configureStore({
  reducer: {
    frameDataInfo: frameDataSlice.reducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware(),
});

const makeStore = () => createStore;
export const wrapper = createWrapper(makeStore);
