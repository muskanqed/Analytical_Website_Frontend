import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const LayoutWithHeader = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default LayoutWithHeader;
