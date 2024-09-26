import React, { createContext, useState } from 'react'
import { ListItemProps } from '../utils/interfaces'


interface AppContextType {
  listItems : ListItemProps[]
  setListItems: React.Dispatch<React.SetStateAction<ListItemProps[]>>
}

interface AppProviderProps {
    children : React.ReactNode
}

interface variant {
  id: number,
  image: string
}

export const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [listItems, setListItems] = useState<ListItemProps[]>([])

  
    const value = {
      listItems, setListItems
        
    }
  
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };