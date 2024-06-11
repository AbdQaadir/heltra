import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Title */}
      <div className="text-2xl font-bold text-gray-800">Health Tracker</div>
      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications Button */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
          Notifications
        </button>
        {/* Settings Button */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
          Settings
        </button>
        {/* Profile Icon */}
        <Image
          src="/profile-icon.png"
          alt="Profile"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </header>
  );
}

export default Header;
