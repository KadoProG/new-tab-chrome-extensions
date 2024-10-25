import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';

export const useLinkEditDialog = (
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>,
  onClose: () => void
) => {
  const { control, reset, handleSubmit } = useForm<Link & { id?: string }>({
    defaultValues: {
      id: '',
      title: '',
      url: '',
      imageUrl: '',
    },
  });

  const onSubmit = React.useCallback(() => {
    handleSubmit((data) => {
      setLinks((links) => {
        if (data.id) {
          return links.map((link) => (link.id === data.id ? data : link));
        } else {
          data.id = uuidv4();
          return [...links, data];
        }
      });
      onClose();
    })();
  }, [handleSubmit, setLinks, onClose]);

  const onDelete = React.useCallback(() => {
    handleSubmit((data) => {
      setLinks((links) => links.filter((link) => link.id !== data.id));
      onClose();
    })();
  }, [handleSubmit, setLinks, onClose]);

  return { control, reset, onSubmit, onDelete };
};
