import { Button } from '@/components/common/button/Button';
import React from 'react';

export const App: React.FC = () => {
  const [links, setLinks] = React.useState<Link[]>([
    {
      title: 'Google',
      url: 'https://www.google.com',
    },
    {
      title: 'Yahoo',
      url: 'https://www.yahoo.co.jp',
    },
  ]);

  return (
    <div>
      {links.map((link) => {
        return (
          <Button href={link.url} key={link.url}>
            {link.title}
          </Button>
        );
      })}
    </div>
  );
};
