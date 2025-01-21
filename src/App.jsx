import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutWithHeader from "./layouts/LayoutWithHeader";
import LayoutWithSidebar from "./layouts/LayoutWithSidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Overview from "./pages/Overview";
import Reports from "./pages/Reports";
import Userflow from "./pages/Userflow";
import Events from "./pages/Events";
import SignUp from "./pages/Siginup";
import SignIn from "./pages/Signin";
import Notifications from "./pages/Notifications";
import { Toaster } from "sonner";

const App = () => (
  <>
    <Toaster />
    <Router>
      <Routes>
        <Route element={<LayoutWithHeader />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<LayoutWithSidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/user-flow" element={<Userflow />} />
          <Route path="/dashboard/real-time-analytics" element={<Overview />} />
          <Route path="/dashboard/events" element={<Events />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  </>
);

export default App;
