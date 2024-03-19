import React, { useEffect } from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';

interface IDialogProps {
  show: boolean;
  children?: React.ReactNode;
  triggerCp?: React.ReactNode;
  closeCp?: React.ReactNode;
  title?: React.ReactNode;
  timeClose?: number // miniseconds
}

const wait = (time = 1000) => new Promise((resolve) => setTimeout(resolve, time));

const Dialog = ({
  show = false,
  title = '',
  children = null,
  triggerCp = null,
  closeCp = null,
  timeClose = undefined
}: IDialogProps) => {
  console.log('show', show);

  const [open, setOpen] = React.useState(show);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (timeClose && show) {
      wait(timeClose).then(() => setOpen(false));
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <DialogRadix.Root open={open} onOpenChange={setOpen}>
      {triggerCp ? <DialogRadix.Trigger asChild>
        {triggerCp}
      </DialogRadix.Trigger> : null}
      <DialogRadix.Portal>
        <DialogRadix.Overlay className="DialogOverlay" />
        <DialogRadix.Content className="DialogContent">
          {title ? <DialogRadix.Title className="DialogTitle">{title}</DialogRadix.Title> : null}
          <DialogRadix.Description className="DialogDescription">
            {children}
          </DialogRadix.Description>
          {closeCp ? <DialogRadix.Close asChild>
            {closeCp}
          </DialogRadix.Close> : null}
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
};

export default Dialog;