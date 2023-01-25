// libraries
import { useState, useEffect } from 'react';
import { NextPage } from 'next';
// interface
// style
import styles from '../styles/frameDataRow.module.css';
import { IFrameData, symbolType } from '../interfaces/frameData';

interface Props {
  frameData: IFrameData;
}

const OnHitStatus = {
  KNOCKDOWN: 9999,
};

const FrameDataRow: NextPage<Props> = (props) => {
  const { frameData } = props;
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
  return (
    <tr>
      <td>{frameData.input}</td>
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
  );
};

export default FrameDataRow;
