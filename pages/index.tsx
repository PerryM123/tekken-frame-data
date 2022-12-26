import React, { useEffect } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import FrameDataTable from "../components/FrameDataTable";
import { ICharacterFrameData, ICharacterList } from "../interfaces/frameData";
import frameDataSlice from "../reducer/frameDataSlice";
import { RootState } from "../store/basicStore";
import styles from "../styles/index.module.css";
import { wrapper, createStore as store } from "./../store/basicStore";

import characterListSampleResponse from "./../sampleData/api/allCharacters/sampleResponse.json";
import { GetServerSideProps } from "next";

// TODO: contextについての確認必須
// TODO: wrapper.getServerSideProps(async ({ req, res, store })のやり方もありますがどっちがいいか確認必須
// Home.getInitialProps = wrapper.getInitialPageProps(
//   (store) =>
//     ({ pathname, req, res }) => {
//       console.log("2. Page.getInitialProps uses the store to dispatch things");
//       store.dispatch(frameDataSlice.actions.loadFrameDataInfo(12));
//     }
// );

// export const getServerSideProps = wrapper.getServerSideProps((stozzzre) => {
//   store.dispatch(frameDataSlice.actions.loadFrameDataInfo(12));
// });

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log("getServerSideProps: context: ", context);
//   // TODO: axios call here
//   return {
//     // ページコンポーネントに渡すpropsだとprops属性名じゃないといけない？？？
//     props: {
//       frameData: "hi",
//     },
//   };
// };

export default function Home(props: any) {
  console.log("props: ", JSON.stringify(props));
  console.log("props.frameDataInfo: ", props.frameDataInfo);
  const handleFrameDataSelector = () => {
    console.log("handleFrameDataSelector");
  };
  const frameDataInfo = useSelector((state: RootState) => state.frameDataInfo);
  console.log("frameDataInfo: ", frameDataInfo);
  const dispatch = useDispatch();
  // TODO: change to JSON data soon
  const characterListSample: ICharacterList = characterListSampleResponse;

  useEffect(() => {
    console.log("use effect now");

    console.log("frameDataInfo: ", frameDataInfo);
    // dispatch(frameDataSlice.actions.loadFrameDataInfo(12));
  }, []);

  return (
    <div>
      <nav>
        <h3>character list</h3>
        <ul>
          {characterListSample.characters.map((item, index) => {
            return (
              <li key={index}>
                {!item.isEntryComplete ? (
                  <a className={styles.entryNotComplete} href="#">
                    {item.name}
                  </a>
                ) : (
                  <a className={styles.selectable} href="#">
                    {item.name}
                  </a>
                )}
                {!item.isEntryComplete ? (
                  <span className={styles.wip}> (WIP)</span>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
      <h1>Heihachi's Frame Data</h1>
      <ul>
        <li>
          <div onClick={handleFrameDataSelector}>Make all one list</div>
        </li>
        <li>
          <div onClick={handleFrameDataSelector}>
            Section off by move category
          </div>
        </li>
      </ul>
      {/* <FrameDataTable title="Standing" frameData={frameDataSample.moves} /> */}
      {/* TODO: 以下の攻撃内容も追加必須 */}
      {/* <FrameDataTable title="Advancing" frameData={frameDataSample.moves} /> */}
      {/* <FrameDataTable title="Dashing" frameData={frameDataSample.moves} /> */}
      {/* <FrameDataTable title="Poking" frameData={frameDataSample.moves} /> */}
      {/* <FrameDataTable title="Standing to Crouch" frameData={frameDataSample.moves} /> */}
      {/* <FrameDataTable title="While Crouching" frameData={frameDataSample.moves} /> */}
      {/* <FrameDataTable title="While Standing" frameData={frameDataSample.moves} /> */}
      {/* <FrameDataTable title="Jumping" frameData={frameDataSample.moves} /> */}
    </div>
  );
}
