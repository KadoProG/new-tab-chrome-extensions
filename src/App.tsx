import { Button } from '@/components/common/button/Button';
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
      imageUrl: 'https://www.notion.so/favicon.ico',
    },
    {
      title: 'notion',
      url: 'https://www.notion.so',
      imageUrl: 'https://www.notion.so/favicon.ico',
    },
  ]);

  return (
    <div>
      {links.map((link) => {
        return (
          <div
            key={link.url}
            style={{
              border: '1px solid var(--divider)',
            }}
          >
            <Button href={link.url}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {link.imageUrl && (
                  <img src={link.imageUrl} alt={link.title} width={40} height={40} />
                )}
                <p style={{ flex: 1 }}>{link.title}</p>
              </div>
            </Button>
          </div>
        );
      })}
    </div>
  );
};
