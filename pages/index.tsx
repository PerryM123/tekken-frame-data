import React, { useEffect } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import characterFrameDataSampleData from "./../sampleData/api/characterFrameData/heihachi/sampleResponse.json";

import FrameDataTable from "../components/FrameDataTable";
import { ICharacterFrameData, ICharacterList } from "../interfaces/frameData";
import frameDataSlice, { loadFrameDataInfo } from "../reducer/frameDataSlice";
import { RootState } from "../store/basicStore";
import styles from "../styles/index.module.css";
import { wrapper, createStore as store } from "./../store/basicStore";

import characterListSampleResponse from "./../sampleData/api/allCharacters/sampleResponse.json";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const frameDataSample: ICharacterFrameData = characterFrameDataSampleData;
  let frameDataInfo = {
    name: frameDataSample.name,
    description: frameDataSample.description,
    moves: frameDataSample.moves,
  };
  return {
    props: { frameDataInfo },
  };
};

type IProps = {
  frameDataInfo: ICharacterFrameData;
};

export default function Home(props: IProps) {
  const { name, description, moves } = props.frameDataInfo;
  const handleFrameDataSelector = () => {
    console.log("handleFrameDataSelector");
  };
  const characterListSample: ICharacterList = characterListSampleResponse;

  useEffect(() => {
    console.log("use effect now");
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
      <FrameDataTable title="Standing" frameData={moves} />
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
