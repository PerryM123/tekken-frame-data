// libraries
import { useState, useEffect } from "react";
import { NextPage } from "next";
// interface
// style
import styles from "../styles/frameDataTableHeader.module.css";

interface Props {}

// TODO: move to parent to have the data be changeable
const handleChangeOrder = () => {
  console.log("handleChangeOrder");
};

const FrameDataTableHeader: NextPage<Props> = (props) => {
  return (
    <tr>
      <th>Input</th>
      <th onClick={handleChangeOrder} className={styles.changeOrder}>
        Start up ▼
      </th>
      <th>Hit Type</th>
      <th>Damage</th>
      <th onClick={handleChangeOrder} className={styles.changeOrder}>
        Block ▼
      </th>
      <th onClick={handleChangeOrder} className={styles.changeOrder}>
        Hit ▼
      </th>
      <th onClick={handleChangeOrder} className={styles.changeOrder}>
        CH ▼
      </th>
    </tr>
  );
};

export default FrameDataTableHeader;
