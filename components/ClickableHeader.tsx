// libraries
import { useState, useEffect, MouseEventHandler } from "react";
import { NextPage } from "next";
import { useDispatch } from "react-redux";
// interface
import { HeaderType } from "../interfaces/frameData";
// reducer
import { updateFrameDataList } from "../reducer/frameDataSlice";
// style
import styles from "../styles/frameDataTableHeader.module.css";
interface Props {
  type:
    | HeaderType.START_UP
    | HeaderType.BLOCK
    | HeaderType.HIT
    | HeaderType.COUNTER;
  title: string;
}

const Logo = {
  ASCENDING: "▲",
  DESCENDING: "▼",
};

const ClickableHeader: NextPage<Props> = (props) => {
  const { type, title } = props;
  const [isActive, setActive] = useState(false);
  const [isAscending, setAscending] = useState(false);
  const [isDescending, setDescending] = useState(false);
  const [iconText, setIconText] = useState(Logo.DESCENDING);
  const dispatch = useDispatch();

  const clickTableIcon = () => {
    dispatch(updateFrameDataList({ type, isAscending, isDescending }));
    if (!isActive) {
      setActive(!isActive);
    } else if (!isAscending) {
      setAscending(true);
      setDescending(false);
      setIconText(Logo.DESCENDING);
    } else if (isAscending && !isDescending) {
      setAscending(false);
      setDescending(true);
      setIconText(Logo.ASCENDING);
    }
  };

  const reset = () => {
    setActive(false);
    setAscending(false);
    setDescending(false);
  };

  const tableIconClassName = [styles.tableIcon];
  if (isActive) {
    tableIconClassName.push(styles.jsActive);
  }

  return (
    <th onClick={clickTableIcon} className={styles.changeOrder}>
      {title}{" "}
      <span
        className={`${styles.tableIcon} ${isActive && styles["js-active"]}`}
      >
        {iconText}
      </span>
    </th>
  );
};

export default ClickableHeader;
