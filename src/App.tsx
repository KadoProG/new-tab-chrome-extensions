import React, { useState } from 'react';
import './App.css';
import { getLocalIpAddress } from './utils';

function App() {
  const [ipAdress, setIpAddress] = useState<string>('');

  React.useEffect(() => {
    getLocalIpAddress.then((ip) => {
      setIpAddress(ip);
    });
  }, []);

  return (
    <>
      <p>あなたのローカルIPアドレスは、</p>
      <p style={{ fontSize: 64 }}>{ipAdress}</p>
    </>
  );
}

export default App;
