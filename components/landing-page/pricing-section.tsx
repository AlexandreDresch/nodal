"use client";

import {
  PricingCard,
  type PricingTier,
} from "@/components/pricing/pricing-card";
import { Tab } from "@/components/pricing/pricing-tab";
import { useLanguage } from "@/lib/i18n/language-context";
import { useState } from "react";

export function PricingSection() {
  const { t } = useLanguage();

  const [selectedFrequency, setSelectedFrequency] = useState(
    (t("pricingSection.tierRange") as unknown as string[])[0]
  );

  return (
    <section className="flex flex-col items-center gap-10 py-10 px-5" id="pricing">
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-medium md:text-5xl">
            {t("pricingSection.title")}
          </h1>
          <p className="text-muted-foreground">
            {t("pricingSection.subtitle")}
          </p>
        </div>
        <div className="mx-auto flex w-fit rounded-full bg-muted p-1">
          {(t("pricingSection.tierRange") as unknown as string[]).map(
            (freq) => (
              <Tab
                key={freq}
                text={freq}
                selected={selectedFrequency === freq}
                setSelected={setSelectedFrequency}
                discount={freq === "yearly" || freq === "Anual"}
              />
            )
          )}
        </div>
      </div>

      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {(t("pricingSection.tiers") as unknown as PricingTier[]).map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            paymentFrequency={selectedFrequency}
          />
        ))}
      </div>
    </section>
  );
}
