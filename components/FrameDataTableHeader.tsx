// libraries
import { useState, useEffect, MouseEventHandler } from "react";
import { NextPage } from "next";
// interface
// style
import styles from "../styles/frameDataTableHeader.module.css";

interface Props {
  handleChangeOrder: MouseEventHandler | undefined;
}

const FrameDataTableHeader: NextPage<Props> = (props) => {
  const { handleChangeOrder } = props;
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
