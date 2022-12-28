// libraries
import { useState, useEffect } from "react";
import { NextPage } from "next";
// interface
// style
import styles from "../styles/frameDataTable.module.css";
import FrameDataTableHeader from "./FrameDataTableHeader";
import FrameDataRow from "./FrameDataRow";
import { HeaderType, IFrameData } from "../interfaces/frameData";

interface Props {
  title: string;
  frameData: IFrameData[];
}

const FrameDataTable: NextPage<Props> = (props) => {
  const { frameData, title } = props;
  return (
    <div className={styles.frameDataArea}>
      <h2>{title}</h2>
      <table className={styles.frameDataTable}>
        <tbody>
          <FrameDataTableHeader />
          {frameData.map((item, index) => {
            return <FrameDataRow frameData={item} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FrameDataTable;
