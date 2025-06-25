import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Banner() {
  return (
    <Card
      className="flex w-full flex-col rounded-[20px] bg-contain bg-no-repeat bg-right px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{
        backgroundImage: "url('/images/truck.png')",
      }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Manage Your Vehicles
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          Keep track of your vehicles, monitor their performance, and ensure
          they are always ready for the road. Add new vehicles to your fleet and
          manage them efficiently.
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <Button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70" variant={"outline"}>
            Add New
          </Button>

          <Button className="text-base font-medium 2xl:ml-2">
            Watch Tutorial
          </Button>
        </div>
      </div>
    </Card>
  );
}
