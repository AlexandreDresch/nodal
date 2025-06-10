"use client";

import { Bot, Map, RecycleIcon, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/language-context";
import { FeatureCard } from "./feature-card";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section
      className="w-full py-20 dotted-background"
      id="features"
    >
      <div className="flex gap-4 flex-col items-start container mx-auto pb-8 px-4">
        <Badge
          variant="outline"
          className="border-teal-500 min-w-2xs text-teal-500 uppercase font-light tracking-widest"
        >
          {t("detailedFeatures.sectionTitle")}
        </Badge>

        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-6xl font-regular text-left">
            {t("detailedFeatures.heading")}
          </h2>
          <p className="text-lg max-w-xl lg:max-w-4xl leading-relaxed tracking-tight text-muted-foreground  text-left">
            {t("detailedFeatures.description")}
          </p>
        </div>
      </div>

      <div className="container mx-auto md:bg-[url(/images/map.svg)] bg-contain bg-center bg-no-repeat">
        <div className="flex flex-col gap-10 px-4 lg:px-0">
          <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            <FeatureCard
              icon={<Bot className="w-8 h-8 text-teal-500" />}
              title={t("detailedFeatures.aiRouting.title")}
              description={t("detailedFeatures.aiRouting.description")}
              items={
                t("detailedFeatures.aiRouting.items") as unknown as string[]
              }
              bgImage="/images/truck.png"
              colSpan="double"
              bgPosition="bg-top-right"
              bgSize="bg-[length:80%] lg:bg-[length:40%]"
            />

            <FeatureCard
              icon={<Map className="w-8 h-8 text-teal-500" />}
              title={t("detailedFeatures.multiStop.title")}
              description={t("detailedFeatures.multiStop.description")}
              items={
                t("detailedFeatures.multiStop.items") as unknown as string[]
              }
              bgImage="/images/map-pins.png"
              bgPosition="bg-top-right"
              bgSize="bg-[length:80%] lg:bg-[length:60%]"
              className="aspect-square"
              colSpan="default"
            />

            <FeatureCard
              icon={<Truck className="w-8 h-8 text-teal-500" />}
              title={t("detailedFeatures.tracking.title")}
              description={t("detailedFeatures.tracking.description")}
              items={
                t("detailedFeatures.tracking.items") as unknown as string[]
              }
              bgImage="/images/satellite.png"
              bgPosition="bg-top-right"
              bgSize="bg-[length:40%] lg:bg-[length:38%]"
              className="aspect-square"
              colSpan="default"
            />

            <FeatureCard
              icon={<RecycleIcon className="w-8 h-8 text-teal-500" />}
              title={t("detailedFeatures.ecoFriendly.title")}
              description={t("detailedFeatures.ecoFriendly.description")}
              items={
                t("detailedFeatures.ecoFriendly.items") as unknown as string[]
              }
              bgImage="/images/laptop.png"
              bgPosition="bg-top-right"
              bgSize="bg-[length:50%] lg:bg-[length:30%]"
              className="aspect-square lg:aspect-auto"
              colSpan="double"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
