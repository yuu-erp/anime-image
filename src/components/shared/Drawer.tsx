import React, { useImperativeHandle, useState } from "react";

interface DrawerProps extends React.PropsWithChildren {
  button: React.ComponentType<{ className: string }>;
  className?: string;
}

export type DrawerRef = {
  close: () => void;
  open: () => void;
};

const Drawer = React.forwardRef<DrawerRef, DrawerProps>((props, ref) => {
  const { button, className, children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  useImperativeHandle(
    ref,
    () => ({
      close: handleClose,
      open: handleOpen,
    }),
    []
  );
  return <React.Fragment>{children}</React.Fragment>;
});

Drawer.displayName = "Drawer";
export default React.memo(Drawer);
