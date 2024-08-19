import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase-client";
import {
  Barbell,
  Heartbeat,
  PintGlass,
  Ruler,
  Thermometer,
  Wind,
} from "@phosphor-icons/react/dist/ssr";

import Link from "next/link";
import React from "react";

function Page(props: any) {
  const supabase = createClient();

  const vitalsArray = [
    {
      icon: <Barbell size={70} weight="duotone" />,
      name: "Weight",
      description:
        "Weight is a measure of the force of gravity pulling down on the body. It depends on your mass and the distance between you and the center of the Earth.",
      value: "70",
      unit: "kg",
    },
    {
      icon: <Ruler size={70} weight="duotone" />,
      name: "Height",
      description:
        "Height is the measure of vertical distance, either how tall something or someone is, or how high up it is.",
      value: "170",
      unit: "cm",
    },
    {
      icon: <PintGlass size={70} weight="duotone" />,
      name: "Blood Pressure",
      description:
        "Blood pressure is the force of blood pushing against the walls of the arteries as the heart pumps blood. If this pressure rises and stays high over time, it can damage the body in many ways.",
      value: "120/80",
      unit: "mmHg",
    },
    {
      icon: <Heartbeat size={70} weight="duotone" />,
      name: "Heart Rate",
      description:
        "Heart rate is the speed of the heartbeat measured by the number of contractions of the heart per minute (bpm).",
      value: "72",
      unit: "bpm",
    },
    {
      icon: <Wind size={70} weight="duotone" />,
      name: "Blood Oxygen",
      description:
        "Blood oxygen level is the amount of oxygen circulating in the blood. Most of the oxygen is carried by red blood cells, which collect oxygen from the lungs and deliver it to all parts of the body.",
      value: "98",
      unit: "%",
    },
    {
      icon: <Thermometer size={70} weight="duotone" />,
      name: "Temperature",
      description:
        "Body temperature is a measure of your body’s ability to make and get rid of heat. If you tell your doctor about your temperature reading, be sure to say where it was taken: in the mouth, the rectum, the ear, or the armpit.",
      value: "36.5",
      unit: "°C",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <div className="flex flex-col gap-1">
          <p>Just came back from another consultation?</p>

          <p className="text-small font-thin">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <Button className="w-full md:w-auto" variant="outline">
          Add new records
        </Button>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {vitalsArray?.map((data) => {
          return (
            <Card key={`vital-card-for-${data.name}`}>
              <CardHeader>
                <div className="flex gap-2 items-center">
                  {data.icon}

                  <div className="flex flex-col gap-1">
                    <CardTitle className="text-xl font-normal">
                      {data.name}
                    </CardTitle>

                    <p className="text-xl font-bold">
                      {data?.value} {data.unit}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{data?.description}</CardDescription>
              </CardContent>

              <CardFooter></CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
