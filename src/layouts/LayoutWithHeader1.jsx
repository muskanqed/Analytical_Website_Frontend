import { PublicHeader } from "../components/publicHeader";
import React from "react";
import { Outlet } from "react-router-dom";
// import { Header1 } from "../components/Header";

const LayoutWithHeader1 = () => (
  <div>
    <PublicHeader />
    <main>
      <Outlet />
    </main>
  </div>
);

export default LayoutWithHeader1;
