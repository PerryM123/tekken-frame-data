// libraries
import { useState, useEffect, MouseEventHandler } from 'react';
import { NextPage } from 'next';
// interface
// style
import styles from '../styles/frameDataTableHeader.module.css';
import { HeaderType } from '../interfaces/frameData';
import ClickableHeader from './ClickableHeader';

interface Props {}

// TODO: 適切な変数名に変更
type HeaderItem = {
  isActive: boolean;
  isAscending: boolean;
};

// TODO: 適切な変数名に変更
const HeaderShurui = {
  startup: 0,
  block: 1,
  hit: 2,
  counterHit: 3,
} as const;

const FrameDataTableHeader: NextPage<Props> = (props) => {
  // TODO: 重複コードを削除
  const [startup, setStartup] = useState<HeaderItem>({
    isActive: false,
    isAscending: false,
  });
  const [block, setBlock] = useState<HeaderItem>({
    isActive: false,
    isAscending: false,
  });
  const [hit, setHit] = useState<HeaderItem>({
    isActive: false,
    isAscending: false,
  });
  const [counterHit, setCounterHit] = useState<HeaderItem>({
    isActive: false,
    isAscending: false,
  });

  const setBackToDefault = () => {
    // TODO: 重複コードを削除
    setStartup({
      isActive: false,
      isAscending: false,
    });
    setBlock({
      isActive: false,
      isAscending: false,
    });
    setHit({
      isActive: false,
      isAscending: false,
    });
    setCounterHit({
      isActive: false,
      isAscending: false,
    });
  };

  // TODO: add type and delete any
  // TODO: 重複コードを削除
  const updateHeader = (type: any) => {
    if (type === HeaderShurui.startup) {
      if (!startup.isActive) {
        setBackToDefault();
        setStartup({
          isActive: true,
          isAscending: true,
        });
      } else if (!startup.isAscending) {
        setStartup({
          isActive: true,
          isAscending: true,
        });
      } else if (startup.isAscending) {
        setStartup({
          isActive: true,
          isAscending: false,
        });
      }
    } else if (type === HeaderShurui.block) {
      if (!block.isActive) {
        setBackToDefault();
        setBlock({
          isActive: true,
          isAscending: true,
        });
      } else if (!block.isAscending) {
        setBlock({
          isActive: true,
          isAscending: true,
        });
      } else if (block.isAscending) {
        setBlock({
          isActive: true,
          isAscending: false,
        });
      }
    } else if (type === HeaderShurui.hit) {
      if (!hit.isActive) {
        setBackToDefault();
        setHit({
          isActive: true,
          isAscending: true,
        });
      } else if (!hit.isAscending) {
        setHit({
          isActive: true,
          isAscending: true,
        });
      } else if (hit.isAscending) {
        setHit({
          isActive: true,
          isAscending: false,
        });
      }
    } else if (type === HeaderShurui.counterHit) {
      if (!counterHit.isActive) {
        setBackToDefault();
        setCounterHit({
          isActive: true,
          isAscending: true,
        });
      } else if (!counterHit.isAscending) {
        setCounterHit({
          isActive: true,
          isAscending: true,
        });
      } else if (counterHit.isAscending) {
        setCounterHit({
          isActive: true,
          isAscending: false,
        });
      }
    } else {
      console.log('else');
      // TODO
    }
  };

  return (
    <tr>
      <th>Input</th>
      <ClickableHeader
        updateHeader={updateHeader}
        type={HeaderType.START_UP}
        title="Start up"
        isActive={startup.isActive}
        isAscending={startup.isAscending}
      />
      <th>Hit Type</th>
      <th>Damage</th>
      {/* TODO: 重複コードを削除 */}
      <ClickableHeader
        updateHeader={updateHeader}
        type={HeaderType.BLOCK}
        title="Block"
        isActive={block.isActive}
        isAscending={block.isAscending}
      />
      <ClickableHeader
        updateHeader={updateHeader}
        type={HeaderType.HIT}
        title="Hit"
        isActive={hit.isActive}
        isAscending={hit.isAscending}
      />
      <ClickableHeader
        updateHeader={updateHeader}
        type={HeaderType.COUNTER}
        title="CH"
        isActive={counterHit.isActive}
        isAscending={counterHit.isAscending}
      />
    </tr>
  );
};

export default FrameDataTableHeader;
