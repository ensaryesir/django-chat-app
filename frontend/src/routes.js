import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./containers/Chat";
import Hoc from "./hoc/hoc";

const BaseRouter = () => (
  <Routes>
    <Route path="/:chatID" element={<Hoc><Chat /></Hoc>} />
  </Routes>
);

export default BaseRouter;
