import React, { createContext, useState, ReactNode } from 'react';

interface ModalContextType {
  openModal: (modalType: string) => void;
  closeModal: () => void;
  modalType: string | null;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  modalType: null,
});

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = (type: string) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalType }}>
      {children}
    </ModalContext.Provider>
  );
};




