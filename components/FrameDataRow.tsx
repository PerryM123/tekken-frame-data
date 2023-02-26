// libraries
import { useState, useEffect, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
// interface
import { IFrameData, symbolType } from '../interfaces/frameData';
// style
import styles from '../styles/frameDataRow.module.css';
import { AppState } from '../store/store';
import { getHostName } from '../utils/getHostName';

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
  const [commandMoveText, setCommandMoveText] = useState('');
  const frameDataInfo = useSelector((state: AppState) => state.frameData);

  const handleVideo = (e: MouseEvent, commandMove: string) => {
    const textContent = (e.target as HTMLElement).textContent;
    if (!textContent) return;
    setVideo(textContent);
    setCommandMoveText(commandMove);
    setOpenModal(true);
  };
  const getSymbol = (frames: number) => {
    if (frames >= 1) {
      return symbolType.Plus;
    } else {
      return symbolType.Blank;
    }
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
  const handleCloseModalClick = () => {
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
            <div className={styles.closeButton} onClick={handleCloseModalClick}>
              +
            </div>
            {videoFileName.length && (
              <video
                key={videoFileName}
                poster={`${getHostName()}/loading.gif`}
                loop
                width="100%"
                autoPlay
              >
                <source
                  src={`${getHostName()}/video/${
                    frameDataInfo.name
                  }/${videoFileName}.mp4`}
                  type="video/mp4"
                />
              </video>
            )}
            <div className={styles.modalCommandMove}>{commandMoveText}</div>
          </div>
        </div>
      )}
      <tr>
        <td
          className={styles.videoLink}
          onClick={(e: MouseEvent) => {
            handleVideo(e, frameData.input);
          }}
        >
          <div>{frameData.input}</div>
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
