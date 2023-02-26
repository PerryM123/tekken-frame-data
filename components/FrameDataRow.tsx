// libraries
import { useState, useEffect } from 'react';
import { NextPage } from 'next';
// interface
// style
import styles from '../styles/frameDataRow.module.css';
import { IFrameData, symbolType } from '../interfaces/frameData';
import Modal from './Modal';

interface Props {
  frameData: IFrameData;
}

const OnHitStatus = {
  KNOCKDOWN: 9999,
};

const FrameDataRow: NextPage<Props> = (props) => {
  const { frameData } = props;
  const [videoFileName, setVideo] = useState('');
  const [isOpenModal, setOpenModal] = useState(false);
  const handleVideo = (element: any) => {
    console.log('element.target.textContent: ', element.target.textContent);
    setVideo(element.target.textContent);
    setOpenModal(true);
  };
  const getSymbol = (frames: number) => {
    if (frames >= 1) {
      return symbolType.Plus;
    } else {
      return symbolType.Blank;
    }
  };
  const coolVideoSourceHere = () => {
    return (
      <video key={videoFileName} loop width="100%" autoPlay>
        <source src={`/video/heihachi/${videoFileName}.mp4`} type="video/mp4" />
      </video>
    );
  };
  const getOnHitStatus = (frames: number) => {
    if (frames === OnHitStatus.KNOCKDOWN) {
      return symbolType.Knockdown;
    } else {
      return (
        <>
          {getSymbol(frames)}
          {frames}
        </>
      );
    }
  };
  const handleCloseModalClick = (e: any) => {
    // if (e.target !== this) return; // Do nothing
    setOpenModal(false);
  };
  return (
    <>
      {isOpenModal && (
        <div onClick={handleCloseModalClick} className={styles.overlay}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.modalContent}
          >
            <button onClick={handleCloseModalClick}>close me!</button>
            {videoFileName.length ? coolVideoSourceHere() : null}
          </div>
        </div>
      )}
      <tr>
        {/* <td>{frameData.input}</td> */}
        <td>
          <button onClick={handleVideo}>{frameData.input}</button>
        </td>
        <td>{frameData.startUp}</td>
        <td>{frameData.hitType}</td>
        <td>{frameData.damage}</td>
        <td>
          {getSymbol(frameData.block)}
          {frameData.block}
        </td>
        <td>{getOnHitStatus(frameData.hit)}</td>
        <td>{getOnHitStatus(frameData.counter)}</td>
      </tr>
    </>
  );
};

export default FrameDataRow;
