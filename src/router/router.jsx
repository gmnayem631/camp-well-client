import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import CampDetails from "../pages/Home/PopularCamps/CampsDetail";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "../routes/PrivateRoute";
import AddCamp from "../pages/Dashboard/AddCamp";
import OrganizerProfile from "../pages/Dashboard/OrganizerProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ManageCamps from "../pages/Dashboard/ManageCamps";
import UpdateCamp from "../pages/Dashboard/UpdateCamp";
import OrganizerHome from "../pages/Dashboard/OrganizerHome";
import ParticipantHome from "../pages/Dashboard/Participant/ParticipantHome";
import AdminHome from "../pages/Dashboard/MakeAdmin/AdminHome";
import AdminRoute from "../pages/Dashboard/MakeAdmin/AdminRoute";
import OrganizerRoute from "../pages/Dashboard/OrganizerRoute";
import ParticipantRoute from "../pages/Dashboard/Participant/ParticipantRoute";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyRegisteredCamps from "../pages/Dashboard/Participant/MyRegisteredCamps";
import ManageRegistered from "../pages/Dashboard/ManageRegistered";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "camp-details/:campId",
        element: <CampDetails />,
      },
      {
        path: "available-camps",
        element: <AvailableCamps />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "payment/:id",
        Component: Payment,
      },
      // Organizer routes
      {
        path: "organizer",
        element: (
          <OrganizerRoute>
            <OrganizerHome />
          </OrganizerRoute>
        ),
      },
      {
        path: "add-camp",
        element: (
          <OrganizerRoute>
            <AddCamp />
          </OrganizerRoute>
        ),
      },
      {
        path: "organizer/profile",
        element: (
          <OrganizerRoute>
            <OrganizerProfile />
          </OrganizerRoute>
        ),
      },
      {
        path: "manage-camps",
        element: (
          <OrganizerRoute>
            <ManageCamps />
          </OrganizerRoute>
        ),
      },
      {
        path: "manage-registered",
        element: (
          <OrganizerRoute>
            <ManageRegistered />
          </OrganizerRoute>
        ),
      },
      {
        path: "update-camp/:campId",
        element: (
          <OrganizerRoute>
            <UpdateCamp />
          </OrganizerRoute>
        ),
      },

      // Participant routes
      {
        path: "participant",
        element: (
          <ParticipantRoute>
            <ParticipantHome />
          </ParticipantRoute>
        ),
      },

      {
        path: "my-registered-camps",
        element: (
          <ParticipantRoute>
            <MyRegisteredCamps />
          </ParticipantRoute>
        ),
      },

      // Admin routes
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
