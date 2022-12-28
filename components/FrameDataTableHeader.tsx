// libraries
import { useState, useEffect, MouseEventHandler } from "react";
import { NextPage } from "next";
// interface
// style
import styles from "../styles/frameDataTableHeader.module.css";
import { HeaderType } from "../interfaces/frameData";
import ClickableHeader from "./ClickableHeader";

interface Props {}

const FrameDataTableHeader: NextPage<Props> = (props) => {
  const [wasClicked, setClicked] = useState(false);
  return (
    <tr>
      <th>Input</th>
      <ClickableHeader type={HeaderType.START_UP} title="Start up" />
      <th>Hit Type</th>
      <th>Damage</th>
      <ClickableHeader type={HeaderType.BLOCK} title="Block" />
      <ClickableHeader type={HeaderType.HIT} title="Hit" />
      <ClickableHeader type={HeaderType.COUNTER} title="CH" />
    </tr>
  );
};

export default FrameDataTableHeader;
