import { createBrowserRouter } from "react-router-dom";
import { RouteEnums } from "../utils/enums/routeEnum";

const AppRouter = createBrowserRouter([
  {
    path: `/${RouteEnums.MAIN}`,
    element: <>1</>,
  },
  {
    path: `/${RouteEnums.ORDERS}`,
    element: <>2</>,
  },
]);

export default AppRouter;
