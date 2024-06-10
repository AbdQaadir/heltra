"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChartLineUp,
  Folder,
  Hamburger,
  HandHeart,
  Heart,
  List,
  Target,
  Toolbox,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <div className="flex items-center justify-between w-full h-[80px] py-4 px-3 md:px-6">
        <h1 className="text-2xl font-bold">Heltra</h1>

        <nav className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700">
            Home
          </a>
          <a href="#" className="text-gray-700">
            Features
          </a>
          <a href="#" className="text-gray-700">
            Pricing
          </a>
          <a href="#" className="text-gray-700">
            Contact
          </a>
        </nav>

        <div className="flex gap-2 items-center">
          <Button
            variant="secondary"
            className="flex gap-1 items-center text-small px-4 py-2 rounded-lg"
          >
            Login
            <ArrowRight size={20} />
          </Button>

          <Button variant="ghost" className="md:hidden">
            <List size={30} />
          </Button>
        </div>
      </div>

      {/* Hero section */}
      <div className="bg-gradient-to-br from-[#a49c9c] to-[#d8d0d0]">
        <div className="min-h-[60vh] md:min-h-[90vh] w-[100%] max-w-[700px] mx-auto flex flex-col md:items-center justify-center px-4 md:text-center gap-4 md:gap-5">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl md:leading-loose">
            Track Your Health Effortlessly with Heltra
          </h1>
          <p
            className="
          text-md text-gray-700 mt-1 leading-1
        "
          >
            Monitor your vitals, access medical records, and stay on top of your
            health with our comprehensive tracker.
          </p>
          <Button variant="secondary" size="lg">
            Sign Up Now
          </Button>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-center mt-10">Features</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          {[
            {
              icon: <Heart size={50} />,
              title: "Vitals Tracking",
              description:
                "Log and monitor key health metrics like blood pressure, heart rate, and weight. View your data in easy-to-read charts and set reminders for regular checks.",
            },
            {
              icon: <Folder size={50} />,
              title: "Medical Records",
              description:
                "Securely store and manage your medical documents in one place. Access your prescriptions, lab results, and doctor's notes from any device.",
            },
            {
              icon: <Toolbox size={50} />,
              title: "Activity Monitoring",
              description:
                "Log daily activities including workouts and steps. Sync with fitness devices to track your progress and achieve your fitness goals.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-lg shadow-md min-h-[400px] max-w-[90%] w-[330px] md:w-[350px]"
            >
              {feature.icon}
              <h3 className="text-lg font-bold text-center">{feature.title}</h3>
              <p className="text-gray-700 text-center mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits section */}
      <div>
        <h2 className="text-2xl font-bold text-center mt-10">Benefits</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          {[
            {
              icon: <ChartLineUp size={50} />,
              title: "Improved Health",
              description:
                "Stay on top of your health with regular monitoring and personalized insights.",
            },
            {
              icon: <HandHeart size={50} />,
              title: "Efficient Care",
              description:
                "Access your medical records anytime, anywhere for quick consultations and appointments.",
            },
            {
              icon: <Target size={50} />,
              title: "Fitness Goals",
              description:
                "Track your fitness progress and set achievable goals with our activity monitoring feature.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-lg shadow-md min-h-[400px] max-w-[90%] w-[330px] md:w-[350px]"
            >
              {benefit.icon}
              <h3 className="text-lg font-bold text-center">{benefit.title}</h3>
              <p className="text-gray-700 text-center mt-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col content-center h-[200px] border-t-1 border-t-gray-800 text-grey-900 py-24 mt-24 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Heltra. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
