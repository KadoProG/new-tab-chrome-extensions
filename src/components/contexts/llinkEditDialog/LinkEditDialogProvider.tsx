import { useLinkContext } from '@/components/contexts/link/useLinkContext';
import { linkEditDialogContext } from '@/components/contexts/llinkEditDialog/linkEditDialogContext';
import { LinkEditDialog } from '@/components/domains/LinkEditDialog';
import { useLinkEditDialog } from '@/components/domains/useLinkEditDialog';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const LinkEditDialogProvider: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const onClose = React.useCallback(() => setIsOpen(false), []);

  const { links, setLinks } = useLinkContext();
  const { control, reset, onSubmit, onDelete } = useLinkEditDialog(setLinks, onClose);

  const edit = React.useCallback(
    (id?: Link['id']) => {
      const link = links.find((link) => link.id === id);
      if (!link) {
        reset({
          id: undefined,
          title: '',
          url: '',
          imageUrl: '',
        });
      } else {
        reset(link);
      }
      setIsOpen(true);
    },
    [reset, links]
  );

  const value = React.useMemo(() => ({ edit }), [edit]);

  return (
    <linkEditDialogContext.Provider value={value}>
      {props.children}
      <LinkEditDialog
        isOpen={isOpen}
        onClose={onClose}
        control={control}
        onSubmit={onSubmit}
        onDelete={onDelete}
      />
    </linkEditDialogContext.Provider>
  );
};
