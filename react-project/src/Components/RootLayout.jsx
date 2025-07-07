import React from "react";
import Navbar from "../Components/Navbar";

import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <div id="sidebar">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}
