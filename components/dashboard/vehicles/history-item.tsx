import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HistoryContainer() {
  const HistoryData = [
    {
      name: "Volvo FH 440",
      image: "/images/volvo_fh.jpg",
      driver: "Mark Benjamin",
      cargo: "Electronics",
      time: "30s",
    },
    {
      name: "Volvo FH 440",
      image: "/images/volvo_fh.jpg",
      driver: "Mark Benjamin",
      cargo: "Electronics",
      time: "50m",
    },
    {
      name: "Volvo FH 440",
      image: "/images/volvo_fh.jpg",
      driver: "Mark Benjamin",
      cargo: "Electronics",
      time: "20s",
    },
    {
      name: "Volvo FH 440",
      image: "/images/volvo_fh.jpg",
      driver: "Mark Benjamin",
      cargo: "Electronics",
      time: "4h",
    },
    {
      name: "Volvo FH 440",
      image: "/images/volvo_fh.jpg",
      driver: "Mark Benjamin",
      cargo: "Electronics",
      time: "30s",
    },
    {
      name: "Volvo FH 440",
      image: "/images/volvo_fh.jpg",
      driver: "Mark Benjamin",
      cargo: "Electronics",
      time: "2m",
    },
  ];

  return (
    <Card className={"mt-3 !z-5 overflow-hidden"}>
      <CardHeader className="flex items-center justify-between rounded-t-3xl p-3">
        <div className="text-lg font-bold text-navy-700 dark:text-white">
          History
        </div>
        <Button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
          See all
        </Button>
      </CardHeader>

      <CardContent>
        {HistoryData.map((data, index) => (
          <div
            key={index}
            className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center">
                <Image
                  width="80"
                  height="80"
                  className="h-full w-full rounded-xl"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-base font-bold text-navy-700 dark:text-white">
                  {" "}
                  {data.name}
                </h5>
                <p className="mt-1 text-sm font-normal text-gray-600">
                  {" "}
                  {data.driver}{" "}
                </p>
              </div>
            </div>

            <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
              <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                {data.cargo}
              </div>
              <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                <p>{data.time}</p>
                <p className="ml-1">ago</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
