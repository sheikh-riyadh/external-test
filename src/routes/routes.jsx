import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Overview from "../pages/Overview";
import Popular from "../pages/Popular";
import Ibnsina from "../pages/Ibnsina";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/popular",
        element: <Popular/>,
      },
      {
        path: "/ibnsina",
        element: <Ibnsina/>,
      },
    ],
  },
]);

export default routes;
