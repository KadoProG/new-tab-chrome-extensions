import React from 'react';

export const linkContext = React.createContext<{
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
}>({
  links: [],
  setLinks: () => {},
});
