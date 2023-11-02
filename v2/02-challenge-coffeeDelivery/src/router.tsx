import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  }
]);
