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
}

export default function HowItWorksCard({ feature, index }: HowItWorksCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative flex items-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="absolute left-6 w-4 h-4 bg-gradient-to-r from-teal-500 to-teal-800 rounded-full border-4 border-background z-10 shadow-lg"
      />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="ml-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full"
      >
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-300 to-teal-900 bg-clip-text text-transparent"
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
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, rotateY: 0 }
              : { opacity: 0, scale: 0.8, rotateY: -15 }
          }
          transition={{ duration: 0.7, delay: index * 0.1 + 0.5 }}
          className="relative"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-2 border-border/50 p-6 rounded-sm shadow-sm transition-all duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={`${feature.title} interface`}
                width={400}
                height={300}
                className="rounded-sm shadow-sm transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-sm" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
              className="mt-4 bg-muted/50 rounded-sm p-4 border border-border/50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-300 to-teal-500 rounded-full flex items-center justify-center shadow-sm">
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
      </motion.div>
    </div>
  );
}
