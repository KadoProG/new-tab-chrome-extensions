import React from 'react';

export const linkEditDialogContext = React.createContext<{
  edit: (id?: Link['id']) => void;
}>({
  edit: () => {},
});
