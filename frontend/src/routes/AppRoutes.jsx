import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import CandidateDashboard from "../pages/candidate/CandidateDashboard";

import AdminDashboard from "../pages/admin/AdminDashboard";

import EmployerDashboard from "../pages/employer/EmployerDashboard";

import ProtectedRoute from "./ProtectedRoute";
import AvailableTests from "../pages/candidate/AvailableTests";
import TestDetails from "../pages/candidate/TestDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/candidate/dashboard"
        element={
          <ProtectedRoute>
            <CandidateDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employer/dashboard"
        element={
          <ProtectedRoute>
            <EmployerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/candidate/tests"
        element={
          <ProtectedRoute>
            <AvailableTests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/candidate/test/:id"
        element={
          <ProtectedRoute>
            <TestDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
