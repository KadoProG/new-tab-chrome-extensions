import { IPAdress } from '@/components/domains/IPAdress';
import { LinkCardList } from '@/components/domains/LinkCardList';
import React from 'react';

export const App: React.FC = () => {
  const [links] = React.useState<Link[]>([
    {
      title: 'Google',
      url: 'https://www.google.com',
      imageUrl: 'https://www.google.com/favicon.ico',
    },
    {
      title: 'notion',
      url: 'https://www.notion.so',
      imageUrl: '/notion.png',
    },
    {
      title: 'notion',
      url: 'https://www.notion.so',
      imageUrl: '/notion.png',
    },
  ]);

  return (
    <div>
      <LinkCardList links={links} />
      <IPAdress />
    </div>
  );
};
