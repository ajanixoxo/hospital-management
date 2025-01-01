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
import Diagnosis from "./pages/doctor/diagnosis/Diagnosis";
import SchedulePage from "./pages/doctor/Schedule";
import ProfilePage from "./pages/doctor/settings/ProfilePage";
import EditProfilePage from "./pages/doctor/settings/EditProfilePage";
import ChangePassword from "./pages/doctor/settings/ChangePassword";
import Settings from "./pages/doctor/settings/Settings";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import Login from "./pages/general/Login";
import Signup from "./pages/general/Signup";
import ForgotPassword from "./pages/general/ForgotPassord";
import EditDiagnosis from "./pages/doctor/diagnosis/EditDiagnosis";
import NewPatientDiagnosis from "./pages/doctor/diagnosis/NewPatientDiagnosis";
import PrescriptionsPage from "./pages/doctor/prescription/page";
import DiagnosisCategory from "./pages/doctor/diagnosis/DiagnosisCategory";
import Demo from "./pages/doctor/prescription/demo";
import CreatePrescription from './pages/doctor/prescription/prescription-create';
import PrescriptionDetails from "./pages/doctor/prescription/prescription-details";
import EditPrescription from "./pages/doctor/prescription/edit-prescription";

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
        path: "prescription",
        children: [
          {
            index: true,
            element: <PrescriptionsPage />
          },
          {
            path: "demo",
            element: <Demo />

          },
          {
            path: "create-prescription",
            element: <CreatePrescription />

          },
          {
            path: ":id",
            element: <PrescriptionDetails />

          },
          {
            path: ":id/edit",
            element: <EditPrescription />

          }
        ]
      },
      {
        path: "settings",

        children: [
          {
            index: true,
            element: <Settings />,
          },
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
      {
        path: "diagnosis",
        element: <Diagnosis />,
      },
      {
        path: "edit-diagnosis/:id", // nested route
        element: <EditDiagnosis />,
      },
      {
        path: 'new-diagnosis',
        element: <NewPatientDiagnosis />
      },

      {
        path: 'diagnosis-category',
        element: <DiagnosisCategory />
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
