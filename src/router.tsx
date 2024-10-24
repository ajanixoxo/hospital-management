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
import ProfilePage from "./pages/doctor/settings/ProfilePage";
import EditProfilePage from "./pages/doctor/settings/EditProfilePage";
import ChangePassword from "./pages/doctor/settings/ChangePassword";
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
        path: "schedule",
        element: <SchedulePage />,
      },
      {
       path:"settings",
       children: [
        {
          path: "profile-page",
          element: <ProfilePage />,
        },
        {
          path: "edit-profile",
          element: <EditProfilePage />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
        },
       ]
      },
        path: "diagnosis",
        element: <Diagnosis />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
