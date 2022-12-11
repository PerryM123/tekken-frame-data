// libraries
import { useState, useEffect } from "react";
import { NextPage } from "next";
// interface
// style
import styles from "../styles/frameDataTable.module.css";
import FrameDataTableHeader from "./FrameDataTableHeader";
import FrameDataRow from "./FrameDataRow";
import { IFrameData } from "../interfaces/frameData";

interface Props {
  title: string;
  frameData: IFrameData[];
}

const handleChangeOrder = (
  frameData: IFrameData[],
  frameDataState?: IFrameData[]
) => {
  console.log("handleChangeOrder: frameData: ", frameData);
  console.log("handleChangeOrder: frameDataState: ", frameDataState);
};

const FrameDataTable: NextPage<Props> = (props) => {
  const { frameData, title } = props;
  const [frameDataState, setFrameData] = useState<IFrameData[]>();
  setFrameData(frameData);
  return (
    <div className={styles.frameDataArea}>
      <h2>{title}</h2>
      <table className={styles.frameDataTable}>
        <tbody>
          <FrameDataTableHeader
            handleChangeOrder={() =>
              handleChangeOrder(frameData, frameDataState)
            }
          />
          {frameData.map((item, index) => {
            return <FrameDataRow frameData={item} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FrameDataTable;
