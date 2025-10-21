import { useState } from 'react';

type value = string | null;


interface DropdownState {
  value: string | null;
  isOpen: boolean;
  setValue: (label: string) => void;
  setOpen: (isOpen: boolean) => void;
  handleSelect: (id: number, label: string) => void;
}

export function useSelectState(initialValue: value = null): DropdownState {
  const [value, setValue] = useState<string | null>(initialValue);
  const [isOpen, setOpen] = useState(false);

  const handleSelect = (id: number, label: string) => {
    setValue(label);
    setOpen(false);
  };

  return {
    value,
    isOpen,
    setValue,
    setOpen,
    handleSelect,
  };
}