"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import HowItWorksCard from "./how-it-works-card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const features = [
    {
      title: "Instant delivery orders",
      description:
        "Get delivery requests instantly to your app. Manage orders from customers, assign to drivers and track all deliveries in real-time.",
      image: "/images/truck-hero.jpg",
    },
    {
      title: "Optimize routes with one click",
      description:
        "Instantly plan and optimize delivery routes with AI. Reduce travel time and fuel costs while increasing delivery efficiency.",
      image: "/images/truck-hero.jpg",
    },
    {
      title: "Easy route adjustments",
      description:
        "Modify routes on the go with simple drag and drop. Add new stops, change delivery order, and optimize in real-time.",
      image: "/images/truck-hero.jpg",
    },
    {
      title: "Dispatch to the driver app",
      description:
        "Send routes directly to driver mobile apps. Drivers get turn-by-turn navigation and delivery instructions instantly.",
      image: "/images/truck-hero.jpg",
    },
    {
      title: "Track your drivers",
      description:
        "Live tracking of all drivers and deliveries. Get real-time updates on delivery status and estimated arrival times.",
      image: "/images/truck-hero.jpg",
    },
    {
      title: "Keep customers in the loop",
      description:
        "Automated customer notifications with delivery updates. Send SMS and email notifications with tracking links.",
      image: "/images/truck-hero.jpg",
    },
    {
      title: "Capture proof of delivery",
      description:
        "Digital signatures, photos, and delivery confirmations. Secure proof of delivery for every package delivered.",
      image: "/images/truck-hero.jpg",
    },
    {
      title: "Measure your performance",
      description:
        "Comprehensive analytics and reporting dashboard. Track delivery times, driver performance, and customer satisfaction.",
      image: "/images/truck-hero.jpg",
    },
    {
      title: "Watch your efficiency improve",
      description:
        "AI-powered insights to optimize your delivery operations. Continuous improvement recommendations based on your data.",
      image: "/images/truck-hero.jpg",
    },
  ];

  return (
    <div className="w-full py-20 dotted-background transition-colors duration-500">
      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 flex-col items-start container mx-auto pb-8 px-4">
          <Badge
            variant="outline"
            className="border-teal-500 min-w-2xs text-teal-500 uppercase font-light tracking-widest"
          >
            How it works
          </Badge>

          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-6xl font-regular text-left">
              Quickly set up your delivery operations
            </h2>
            <p className="text-lg max-w-xl lg:max-w-4xl leading-relaxed tracking-tight text-muted-foreground  text-left">
              Streamline your delivery operations with our comprehensive
              platform
            </p>
          </div>
        </div>

        <div className="relative" ref={containerRef}>
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-emerald-600 to-emerald-500 rounded-full z-10 shadow-sm shadow-teal-500/50"
          />

          <div className="space-y-24">
            {features.map((feature, index) => (
              <HowItWorksCard
                key={index}
                feature={feature}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
