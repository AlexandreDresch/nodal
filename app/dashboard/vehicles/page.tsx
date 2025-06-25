"use client";

import Banner from "@/components/dashboard/vehicles/banner";
import tableDataDrivers from "@/variables/vehicles/table-data-drivers";
import HistoryContainer from "@/components/dashboard/vehicles/history-item";
import DriversTable from "@/components/dashboard/vehicles/table-drivers";
import VehicleCard from "@/components/dashboard/vehicles/vehicle-card";
import { Button } from "@/components/ui/button";

export default function Vehicles() {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <Banner />

        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            All Vehicles
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <Button
                variant={"outline"}
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              >
                Cars
              </Button>
            </li>
            <li>
              <Button
                variant={"outline"}
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              >
                Bikes
              </Button>
            </li>
            <li>
              <Button
                variant={"outline"}
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              >
                Vans
              </Button>
            </li>
            <li>
              <Button
                variant={"outline"}
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              >
                Trucks
              </Button>
            </li>
          </ul>
        </div>

        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <VehicleCard
            image="/images/volvo_fh.jpg"
            title="Volvo FH 440"
            drivers={[
              "/images/user.png",
              "/images/user.png",
              "/images/user.png",
            ]}
            capacity={10}
          />

          <VehicleCard
            image="/images/volvo_fh.jpg"
            title="Volvo FH 440"
            drivers={[
              "/images/user.png",
              "/images/user.png",
              "/images/user.png",
            ]}
            capacity={10}
          />

          <VehicleCard
            image="/images/volvo_fh.jpg"
            title="Volvo FH 440"
            drivers={[
              "/images/user.png",
              "/images/user.png",
              "/images/user.png",
            ]}
            capacity={10}
          />
        </div>

        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <VehicleCard
            image="/images/volvo_fh.jpg"
            title="Volvo FH 440"
            drivers={[
              "/images/user.png",
              "/images/user.png",
              "/images/user.png",
            ]}
            capacity={10}
          />

          <VehicleCard
            image="/images/volvo_fh.jpg"
            title="Volvo FH 440"
            drivers={[
              "/images/user.png",
              "/images/user.png",
              "/images/user.png",
            ]}
            capacity={10}
          />

          <VehicleCard
            image="/images/volvo_fh.jpg"
            title="Volvo FH 440"
            drivers={[
              "/images/user.png",
              "/images/user.png",
              "/images/user.png",
            ]}
            capacity={10}
          />
        </div>
      </div>

      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <DriversTable tableData={tableDataDrivers} />
        <div className="mb-5" />
        <HistoryContainer />
      </div>
    </div>
  );
}
