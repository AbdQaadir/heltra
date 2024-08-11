import AuthButton from "@/atoms/AuthButton";
import React from "react";

function Header() {
  return (
    <header className="shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Health Tracker</div>

      <div className="flex items-center space-x-4">
        <AuthButton type="logout" variant="danger" size="sm">
          Sign Out
        </AuthButton>
      </div>
    </header>
  );
}

export default Header;
