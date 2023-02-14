// libraries
import { useState, useEffect, MouseEventHandler } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
// interface
import { HeaderType } from '../interfaces/frameData';
// reducer
import { updateFrameDataList } from '../reducer/frameDataSlice';
// style
import styles from '../styles/frameDataTableHeader.module.css';
interface Props {
  type:
    | HeaderType.START_UP
    | HeaderType.BLOCK
    | HeaderType.HIT
    | HeaderType.COUNTER;
  title: string;
  // TODO: 変数型をつける
  updateHeader: (type: any) => void;
  isActive: boolean;
  isAscending: boolean;
}

const Logo = {
  ASCENDING: '▲',
  DESCENDING: '▼',
};

const ClickableHeader: NextPage<Props> = (props) => {
  const { type, title, updateHeader, isActive, isAscending } = props;
  const dispatch = useDispatch();

  const clickTableIcon = () => {
    dispatch(updateFrameDataList({ type, isAscending }));
    updateHeader(type);
  };

  const tableIconClassName = [styles.tableIcon];
  if (isActive) {
    tableIconClassName.push(styles.jsActive);
  }

  return (
    <th onClick={clickTableIcon} className={styles.changeOrder}>
      {title}{' '}
      <span
        className={`${styles.tableIcon} ${isActive && styles['js-active']}`}
      >
        {isAscending ? Logo.DESCENDING : Logo.ASCENDING}
      </span>
    </th>
  );
};

export default ClickableHeader;
