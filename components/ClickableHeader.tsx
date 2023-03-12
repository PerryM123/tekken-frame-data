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

export interface Props {
  type:
  | HeaderType.START_UP
  | HeaderType.BLOCK
  | HeaderType.HIT
  | HeaderType.COUNTER;
  title: string;
  handleTableHeaderStatus: (
    type:
      | HeaderType.START_UP
      | HeaderType.BLOCK
      | HeaderType.HIT
      | HeaderType.COUNTER
  ) => void;
  isActive: boolean;
  isAscending: boolean;
}

export const Logo = {
  ASCENDING: '▲',
  DESCENDING: '▼',
};

export const constant = {
  className: "tableIcon"
} as const;

const ClickableHeader: NextPage<Props> = (props) => {
  const { type, title, handleTableHeaderStatus, isActive, isAscending } = props;
  const dispatch = useDispatch();

  const clickTableIcon = () => {
    dispatch(updateFrameDataList({ type, isAscending }));
    handleTableHeaderStatus(type);
  };

  const tableIconClassName = [styles.tableIcon];
  if (isActive) {
    tableIconClassName.push(styles.jsActive);
  }

  return (
    <th onClick={clickTableIcon} role="button" className={styles.changeOrder}>
      {title}{' '}
      <span
        className={`${styles[`${constant.className}`]} ${isActive ? styles['js-active'] : ''}`}
        data-testid={constant.className}
      >
        {isAscending ? Logo.DESCENDING : Logo.ASCENDING}
      </span>
    </th>
  );
};

export default ClickableHeader;
