import CardMenu from "./card-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { GripIcon, CheckCircle } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";

export default function TaskCard () {
  return (
    <Card className="pb-7 p-[20px]">
      <CardHeader className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-white/5">
            <CheckCircle className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
            Tasks
          </h4>
        </div>
        <CardMenu />
      </CardHeader>
      <div className="h-full w-full">
        <div className="mt-5 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Landing Page Design
            </p>
          </div>
          <div>
            <GripIcon className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Mobile App Design
            </p>
          </div>
          <div>
            <GripIcon className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Dashboard Builder
            </p>
          </div>
          <div>
            <GripIcon className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Landing Page Design
            </p>
          </div>
          <div>
            <GripIcon className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Dashboard Builder
            </p>
          </div>
          <div>
            <GripIcon className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>
      </div>
    </Card>
  );
};
