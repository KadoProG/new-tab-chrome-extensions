import React from 'react';

export const networkStatusContext = React.createContext<{ isOnline: boolean }>({
  isOnline: false,
});
