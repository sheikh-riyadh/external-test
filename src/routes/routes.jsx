import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Overview from "../pages/Overview";
import Popular from "../pages/Popular";
import Ibnsina from "../pages/Ibnsina";
import Asgarali from "../pages/Asgarali";
import Medinova from "../pages/Medinova";
import Login from "../pages/Login";
import PrivateRoute from "./privateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        ),
      },
      {
        path: "/overview",
        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        ),
      },
      {
        path: "/popular",
        element: (
          <PrivateRoute>
            <Popular />
          </PrivateRoute>
        ),
      },
      {
        path: "/ibnsina",
        element: (
          <PrivateRoute>
            <Ibnsina />
          </PrivateRoute>
        ),
      },
      {
        path: "/asgarali",
        element: (
          <PrivateRoute>
            <Asgarali />
          </PrivateRoute>
        ),
      },
      {
        path: "/medinova",
        element: (
          <PrivateRoute>
            <Medinova />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
