import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import AvailableTests from "../pages/candidate/AvailableTests";
import TestDetails from "../pages/candidate/TestDetails";

import AdminDashboard from "../pages/admin/AdminDashboard";

import EmployerDashboard from "../pages/employer/EmployerDashboard";
import Assessments from "../pages/employer/Assessments";
import Candidates from "../pages/employer/Candidates";
import Results from "../pages/employer/Results";

import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/employer/Profile";
import Certificate from "../pages/candidate/Certificate";

function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Candidate Routes */}
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
        path="/examiner/dashboard"
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

      <Route
        path="/candidate/certificate"
        element={
          <ProtectedRoute>
            <Certificate/>
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Employer Routes */}
      <Route
        path="/employer/dashboard"
        element={
          <ProtectedRoute>
            <EmployerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employer/assessments"
        element={
          <ProtectedRoute>
            <Assessments />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employer/candidates"
        element={
          <ProtectedRoute>
            <Candidates />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employer/results"
        element={
          <ProtectedRoute>
            <Results />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employer/profile"
        element={
          <ProtectedRoute>
           <Profile/>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;