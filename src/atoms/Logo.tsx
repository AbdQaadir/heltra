"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import LogoImage from "../../public/logo.png";
import LogoText from "../../public/logo-2.png";

function Logo() {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="hidden md:block">
        <Image src={LogoImage} alt="logo" height={40} />
      </div>

      <div className="block md:hidden">
        <Image src={LogoText} alt="logo" height={40} />
      </div>
    </div>
  );
}

export default Logo;
