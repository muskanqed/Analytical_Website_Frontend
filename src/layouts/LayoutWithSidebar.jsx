import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';

const LayoutWithSidebar = () => (
  <div className='flex'>
    <Sidebar />
    <div className='flex-1'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  </div>
);

export default LayoutWithSidebar;
