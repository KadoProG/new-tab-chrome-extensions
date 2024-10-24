import { useLinkContext } from '@/components/contexts/link/useLinkContext';
import { useNetworkStatusContext } from '@/components/contexts/networkStatus/useNetworkStatusContext';
import { IPAdress } from '@/components/domains/IPAdress';
import { LinkCardList } from '@/components/domains/LinkCardList';
import React from 'react';

export const App: React.FC = () => {
  const { isOnline } = useNetworkStatusContext();
  const { links } = useLinkContext();

  return (
    <div>
      <LinkCardList links={links} />
      <IPAdress />
      {isOnline ? 'オンライン' : 'オフライン'}
    </div>
  );
};
