import { MdModeEditOutline } from "react-icons/md";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function LastDeliveries() {
  return (
    <Card className={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <p className="text-xl font-bold text-navy-700 dark:text-white">
          Last Deliveries
        </p>
        <p className="mt-2 text-base text-gray-600">
          Here you can find the last deliveries made by the user. Each delivery
          includes a brief description and a link to view more details about the
          product.
        </p>
      </div>

      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <Image
              width="100"
              height="70"
              className="h-[83px] w-[83px] rounded-lg"
              src={"/images/truck.png"}
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Food Delivery Service
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Truck #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See delivery details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>

      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <Image
              width="100"
              height="70"
              className="h-[83px] w-[83px] rounded-lg"
              src={"/images/truck.png"}
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Food Delivery Service
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Truck #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See delivery details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>

      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <Image
              width="100"
              height="70"
              className="h-[83px] w-[83px] rounded-lg"
              src={"/images/truck.png"}
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Food Delivery Service
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Truck #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See delivery details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>
    </Card>
  );
}
