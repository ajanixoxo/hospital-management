import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./pages/general/Home";
import PageNotFound from "./pages/general/PageNotFound";
import About from "./pages/general/About";
import DoctorLayout from "./components/layout/DoctorLayout";
import Appointment from "./pages/doctor/appointment";
import Patient from "./pages/doctor/patient";

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
    ],
  },
  {
    path: "/doctor",
    element: <DoctorLayout />,
    children: [
      {
        index: true,
        element: <div>Appointment Details</div>,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: "patient",
        element: <Patient />,
      },
      {
        path: "appointment/:id",
        element: <div>Doctor Profile</div>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
