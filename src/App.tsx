import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "~/pages/Home";
import "~/scss/App.scss";

export const App = () => {
  const router = createHashRouter([
    {
      path: "/:scale",
      element: <Home />,
    },
    {
      path: "/:scale/:chord",
      element: <Home />,
    },
    {
      path: "/*",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};
