import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function VehicleCard(props: {
  image: string;
  title: string;
  drivers: string[];
  capacity: number;
  className?: string;
}) {
  const { title, image, drivers, capacity, className } = props;

  return (
    <Card
      className={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${className}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <Image
            width="280"
            height="280"
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            src={image}
            alt={title}
          />
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {capacity} tons
            </p>
          </div>

          <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#E0E5F2] text-xs text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
              +5
            </span>
            {drivers.map((driver, key) => (
              <span
                key={key}
                className="-mr-3 h-8 w-8 rounded-full border border-white dark:!border-navy-800"
              >
                <Image
                  width="20"
                  height="20"
                  className="h-full w-full rounded-full object-cover"
                  src={driver}
                  alt=""
                />
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <Button variant={"outline"} className="linear rounded-[20px] px-4 py-2 text-base font-medium transition duration-200 dark:active:opacity-90">
            See Details
          </Button>
        </div>
      </div>
    </Card>
  );
}
