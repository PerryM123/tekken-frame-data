import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import { createStore } from "./../store/basicStore";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={createStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
