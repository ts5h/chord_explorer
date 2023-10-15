import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "./scss/App.scss";

export const App = () => {
  const getPath = (scale: string, chord: string) => `/${scale}/${chord}`;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path={getPath(":scale", ":chord")} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
