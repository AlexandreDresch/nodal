import { Bot, ChevronsRight, Map, Truck, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Features() {
  return (
    <div className="w-full py-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]">
      <div className="container mx-auto bg-[url(/images/map.svg)] bg-contain bg-center bg-no-repeat">
        <div className="flex flex-col gap-10 px-4">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge
                variant="outline"
                className="border-teal-500 min-w-2xs text-teal-500 uppercase font-light tracking-widest"
              >
                What You&apos;ll Find
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-4xl font-regular text-left">
                Intelligent Routing and Dynamic Monitoring
              </h2>
              <p className="text-lg max-w-xl lg:max-w-4xl leading-relaxed tracking-tight text-muted-foreground  text-left">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever. We are building a platform that will allow you to
                manage your entire supply chain in one place.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/65 h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col bg-[url(/images/truck.png)] bg-right bg-no-repeat bg-contain">
              <Bot className="w-8 h-8 text-teal-500" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  AI-Powered Route Optimization
                </h3>
                <p className="text-muted-foreground max-w-xl text-xs">
                  Smart algorithms to reduce delivery time and fuel costs.
                </p>
                <ul className="flex flex-col gap-2 my-4">
                  <li className="text-muted-foreground max-w-xl text-base flex gap-1">
                    <ChevronsRight className="text-teal-500" />
                    Dynamic route adjustments in real-time
                  </li>
                  <li className="text-muted-foreground max-w-xl text-base flex gap-1">
                    <ChevronsRight className="text-teal-500" />
                    Traffic, weather, and delivery window considerations
                  </li>
                  <li className="text-muted-foreground max-w-xl text-base flex gap-1">
                    <ChevronsRight className="text-teal-500" />
                    Up to 40% reduction in operational costs
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white/65 aspect-square p-6 flex justify-between flex-col bg-[url(/images/map-pins.png)] bg-contain bg-no-repeat bg-top-right">
              <Map className="w-8 h-8 text-teal-500" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Multi-Stop Route Planning
                </h3>
                <p className="text-muted-foreground max-w-xl text-xs">
                  Optimize hundreds of stops in seconds.
                </p>

                <ul className="flex flex-col gap-2 my-4">
                  <li className="text-muted-foreground max-w-xl text-base flex gap-1">
                    <ChevronsRight className="text-teal-500" />
                    Batch address processing
                  </li>
                  <li className="text-muted-foreground max-w-xl text-base flex gap-1">
                    <ChevronsRight className="text-teal-500" />
                    Priority-based sequencing (e.g., perishable goods)
                  </li>
                  <li className="text-muted-foreground max-w-xl text-base flex gap-1">
                    <ChevronsRight className="text-teal-500" />
                    Customizable vehicle constraints
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/65 aspect-square p-6 flex justify-between flex-col bg-[url(/images/laptop.png)]  bg-no-repeat bg-right bg-[length:50%]">
              <Truck className="w-8 h-8 text-teal-500" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Live Driver Tracking & Analytics
                </h3>
                <p className="text-muted-foreground max-w-xl text-xs">
                  Monitor and improve fleet performance.
                </p>

                <ul className="flex flex-col gap-2 my-4">
                  <li className="text-muted-foreground max-w-xl text-base flex gap-1">
                    <ChevronsRight className="text-teal-500" />
                    Real-time GPS tracking for ETA accuracy
                  </li>
                  <li className="text-muted-foreground max-w-xl text-base flex gap-1">
                    <ChevronsRight className="text-teal-500" />
                    Driver behavior analytics (e.g., speed, idling)
                  </li>
                  <li className="text-muted-foreground max-w-xl text-base flex gap-1">
                    <ChevronsRight className="text-teal-500" />
                    Customizable reports for KPIs
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Pay supplier invoices
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our goal is to streamline SMB trade, making it easier and
                  faster than ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
