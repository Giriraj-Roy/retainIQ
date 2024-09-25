"use client"
import { AppProvider } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";


const Home : React.FC = () => {
  return (
    <AppProvider>
      <Dashboard/>
    </AppProvider>
  );
}
export default Home
