import React, { createContext, useState } from 'react'
import { ListItemProps } from '../utils/interfaces'


interface AppContextType {
  listItems : ListItemProps[]
  setListItems: React.Dispatch<React.SetStateAction<ListItemProps[]>>
}

interface AppProviderProps {
    children : React.ReactNode
}

// AppContext created with Type Interface declared in AppContextType
export const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [listItems, setListItems] = useState<ListItemProps[]>([]) // All the items in the rows are elements of array of listItems

    // context values passed here as objects to be propagated to the AppProvider
    const value = {
      listItems, setListItems
    }
  
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };