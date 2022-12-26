import { Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import frameDataSlice, {
  initialState as userState,
} from "../reducer/frameDataSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const preloadedState = () => {
  return userState;
};

// TODO: 確認必須
export type RootState = ReturnType<typeof createStore.getState>;

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

// const middlewareList = [...getDefaultMiddleware(), logger];
export const createStore = configureStore({
  reducer: { frameDataInfo: frameDataSlice.reducer },
  // TODO: middleware追加
  // middleware: middlewareList,
  devTools: true,
});

const makeStore = () => createStore;
export const wrapper = createWrapper(makeStore);
