import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100vh] w-full flex ">
      <div className="w-[250px] h-full fixed left-0 top-0">
        <SideBar />
      </div>
      <div className="flex-1 ml-[250px]">
        <Header />

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export default layout;
