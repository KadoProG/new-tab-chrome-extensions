import React from 'react';

export const linkContext = React.createContext<{ links: Link[] }>({
  links: [],
});
