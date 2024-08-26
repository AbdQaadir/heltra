"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase-client";
import { useToast } from "@/components/ui/use-toast";

type VitalsType = {
  weight: number;
  height: number;
  blood_pressure: string;
  heart_rate: string;
  blood_oxygen: string;
  temperature: number;
};

type PropsType = {
  userId: string;
  trigger: React.ReactNode;
  initialValues: VitalsType & { id?: string };
};

function AddNewRecordsModal({ userId, initialValues, trigger }: PropsType) {
  const { toast } = useToast();

  const supabase = createClient();

  const triggerButtonRef = React.useRef<HTMLButtonElement>(null);

  const [formState, setFormState] = useState(initialValues);

  const handleFieldChange = (
    field: keyof typeof formState,
    value: string | number
  ) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from("vitals")
      .insert([
        {
          userId,
          weight: formState?.weight,
          height: formState?.height,
          blood_pressure: formState?.blood_pressure,
          heart_rate: formState?.heart_rate,
          blood_oxygen: formState?.blood_oxygen,
          temperature: formState?.temperature,
        },
      ])
      .select();

    if (data) {
      toast({
        title: "Success",
        description: "Records updated successfully",
      });

      setFormState(data[0]);
      triggerButtonRef.current?.click();
    }
  };
  const isSubmitButtonDisabled = Object.values(formState).some(
    (value) => !value
  );

  return (
    <>
      <Dialog>
        <DialogTrigger asChild ref={triggerButtonRef}>
          {trigger}
        </DialogTrigger>
        <DialogContent className="bg-primary max-w-[90%] mx-auto w-[925px] max-h-[500px] overflow-scroll">
          <DialogHeader>
            <DialogTitle className="text-3xl">Edit records</DialogTitle>
            <DialogDescription className="text-secondary">
              Make changes to your medical records here. Click save when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="w-100 grid md:grid-cols-2 gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                Weight (kg)
              </Label>
              <Input
                id="weight"
                className="col-span-full text-primary"
                type="number"
                value={formState["weight"]}
                onChange={(event) =>
                  handleFieldChange("weight", event.target?.value)
                }
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="username" className="text-left">
                Height (cm)
              </Label>
              <Input
                id="height"
                className="col-span-full text-primary"
                type="number"
                value={formState["height"]}
                onChange={(event) =>
                  handleFieldChange("height", event.target?.value)
                }
              />
            </div>

            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="username" className="text-left">
                Blood pressure (mmHg)
              </Label>
              <Input
                id="blood_pressure"
                className="col-span-full text-primary"
                value={formState["blood_pressure"]}
                onChange={(event) =>
                  handleFieldChange("blood_pressure", event.target?.value)
                }
              />
            </div>

            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="username" className="text-left">
                Heart rate (bpm)
              </Label>
              <Input
                id="heart_rate"
                className="col-span-full text-primary"
                value={formState["heart_rate"]}
                onChange={(event) =>
                  handleFieldChange("heart_rate", event.target?.value)
                }
              />
            </div>

            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="username" className="text-left">
                Blood Oxygen (%)
              </Label>
              <Input
                id="blood_oxygen"
                className="col-span-full text-primary"
                value={formState["blood_oxygen"]}
                onChange={(event) =>
                  handleFieldChange("blood_oxygen", event.target?.value)
                }
              />
            </div>

            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="username" className="text-left">
                Temperature (C)
              </Label>
              <Input
                id="temperature"
                className="col-span-full text-primary"
                value={formState["temperature"]}
                onChange={(event) =>
                  handleFieldChange("temperature", event.target?.value)
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitButtonDisabled}
              onClick={handleSubmit}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddNewRecordsModal;
