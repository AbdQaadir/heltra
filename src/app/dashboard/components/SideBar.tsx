"use client";

import {
  Carrot,
  Gear,
  Heartbeat,
  HouseSimple,
  Notebook,
  Pulse,
  SignOut,
} from "@phosphor-icons/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideBar() {
  const pathname = usePathname();

  console.log({ pathname });
  const navLinks = [
    {
      href: "/dashboard",
      icon: <HouseSimple size={20} weight="fill" />,
      text: "Dashboard",
    },
    {
      href: "/dashboard/vitals",
      icon: <Heartbeat size={20} weight="fill" />,
      text: "Vitals",
    },
    {
      href: "/dashboard/records",
      icon: <Notebook size={20} weight="fill" />,
      text: "Records",
    },
    {
      href: "/dashboard/activity",
      icon: <Pulse size={20} weight="fill" />,
      text: "Activity",
    },
    {
      href: "/dashboard/nutrition",
      icon: <Carrot size={20} weight="fill" />,
      text: "Nutrition",
    },
    {
      href: "/dashboard/settings",
      icon: <Gear size={20} weight="fill" />,
      text: "Settings",
    },
  ];
  return (
    <aside className="flex flex-col w-full h-full py-4  shadow-md">
      <nav className="flex-1">
        <div className="w-full mt-2 mb-6">
          <h2
            className="
            text-2xl font-bold text-gray-800 px-4"
          >
            heltra
          </h2>
        </div>

        <ul>
          {navLinks?.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li className="mb-1" key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "flex items-center gap-2 py-2.5 px-4 rounded transition duration-200 text-sm text-gray-700 bg-white  hover:bg-blue-50",
                    {
                      "bg-blue-100": isActive,
                      "text-blue-900": isActive,
                    }
                  )}
                >
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div>
        <button
          className="w-full py-2.5 px-4 flex gap-2 items-center rounded transition duration-200 text-sm font-semibold text-left text-red-700 bg-white hover:bg-red-50"
          onClick={() => {
            console.log("Logout");
          }}
        >
          <SignOut size={25} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
