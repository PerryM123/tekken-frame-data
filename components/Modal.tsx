// libraries
import { useState, useEffect, MouseEventHandler, ReactNode } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
// interface
import { HeaderType } from '../interfaces/frameData';
// reducer
import { updateFrameDataList } from '../reducer/frameDataSlice';
// style
import styles from '../styles/Modal.module.css';

interface Props {
  // TODO: 変数型
  children?: ReactNode;
  buttonTitle?: string;
  isShowModal?: boolean;
  isNoTrigger?: boolean;
}

const Modal: NextPage<Props> = (props) => {
  const { children, buttonTitle, isShowModal } = props;
  const [isOpen, setOpen] = useState(isShowModal ? isShowModal : false);
  // TODO: anyの代わりにちゃんとした変数型に変更
  const handleCloseModalClick = (e: any) => {
    // if (e.target !== this) return; // Do nothing
    setOpen(false);
  };
  const handleOpenModalClick = () => {
    setOpen(true);
  };
  return isShowModal ? (
    <>{children}</>
  ) : (
    <div className={styles.modal}>
      <button onClick={handleOpenModalClick}>
        {buttonTitle?.length ? buttonTitle : 'open me!!'}
      </button>
      {isOpen && (
        <div onClick={handleCloseModalClick} className={styles.overlay}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.modalContent}
          >
            <button onClick={handleCloseModalClick}>close me!</button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
