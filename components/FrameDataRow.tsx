// libraries
import { useState, useEffect } from "react";
import { NextPage } from "next";
// interface
// style
import styles from "../styles/frameDataRow.module.css";
import FrameDataTableHeader from "./FrameDataTableHeader";
import { IFrameData } from "../interfaces/frameData";

interface Props {
  frameData: IFrameData;
}

const FrameDataRow: NextPage<Props> = (props) => {
  const { frameData } = props;
  return (
    <tr>
      <td>{frameData.input}</td>
      <td>{frameData.startUp}</td>
      <td>{frameData.hitType}</td>
      <td>{frameData.damage}</td>
      <td>
        {frameData.blockSymbol}
        {frameData.block}
      </td>
      <td>
        {frameData.hitSymbol}
        {frameData.hit}
      </td>
      <td>
        {frameData.counterSymbol}
        {frameData.counter}
      </td>
    </tr>
  );
};

export default FrameDataRow;
