"use client";

import React from "react";

import { useEffect } from "react";
import { Authentikit } from "@passageidentity/authentikit";

function PasskeyReadiness() {
  useEffect(() => {
    const authentikit = new Authentikit({
      clientSideKey: process.env.NEXT_PUBLIC_PASSAGE_CLIENT_KEY as string,
    });
    authentikit.passkey.evaluateReadiness();
  }, []);

  return <></>;
}

export default PasskeyReadiness;
