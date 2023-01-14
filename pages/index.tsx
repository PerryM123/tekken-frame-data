import axios, { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FrameDataTable from "../components/FrameDataTable";
import { ICharacterList, ICharacterFrameData } from "../interfaces/frameData";
import { loadFrameDataIntoStore } from "../reducer/frameDataSlice";
import { RootState } from "../store/basicStore";
import styles from "../styles/index.module.css";

interface Props {
  characterFrameData: ICharacterFrameData;
  characterList: ICharacterList;
}

export default function Home(data: Props) {
  const handleFrameDataSelector = () => {
    console.log("handleFrameDataSelector");
  };
  // const characterListSample: ICharacterList = characterListSampleResponse;
  const dispatch = useDispatch();
  const frameDataInfo = useSelector((state: RootState) => state.frameDataInfo);
  const { name, description, moves } = frameDataInfo;

  useEffect(() => {
    dispatch(loadFrameDataIntoStore({...data.characterFrameData}));
  }, []);

  return (
    <div>
      <nav>
        <h3>character list</h3>
        <ul>
          {/* TODO: characterListのsliceができたら以下を修正 */}
          {/* {characterListSample.characters.map((item, index) => {
            return (
              <li className={styles.characterListItem} key={index}>
                <a
                  className={`${
                    !item.isEntryComplete
                      ? styles.entryNotComplete
                      : styles.selectable
                  } ${styles.characterLink}`}
                  href="#"
                >
                  {item.name}
                </a>
              </li>
            );
          })} */}
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

export async function getServerSideProps() {
  const frameDataResponse: AxiosResponse<any> = await axios.get("http://localhost:3000/sampleData/api/characterFrameData/heihachi/sampleResponse.json");
  const characterDataResponse: AxiosResponse = await axios.get("http://localhost:3000/sampleData/api/allCharacters/sampleResponse.json");
  const data: Props = {
    characterFrameData: {
      name: frameDataResponse.data.name,
      description: frameDataResponse.data.description,
      moves: frameDataResponse.data.moves,
    },
    characterList: characterDataResponse.data.characters,
  }
	return {props: {...data}};
}
