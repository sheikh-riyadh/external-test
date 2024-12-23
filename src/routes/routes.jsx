import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Overview from "../pages/Overview";
import AddProperty from "../pages/AddProperty";
import ViewProperties from "../pages/ViewProperties";
import CheckIns from "../pages/CheckIns";
import Checkouts from "../pages/Checkouts";
import UpdateProperty from "../pages/UpdateProperty";

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
        path: "/add-property",
        element: <AddProperty />,
      },
      {
        path: "/update-property",
        element: <UpdateProperty />,
      },
      {
        path: "/view-properties",
        element: <ViewProperties />,
      },
      {
        path: "/check-ins",
        element: <CheckIns />,
      },
      {
        path: "/checkouts",
        element: <Checkouts />,
      },
    ],
  },
]);

export default routes;
