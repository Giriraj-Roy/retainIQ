import { useContext } from "react";
import { AppContext } from "../context/AppContext";
/**
 * Custom Hook to access AppContext Easily
 * @returns the context fetched from AppContext
 */

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export default useAppContext;
