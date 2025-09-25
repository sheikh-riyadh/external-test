import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Overview from "../pages/Overview";
import Popular from "../pages/Popular";
import Ibnsina from "../pages/Ibnsina";
import Asgarali from "../pages/Asgarali";
import Medinova from "../pages/Medinova";


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
      {
        path: "/asgarali",
        element: <Asgarali/>,
      },
      {
        path: "/medinova",
        element: <Medinova/>,
      },
    ],
  },
]);

export default routes;
