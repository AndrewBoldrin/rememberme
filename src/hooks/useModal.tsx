import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };

  return { open, setOpen, onClose };
};
