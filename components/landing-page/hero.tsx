"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Hero() {
  const { t } = useLanguage();
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
            {t("hero.title")
              .split(" ")
              .map((word, i, arr) => (
                <React.Fragment key={i}>
                  {word}
                  {i === 2 && arr.length > 5 && <br />}
                  {i !== arr.length - 1 && i !== 2 && " "}
                </React.Fragment>
              ))}
          </h1>
          <h2 className="text-4xl font-bold text-white mb-4 max-w-3xl">
            {t("hero.subtitle")}{" "}
            <span className="bg-emerald-400">{t("hero.costReduction")}</span>
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
            {t("hero.description")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-emerald-400 hover:bg-emerald-500 text-white px-8"
          >
            <Link href="/register">{t("hero.tryButton")}</Link>
          </Button>
          <p className="text-white/80 my-4 md:mt-2 text-sm">
            {t("hero.enterprise")}
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
                <h3 className="text-lg font-bold mb-2">
                  {t("features.routing.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("features.routing.description")}
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
                <h3 className="text-lg font-bold mb-2">
                  {t("features.monitoring.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("features.monitoring.description")}
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
                <h3 className="text-lg font-bold mb-2">
                  {t("features.constraints.title")}
                </h3>
                <p className="text-sm text-white/80">
                  {t("features.constraints.description")}{" "}
                  <strong>{t("features.constraints.highlight")}</strong>,{" "}
                  {t("features.constraints.ending")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
