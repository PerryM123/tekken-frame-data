import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { loadCharacterDataIntoStore } from '../reducer/characterListSlice';
import { loadFrameDataIntoStore } from '../reducer/frameDataSlice';
// import { AppState, wrapper } from '../store/basicStore';
import { AppState, wrapper } from '../store/basicStore';
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

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      // TODO: 以下は絶対パスになったりlocalhostのままになったりしてるのでenvファイルは追加必須
      const frameDataResponse: AxiosResponse<any> = await axios.get(
        'http://localhost:3000/sampleData/api/characterFrameData/heihachi/sampleResponse.json'
      );
      const characterDataResponse: AxiosResponse = await axios.get(
        'http://localhost:3000/sampleData/api/allCharacters/sampleResponse.json'
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
      console.log('State on server', store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);

export default function Home(data: Props) {
  console.log('data: ', data);
  const handleFrameDataSelector = () => {
    console.log('handleFrameDataSelector');
  };
  const dispatch = useDispatch();
  const theState = useSelector((state: AppState) => state);
  console.group('state check');
  console.log('theState11111.characterList: ', theState.characterList);
  console.log('theState11111.frameData: ', theState.frameData);
  console.groupEnd();
  const frameDataInfo = useSelector((state: AppState) => state.frameData);
  const characterList = useSelector((state: AppState) => state.characterList);
  // const frameDataInfo: ICharacterFrameData = data.characterFrameData;
  // const characterList: ICharacterItem[] = data.characters;
  const { name, description, moves } = frameDataInfo;

  useEffect(() => {
    // dispatch(loadFrameDataIntoStore({ ...data.characterFrameData }));
    // dispatch(loadCharacterDataIntoStore(data.characters));
  }, []);

  return (
    <div>
      <nav>
        <h3>character list</h3>
        <ul></ul>
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
