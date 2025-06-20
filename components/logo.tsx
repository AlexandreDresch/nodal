"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { WordPullUp } from "./word-pull-up";

interface LogoProps {
  animateOnHover?: boolean;
}

export default function Logo({ animateOnHover = true }: LogoProps) {
  return (
    <Link href="/" className="flex items-baseline">
      <motion.span whileHover="hover" className="flex items-baseline">
        <Image src="/logo.svg" alt="Nodal - Home" width={25} height={25} />
        <WordPullUp
          className="text-3xl font-extrabold tracking-[-0.02em] text-emerald-400 md:leading-[5rem]"
          words="odal"
          animateOnHover={animateOnHover}
        />
      </motion.span>
    </Link>
  );
}
