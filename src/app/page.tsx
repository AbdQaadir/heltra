import { auth } from "../../auth";
import AuthButton from "@/atoms/AuthButton";
import { Button } from "@/components/ui/button";
import Logo from "@/atoms/Logo";

export default async function Home() {
  const session = await auth();

  const isLoggedIn = !!session;
  return (
    <>
      <main className="py-8 px-5 h-[100vh] flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between w-full max-w-[900px] mx-auto py-2 px-3 md:px-6 border-2 rounded-3xl shadow-tertiary border-secondary">
          <div className="">
            <Logo />
          </div>

          {!isLoggedIn && (
            <>
              <p className="text-sm font-thin hidden md:block">
                Health Tracker with Passwordless Auth
              </p>

              <AuthButton className="flex gap-1 items-center rounded-2xl">
                Login
              </AuthButton>
            </>
          )}

          {isLoggedIn && (
            <>
              {session?.user?.email && (
                <p className="text-xs font-light">Hi, {session?.user?.email}</p>
              )}

              <AuthButton
                type="logout"
                variant="danger"
                className="flex gap-1 items-center rounded-2xl"
              >
                Sign out
              </AuthButton>
            </>
          )}
        </div>

        {/* Hero section */}
        <div>
          <div className="min-h-[60vh] md:min-h-[70vh] w-[100%] max-w-[900px] mx-auto flex flex-col md:items-center justify-center px-4 md:text-center gap-4 md:gap-5">
            <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">
              Track Your Health Effortlessly with Heltra
            </h1>
            <p className="font-thin text-lg md:text-xl mt-1 leading-1 text-tertiary">
              Monitor your vitals, access medical records, and stay on top of
              your health with our comprehensive tracker.
            </p>

            <div className="w-full md:max-w-[200px] md:mx-auto">
              {session ? (
                <Button size="xl" className="w-full md:text-lg">
                  Go to dashboard
                </Button>
              ) : (
                <AuthButton size="xl" className="w-full md:text-lg">
                  Get started
                </AuthButton>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full border-t-1 border-t-gray-800 text-grey-900 text-center">
          <p className="text-sm font-thin md:font-light">
            &copy; {new Date().getFullYear()} Heltra. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
