// libraries
import { useState, useEffect, MouseEventHandler } from 'react';
import { NextPage } from 'next';
// interface
// style
import styles from '../styles/frameDataTableHeader.module.css';
import { HeaderType } from '../interfaces/frameData';
import ClickableHeader from './ClickableHeader';

interface Props {}

type HeaderState = {
  isActive: boolean;
  isAscending: boolean;
};

const FrameDataTableHeader: NextPage<Props> = () => {
  const [startupState, setStartup] = useState<HeaderState>({
    isActive: false,
    isAscending: false,
  });
  const [blockState, setBlock] = useState<HeaderState>({
    isActive: false,
    isAscending: false,
  });
  const [hitState, setHit] = useState<HeaderState>({
    isActive: false,
    isAscending: false,
  });
  const [counterHitState, setCounterHit] = useState<HeaderState>({
    isActive: false,
    isAscending: false,
  });

  type IHeaderTab = {
    isActive: boolean;
    isAscending: boolean;
  };

  const setBackToDefault = () => {
    const defaultState: IHeaderTab = {
      isActive: false,
      isAscending: false,
    };
    setStartup({
      ...defaultState,
    });
    setBlock({
      ...defaultState,
    });
    setHit({
      ...defaultState,
    });
    setCounterHit({
      ...defaultState,
    });
  };

  const updateHeaderState = (
    type:
      | HeaderType.START_UP
      | HeaderType.BLOCK
      | HeaderType.HIT
      | HeaderType.COUNTER,
    headerState: HeaderState
  ) => {
    let headerTabState: IHeaderTab = {
      isActive: true,
      // 昇順
      isAscending: false,
    };
    if (!headerState.isActive) {
      setBackToDefault();
      headerTabState = {
        isActive: true,
        isAscending: true,
      };
    } else if (!headerState.isAscending) {
      headerTabState = {
        isActive: true,
        // 降順
        isAscending: true,
      };
    }
    switch (type) {
      case HeaderType.START_UP:
        setStartup({
          ...headerTabState,
        });
        break;
      case HeaderType.BLOCK:
        setBlock({
          ...headerTabState,
        });
        break;
      case HeaderType.HIT:
        setHit({
          ...headerTabState,
        });
        break;
      case HeaderType.COUNTER:
        setCounterHit({
          ...headerTabState,
        });
        break;
    }
  };

  const handleTableHeaderStatus = (
    type:
      | HeaderType.START_UP
      | HeaderType.BLOCK
      | HeaderType.HIT
      | HeaderType.COUNTER
  ) => {
    switch (type) {
      case HeaderType.START_UP:
        updateHeaderState(HeaderType.START_UP, startupState);
        break;
      case HeaderType.BLOCK:
        updateHeaderState(HeaderType.BLOCK, blockState);
        break;
      case HeaderType.HIT:
        updateHeaderState(HeaderType.HIT, hitState);
        break;
      case HeaderType.COUNTER:
        updateHeaderState(HeaderType.COUNTER, counterHitState);
        break;
    }
  };

  return (
    <tr>
      <th>Input</th>
      <ClickableHeader
        handleTableHeaderStatus={handleTableHeaderStatus}
        type={HeaderType.START_UP}
        title="Start up"
        isActive={startupState.isActive}
        isAscending={startupState.isAscending}
      />
      <th>Hit Type</th>
      <th>Damage</th>
      <ClickableHeader
        handleTableHeaderStatus={handleTableHeaderStatus}
        type={HeaderType.BLOCK}
        title="Block"
        isActive={blockState.isActive}
        isAscending={blockState.isAscending}
      />
      <ClickableHeader
        handleTableHeaderStatus={handleTableHeaderStatus}
        type={HeaderType.HIT}
        title="Hit"
        isActive={hitState.isActive}
        isAscending={hitState.isAscending}
      />
      <ClickableHeader
        handleTableHeaderStatus={handleTableHeaderStatus}
        type={HeaderType.COUNTER}
        title="CH"
        isActive={counterHitState.isActive}
        isAscending={counterHitState.isAscending}
      />
    </tr>
  );
};

export default FrameDataTableHeader;
