import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FrameDataTable from "../components/FrameDataTable";
import { ICharacterList } from "../interfaces/frameData";
import { loadFrameDataInfo } from "../reducer/frameDataSlice";
import { RootState } from "../store/basicStore";
import styles from "../styles/index.module.css";
import characterListSampleResponse from "./../sampleData/api/allCharacters/sampleResponse.json";

export default function Home() {
  const handleFrameDataSelector = () => {
    console.log("handleFrameDataSelector");
  };
  const characterListSample: ICharacterList = characterListSampleResponse;
  const dispatch = useDispatch();
  const frameDataInfo = useSelector((state: RootState) => state.frameDataInfo);
  const { name, description, moves } = frameDataInfo;

  useEffect(() => {
    dispatch(loadFrameDataInfo());
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
