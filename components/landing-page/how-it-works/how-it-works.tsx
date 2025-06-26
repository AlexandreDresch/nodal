"use client";

import { motion } from "framer-motion";
import HowItWorksCard from "./how-it-works-card";
import { Badge } from "@/components/ui/badge";

export default function HowItWorks() {
  const features = [
    {
      title: "Instant delivery orders",
      description:
        "Get delivery requests instantly to your app. Manage orders from customers, assign to drivers and track all deliveries in real-time.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Optimize routes with one click",
      description:
        "Instantly plan and optimize delivery routes with AI. Reduce travel time and fuel costs while increasing delivery efficiency.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Easy route adjustments",
      description:
        "Modify routes on the go with simple drag and drop. Add new stops, change delivery order, and optimize in real-time.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Dispatch to the driver app",
      description:
        "Send routes directly to driver mobile apps. Drivers get turn-by-turn navigation and delivery instructions instantly.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Track your drivers",
      description:
        "Live tracking of all drivers and deliveries. Get real-time updates on delivery status and estimated arrival times.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Keep customers in the loop",
      description:
        "Automated customer notifications with delivery updates. Send SMS and email notifications with tracking links.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Capture proof of delivery",
      description:
        "Digital signatures, photos, and delivery confirmations. Secure proof of delivery for every package delivered.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Measure your performance",
      description:
        "Comprehensive analytics and reporting dashboard. Track delivery times, driver performance, and customer satisfaction.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Watch your efficiency improve",
      description:
        "AI-powered insights to optimize your delivery operations. Continuous improvement recommendations based on your data.",
      image: "/placeholder.svg?height=300&width=400",
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


        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-teal-500 to-teal-800 opacity-30"
          />

          <div className="space-y-24">
            {features.map((feature, index) => (
              <HowItWorksCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
