// libraries
import { useState, useEffect } from "react";
import { NextPage } from "next";
// interface
// style
import styles from "../styles/frameDataRow.module.css";
import { IFrameData } from "../interfaces/frameData";

interface Props {
  frameData: IFrameData;
}

const FrameDataRow: NextPage<Props> = (props) => {
  const { frameData } = props;
  const getSymbol = (frames: number) => {
    if (frames >= 1) {
      return "+";
    } else {
      return "";
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
      <td>
        {getSymbol(frameData.hit)}
        {frameData.hit}
      </td>
      <td>
        {getSymbol(frameData.counter)}
        {frameData.counter}
      </td>
    </tr>
  );
};

export default FrameDataRow;
