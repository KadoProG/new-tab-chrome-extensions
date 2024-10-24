import { linkContext } from '@/components/contexts/link/linkContext';
import React from 'react';

export const useLinkContext = () => React.useContext(linkContext);
