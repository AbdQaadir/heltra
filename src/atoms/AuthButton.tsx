import React from "react";
import { signIn, signOut } from "../../auth";
import { Button, ButtonProps } from "../components/ui/button";
import { redirect } from "next/navigation";

type AuthButtonProps = {
  type?: "signin" | "logout";
  size?: ButtonProps["size"];
  className?: string;
  variant?: ButtonProps["variant"];
  children?: React.ReactNode;
};
export default async function AuthButton({
  type = "signin",
  size = "sm",
  className,
  variant,
  children,
}: AuthButtonProps) {
  return (
    <form
      action={async () => {
        "use server";

        if (type === "signin") {
          await signIn("passage", { redirectTo: "/dashboard" });
          return;
        }

        if (type === "logout") {
          redirect("/api/auth/signout");

          // await signOut({ redirectTo: "/" });
        }
      }}
    >
      <Button variant={variant} size={size} className={className}>
        {children || "Sign In"}
      </Button>
    </form>
  );
}
