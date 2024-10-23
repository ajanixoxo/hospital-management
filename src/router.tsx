import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./pages/general/Home";
import PageNotFound from "./pages/general/PageNotFound";
import About from "./pages/general/About";
import DoctorLayout from "./components/layout/DoctorLayout";
import Appointment from "./pages/doctor/appointment";
import Patient from "./pages/doctor/patient";
import Transactions from "./pages/doctor/transactions";
import DoctorReports from "./pages/doctor/reports";

import Diagnosis from "./pages/Diagnosis";

import SchedulePage from "./pages/doctor/Schedule";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import Login from "./pages/general/Login";
import Signup from "./pages/general/Signup";
import ForgotPassword from "./pages/general/ForgotPassord";

// pages

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/doctor",
    element: <DoctorLayout />,
    children: [
      {
        index: true,
        element: <div>Docts</div>,
      },
      {
        path: "dashboard",
        element: <DoctorDashboard />,
      },
      {
        path: "appointments",
        element: <Appointment />,
      },
      {
        path: "patients",
        element: <Patient />,
      },
      {
        path: "appointment/:id",
        element: <div>Doctor Profile</div>,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "reports",
        element: <DoctorReports />,
      },
      {
        path: "diagnosis",
        element: <Diagnosis />,
      },

      { path: "Schedule", element: <SchedulePage /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
