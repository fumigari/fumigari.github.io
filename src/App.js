
import React, {useContext} from 'react';
import './App.css';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { ShowSidebarContext } from './hooks/ShowSidebar';

function App() {
  const { openSidebar } = useContext(ShowSidebarContext);

  return (
    <>
      <Sidebar />
      <main className={`main ` + openSidebar}>
        <Home />
      </main>
    </>
  );
}

export default App;
