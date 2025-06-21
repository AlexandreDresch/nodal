import { Card } from "@/components/ui/card";
import CardMenu from "../default/card-menu";
import { BsCloudCheck } from "react-icons/bs";

export default function Storage () {
  return (
    <Card className={"w-full h-full p-4"}>
      <div className="ml-auto">
        <CardMenu />
      </div>
      <div className="mb-auto flex flex-col items-center justify-center">
        <div className="mt-2 flex items-center justify-center rounded-full p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">
          <BsCloudCheck className="text-green-500"/>
        </div>
        <p className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
          Your storage
        </p>
        <p className="px-5 text-center text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
          Supervise your drive space in the easiest way
        </p>
      </div>


      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-600">25.6 GB</p>
          <p className="text-sm font-medium text-gray-600">50 GB</p>
        </div>
        <div className="mt-2 flex h-3 w-full items-center rounded-full dark:!bg-navy-700">
          <span className="h-full w-1/2 rounded-full bg-green-400 dark:!bg-white" />
        </div>
      </div>
    </Card>
  );
};
