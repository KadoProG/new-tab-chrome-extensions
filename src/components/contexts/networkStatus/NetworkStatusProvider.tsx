import { networkStatusContext } from '@/components/contexts/networkStatus/networkStatusContext';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const NetworkStatusProvider: React.FC<Props> = (props) => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    // ネットワーク状態の変化を監視するためのイベントリスナーを追加
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // コンポーネントがアンマウントされるときにイベントリスナーをクリーンアップ
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const value = React.useMemo(
    () => ({
      isOnline,
    }),
    [isOnline]
  );

  return (
    <networkStatusContext.Provider value={value}>{props.children}</networkStatusContext.Provider>
  );
};
