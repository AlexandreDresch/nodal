import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div
        className="flex-1 flex flex-col relative"
        style={{
          backgroundImage: "url('/images/truck-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
            Smarter Delivery Routes
            <br />
            Powered by AI
            <br />
            Cut Costs by up to 40%
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
            Automated multi-stop route planning
            <br />
            with real-time updates and fleet management
          </p>
          <Button
            asChild
            size="lg"
            className="bg-emerald-400 hover:bg-emerald-500 text-white px-8"
          >
            <Link href="/try">Try Free (7-Day Trial)</Link>
          </Button>
          <p className="text-white/80 my-4 md:mt-2 text-sm">
            Enterprise-grade solutions available
          </p>
        </div>
      </div>

      <div className="bg-gray-50 z-10 py-8">
        <div className="container mx-auto md:-mt-14 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm rounded-xs">
              <CardContent className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4 text-emerald-500">
                  <Image
                    src={"/handshake.svg"}
                    alt="Handshake icon"
                    width={65}
                    height={65}
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Intelligent Routing</h3>
                <p className="text-sm text-muted-foreground">
                  Algorithms that calculate the most efficient route considering
                  traffic, delivery windows, and vehicle capacity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm rounded-xs">
              <CardContent className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4 text-emerald-500">
                  <Image
                    src={"/truck.svg"}
                    alt="Truck icon"
                    width={65}
                    height={65}
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Dynamic Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Track real-time vehicle locations and receive deviation alerts
                  with automatic route recalculations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-emerald-400 text-white rounded-xs">
              <CardContent className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4">
                  <Image
                    src={"/list.svg"}
                    alt="List icon"
                    width={65}
                    height={65}
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Custom Constraints</h3>
                <p className="text-sm text-white/80">
                  The feature that makes your routes{" "}
                  <strong>realistic and executable</strong>, with tailored
                  rules.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
