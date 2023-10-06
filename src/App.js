
import React, {useContext} from 'react';
import './App.css';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { ShowSidebarContext } from './hooks/ShowSidebar';
import InProgress from './assets/in-progress.png';

function App() {
  const { openSidebar } = useContext(ShowSidebarContext);

  return (
    <>
      <Sidebar />
      <main className={`main ` + openSidebar}>
        <img src={InProgress} alt='work in progress sign' className='in-progress' />
        <Home />
      </main>
    </>
  );
}

export default App;
