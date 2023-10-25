import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "~/pages/Home";
import "~/scss/App.scss";

export const App = () => {
  const getPath = (scale?: string, chord?: string) => {
    if (scale && chord) return `/${scale}/${chord}`;
    else if (scale) return `/${scale}`;
    return "/";
  };

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path={getPath(":scale")} element={<Home />}>
            <Route path={getPath(":scale", ":chord")} element={<Home />} />
          </Route>
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};
