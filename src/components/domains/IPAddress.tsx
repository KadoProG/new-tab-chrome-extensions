import React from 'react';
import { getLocalIpAddress } from '@/utils/getLocalIpAddress';
import styles from '@/components/domains/IPAdress.module.scss';

export const IPAddress: React.FC = () => {
  const [ipAddress, setIpAddress] = React.useState<string>('');
  const [time, setTime] = React.useState<string>('');

  React.useEffect(() => {
    getLocalIpAddress.then((ip) => {
      setIpAddress(ip);
    });

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.div}>
      <div>
        <p style={{ fontSize: '3vw' }}>あなたのローカルIPアドレスは、</p>
        <p style={{ fontSize: '10vw' }}>{ipAddress}</p>

        <p style={{ fontSize: '5vw' }}>{time}</p>
        <button onClick={() => document.body.requestFullscreen()}>全画面表示</button>
      </div>
    </div>
  );
};
