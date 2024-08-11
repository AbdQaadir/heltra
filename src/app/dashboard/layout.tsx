import React from "react";
import Header from "./components/Header";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    // Redirect to the home page
    redirect("/");
  }

  return (
    <div className="flex flex-col h-[100vh] w-full">
      <Header />

      <div className="p-6">{children}</div>
    </div>
  );
}

export default layout;
