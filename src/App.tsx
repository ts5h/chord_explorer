import React from "react";
import { createHashRouter, RouterProvider } from "react-router";
import { Home } from "@/pages/Home";
import "@/scss/App.scss";
import ReactGA from "react-ga4";

ReactGA.initialize(`${import.meta.env.VITE_GA_TRACKING_ID ?? undefined}`);
ReactGA.send({ hitType: "pageview" });

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
