import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./sidebar";
import Header from "./header";

const Layout: React.FC = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <section className="flex">
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <div className="w-full h-dvh flex flex-col overflow-hidden">
        <Header isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
