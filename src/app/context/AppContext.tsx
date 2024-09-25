import React, { createContext, useState } from 'react'


interface AppContextType {

}

interface AppProviderProps {
    children : React.ReactNode
}

export const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {



  
    const value = {
        
    }
  
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };