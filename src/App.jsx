import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutWithHeader from './layouts/LayoutWithHeader';
import LayoutWithSidebar from './layouts/LayoutWithSidebar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

const App = () => (
  <Router>
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route element={<LayoutWithSidebar />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/hello" element={<Dashboard />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
