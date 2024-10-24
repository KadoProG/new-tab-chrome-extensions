import { networkStatusContext } from '@/components/contexts/networkStatus/networkStatusContext';
import React from 'react';

export const useNetworkStatusContext = () => React.useContext(networkStatusContext);
