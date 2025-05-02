"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "lucide-react";
import Logo from "./logo";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageSwitcher } from "./language-switcher";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed w-full z-40 flex justify-center items-center p-4 md:p-0 md:px-10 navbar-container",
        scrolled && "has-glass-effect"
      )}
    >
      <nav className="flex z-50 justify-between items-center w-full mx-auto container">
        <Logo />

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Button
            variant="link"
            asChild
            className="text-white hover:text-emerald-400 p-0 transition-colors duration-200"
          >
            <Link href="/login">{t("header.login")}</Link>
          </Button>
          <Button
            asChild
            className="bg-emerald-400 hover:bg-emerald-500 text-white max-w-36 transition-colors duration-300"
          >
            <Link href="/register" className="flex items-center gap-2">
              <span>{t("header.register")}</span> <ChevronRightIcon />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
