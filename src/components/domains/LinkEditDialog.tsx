import { Button } from '@/components/common/button/Button';
import { DialogActions } from '@/components/common/feedback/DialogActions';
import { DialogBody } from '@/components/common/feedback/DialogBody';
import { DialogContainer } from '@/components/common/feedback/DialogContainer';
import { DialogContent } from '@/components/common/feedback/DialogContent';
import { DialogHeader } from '@/components/common/feedback/DialogHeader';
import { TextField } from '@/components/common/input/TextField';
import { useLinkEditDialog } from '@/components/domains/useLinkEditDialog';
import React from 'react';
import { useWatch } from 'react-hook-form';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onDelete: () => void;
  control: ReturnType<typeof useLinkEditDialog>['control'];
}
export const LinkEditDialog: React.FC<Props> = (props) => {
  const id = useWatch({ control: props.control, name: 'id' });

  return (
    <DialogContainer isOpen={props.isOpen} onClose={props.onClose}>
      <DialogContent style={{ maxWidth: 600 }}>
        <DialogHeader
          title={`リンク${id ? '編集' : '追加'}`}
          onDelete={id ? props.onDelete : undefined}
        />
        <DialogBody>
          <TextField label="タイトル" control={props.control} name="title" type="text" required />
          <TextField label="URL" control={props.control} name="url" type="text" required />
          <TextField label="画像URL" control={props.control} name="imageUrl" type="text" />
        </DialogBody>
        <DialogActions>
          <Button onClick={props.onSubmit}>登録する</Button>
        </DialogActions>
      </DialogContent>
    </DialogContainer>
  );
};
