import AuthButton from "@/atoms/AuthButton";
import Logo from "@/atoms/Logo";
import { LogOut, Outdent } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className="shadow-md py-4 px-6 flex justify-between items-center">
      <Logo />

      <div className="flex items-center space-x-4">
        <AuthButton
          type="logout"
          variant="danger"
          size="sm"
          className="flex gap-2 items-center rounded-2xl"
        >
          Sign Out
          <LogOut className="w-5 h-5" />
        </AuthButton>
      </div>
    </header>
  );
}

export default Header;
