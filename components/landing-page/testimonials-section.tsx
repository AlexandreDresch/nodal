"use client";

import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { useLanguage } from "@/lib/i18n/language-context";

export function TestimonialsSection() {
  const { t } = useLanguage();

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 80,
          ease: "linear",
        },
      },
    },
    hoverPause: {
      x: "pause",
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <section
      className={cn(
        "bg-background text-foreground dotted-background",
        "py-12 sm:py-24 md:py-32 px-0"
      )}
    >
      <div className="mx-auto flex flex-col items-center gap-4 text-center sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 px-4 sm:gap-8 w-full container"
        >
          <Badge
            variant="outline"
            className="border-teal-500 min-w-2xs text-teal-500 uppercase font-light tracking-widest "
          >
            {t("testimonialsSection.title")}
          </Badge>
        </motion.div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <motion.div
            className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row"
            whileHover="hoverPause"
          >
            <motion.div
              className="flex shrink-0 justify-around [gap:var(--gap)] flex-row"
              variants={marqueeVariants}
              animate="animate"
            >
                {(() => {
                  const testimonials = t("testimonialsSection.testimonials");
                  if (!Array.isArray(testimonials)) return null;
                  return [...Array(4)].map((_, setIndex) =>
                    testimonials.map((testimonial, i) => (
                      <motion.div
                        key={`${setIndex}-${i}`}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        whileHover="hover"
                        viewport={{ once: true }}
                      >
                        <TestimonialCard {...testimonial} />
                      </motion.div>
                    ))
                  );
                })()}
            </motion.div>
          </motion.div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}
