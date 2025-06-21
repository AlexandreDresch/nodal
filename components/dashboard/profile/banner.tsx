import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Banner() {
  return (
    <Card className={"items-center w-full h-full p-[16px] bg-cover"}>
      <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-gradient-to-r from-green-500 to-purple-500 dark:from-green-700 dark:to-purple-800">
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-green-300 dark:!border-navy-700">
          <Image
            width="180"
            height="180"
            className="h-full w-full rounded-full"
            src={"/images/user.png"}
            alt=""
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          John Doe
        </h4>
        <h5 className="text-base font-normal text-gray-600">Product Manager</h5>
      </div>

      <div className="mb-3 mt-6 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            17
          </h4>
          <p className="text-sm font-normal text-gray-600">Vehicle(s)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            20
          </h4>
          <p className="text-sm font-normal text-gray-600">Driver(s)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            434
          </h4>
          <p className="text-sm font-normal text-gray-600">Delivers</p>
        </div>
      </div>
    </Card>
  );
}
