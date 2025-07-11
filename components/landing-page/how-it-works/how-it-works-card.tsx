"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HowItWorksCardProps {
  feature: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
  isLeft: boolean;
}

export default function HowItWorksCard({
  feature,
  index,
  isLeft,
}: HowItWorksCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="absolute z-20 w-6 h-6 bg-emerald-500 rounded-full border-4 border-background shadow-lg shadow-teal-500/25"
      />

      <div
        className={`w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isLeft ? "lg:text-right" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isLeft ? -100 : 100 }
          }
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          className={`space-y-4 ${isLeft ? "lg:order-1" : "lg:order-2"}`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="text-2xl lg:text-3xl font-extralight bg-black bg-clip-text text-transparent"
          >
            {feature.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {feature.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: isLeft ? 15 : -15 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, rotateY: 0 }
              : { opacity: 0, scale: 0.8, rotateY: isLeft ? 15 : -15 }
          }
          transition={{ duration: 0.7, delay: index * 0.1 + 0.5 }}
          className={`relative ${isLeft ? "lg:order-2" : "lg:order-1"}`}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-2 border-teal-200/20 dark:border-teal-800/20 p-6 rounded-2xl shadow-2xl shadow-teal-500/10 hover:shadow-teal-500/20 hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src={feature.image || "/images/truck-hero.jpg"}
                alt={`${feature.title} interface`}
                width={400}
                height={300}
                className="rounded-sm shadow-lg transition-transform duration-300 group-hover:scale-110 w-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
              className="mt-4 bg-teal-50/50 dark:bg-teal-950/50 rounded-lg p-4 border border-teal-200/30 dark:border-teal-800/30"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/25">
                  <span className="text-white font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {feature.title.split(" ").slice(0, 3).join(" ")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Feature highlight
                  </p>
                </div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
