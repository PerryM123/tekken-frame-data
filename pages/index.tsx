import axios, { AxiosResponse } from 'axios';
import React from 'react';
// redux
import { useSelector } from 'react-redux';
import { loadCharacterDataIntoStore } from '../reducer/characterListSlice';
import { loadFrameDataIntoStore } from '../reducer/frameDataSlice';
import { AppState, wrapper } from '../store/store';
// interfaces
import {
  ICharacterList,
  ICharacterFrameData,
  ICharacterItem,
} from '../interfaces/frameData';
// components
import FrameDataTable from '../components/FrameDataTable';
// styles
import styles from '../styles/index.module.css';

interface Props {
  characterFrameData: ICharacterFrameData;
  characters: ICharacterItem[];
}

export const getInitialProps = wrapper.getInitialPageProps(
  (store) => async () => {
    // TODO: 以下は絶対パスになったりlocalhostのままになったりしてるのでenvファイルは追加必須
    const frameDataResponse: AxiosResponse<any> = await axios.get(
      `${
        process.env.NODE_ENV === 'production'
          ? process.env.GITPAGES_URL
          : process.env.LOCAL_URL
      }/sampleData/api/characterFrameData/heihachi/sampleResponse.json`
    );
    console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
    const characterDataResponse: AxiosResponse = await axios.get(
      `${
        process.env.NODE_ENV === 'production'
          ? process.env.GITPAGES_URL
          : process.env.LOCAL_URL
      }/sampleData/api/allCharacters/sampleResponse.json`
    );
    const data: Props = {
      characterFrameData: {
        name: frameDataResponse.data.name,
        description: frameDataResponse.data.description,
        moves: frameDataResponse.data.moves,
      },
      characters: characterDataResponse.data.characters,
    };
    store.dispatch(loadFrameDataIntoStore({ ...data.characterFrameData }));
    store.dispatch(loadCharacterDataIntoStore(data.characters));
    console.log('store.getState(): ', store.getState());
    return {
      props: {},
    };
  }
);

export default function Home(data: Props) {
  const handleFrameDataSelector = () => {
    console.log('handleFrameDataSelector');
  };
  const frameDataInfo = useSelector((state: AppState) => state.frameData);
  const characterList = useSelector((state: AppState) => state.characterList);
  const { name, description, moves } = frameDataInfo;
  return (
    <div>
      <nav>
        <h3>character list</h3>
        <ul>
          {characterList.characters.map((item, index) => {
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
