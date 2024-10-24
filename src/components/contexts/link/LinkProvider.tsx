import { linkContext } from '@/components/contexts/link/linkContext';
import { LOCALSTORAGE_KEY } from '@/const/const';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const LinkProvider: React.FC<Props> = (props) => {
  const [links, setLinks] = React.useState<Link[]>([]);

  const initLocalStorage = React.useCallback(() => {
    const newLinks = localStorage.getItem(LOCALSTORAGE_KEY);
    if (newLinks) {
      setLinks(JSON.parse(newLinks));
    } else {
      const result = confirm('初期化しますか？');
      if (result) {
        const initData = [
          {
            id: '1',
            title: 'Google',
            url: 'https://www.google.com',
            imageUrl: 'https://www.google.com/favicon.ico',
          },
          {
            id: '2',
            title: 'notion',
            url: 'https://www.notion.so',
            imageUrl: '/notion.png',
          },
        ];
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(initData));
        setLinks(initData);
      }
    }
  }, []);

  React.useEffect(() => {
    initLocalStorage();
  }, [initLocalStorage]);

  React.useEffect(() => {
    if (!links) return;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(links));
  }, [links]);

  const value = React.useMemo(() => ({ links }), [links]);

  return <linkContext.Provider value={value}>{props.children}</linkContext.Provider>;
};
