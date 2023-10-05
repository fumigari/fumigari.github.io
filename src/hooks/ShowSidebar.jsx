import React, { createContext, useState } from 'react';

export const ShowSidebarContext = createContext('');

export const ShowSidebarProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState('');

	const showSidebar = () => {
    openSidebar === 'open' ? setOpenSidebar('') : setOpenSidebar('open');
  };

  return (
    <ShowSidebarContext.Provider value={{ openSidebar, showSidebar }}>
      {children}
    </ShowSidebarContext.Provider>
  );
};