import { useLinkContext } from '@/components/contexts/link/useLinkContext';
import { useNetworkStatusContext } from '@/components/contexts/networkStatus/useNetworkStatusContext';
import { IPAddress } from '@/components/domains/IPAddress';
import { LinkCardList } from '@/components/domains/LinkCardList';
import React from 'react';
import { DuringBreak } from './components/DuringBreak';

export const App: React.FC = () => {
  const { isOnline } = useNetworkStatusContext();
  const { links } = useLinkContext();

  return (
    <div>
      <LinkCardList links={links} />
      <IPAddress />
      {isOnline ? 'オンライン' : 'オフライン'}
      <DuringBreak />
    </div>
  );
};
