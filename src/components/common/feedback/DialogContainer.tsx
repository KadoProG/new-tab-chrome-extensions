import styles from '@/components/common/feedback/Dialog.module.scss';
import React from 'react';

interface DialogContainerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const DialogContainer: React.FC<DialogContainerProps> = (props) => {
  const keyDownEvent = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        props.onClose();
      }
    },
    [props]
  );

  React.useEffect(() => {
    if (props.isOpen) {
      window.addEventListener('keydown', keyDownEvent);
    } else {
      window.removeEventListener('keydown', keyDownEvent);
    }
  }, [props.isOpen, keyDownEvent]);

  return (
    <div
      className={styles.dialog}
      style={{ display: props.isOpen ? 'flex' : 'none' }}
      onClick={props.onClose}
    >
      {props.children}
    </div>
  );
};
