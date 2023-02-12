import React, { createContext, useState } from "react";
interface Props {
  children?: React.ReactNode;
}

export const GlobalContext: React.Context<any> = createContext("");

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  //modal toggle state
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <GlobalContext.Provider
      value={{
        open,
        closeModal,
        openModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
