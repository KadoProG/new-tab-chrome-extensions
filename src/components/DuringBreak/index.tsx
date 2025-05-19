import { FC, useCallback, useEffect, useState } from 'react';

export const DuringBreak: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelScreen = useCallback(() => {
    setIsOpen(false);
    if (document.fullscreenElement) document.exitFullscreen();
  }, []);
  useEffect(() => {
    const fullScreenChange = () => {
      if (!document.fullscreenElement) {
        cancelScreen();
      }
    };
    document.addEventListener('fullscreenchange', fullScreenChange);
    return () => document.removeEventListener('fullscreenchange', fullScreenChange);
  }, [cancelScreen, isOpen]);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          document.body.requestFullscreen();
        }}
      >
        休憩する
      </button>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'var(--color-paper)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={cancelScreen}
        >
          <p style={{ fontSize: 100 }}>休憩中</p>
        </div>
      )}
    </>
  );
};
