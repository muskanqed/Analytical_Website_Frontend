import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LayoutWithSidebar from "./layouts/LayoutWithSidebar";
// import Dashboard from "./pages/Dashboard";
// import Settings from "./pages/Settings";
// import Reports from "./pages/Reports";
// import Events from "./pages/Events";
// import RealTimePage from "./pages/RealTimeView";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import SessionDetails from "./pages/SessionDetails";
// import SessionList from "./pages/SessionList";
import SignUp from "./pages/Siginup";
import SignIn from "./pages/Signin";
import { Toaster } from "sonner";
import LayoutWithHeader1 from "./layouts/LayoutWithHeader1";
import { AuthProvider } from "./contexts/authContext";
import UnProtectedRoute from "./components/unprotectedRoute";
import { WebsiteProvider } from "./contexts/websiteContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // for data fetching
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import RealTimePage from "./pages/RealTimeView";
import SessionList from "./pages/SessionList";
import SessionDetails from "./pages/SessionDetails";
import Settings from "./pages/Settings";
import EventsPage from "./pages/Events";

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <WebsiteProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route element={<LayoutWithHeader1 />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <UnProtectedRoute>
                    <SignIn />
                  </UnProtectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <UnProtectedRoute>
                    <SignUp />
                  </UnProtectedRoute>
                }
              />
              <Route path="/about" element={<About />} />
            </Route>
            <Route
              element={
                <ProtectedRoute>
                  <LayoutWithSidebar />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/dashboard/real-time-analytics"
                element={<RealTimePage />}
              />
              <Route path="/dashboard/reports" element={<Reports />} />
              <Route
                path="/dashboard/sessions-details"
                element={<SessionList />}
              />
              <Route
                path="/dashboard/sessions-details/:sessionId"
                element={<SessionDetails />}
              />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/events" element={<EventsPage />} />
            </Route>
          </Routes>
        </Router>
      </WebsiteProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
