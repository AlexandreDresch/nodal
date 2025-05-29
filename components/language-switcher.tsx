"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import Flag from "react-world-flags";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  hasScrolled = false,
}: {
  hasScrolled?: boolean;
}) {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("text-white hover:text-emerald-500 hover:bg-transparent cursor-pointer", hasScrolled && "text-emerald-500")}
        >
          <motion.div
            whileHover={{ rotate: 20 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Globe className="h-5 w-5" />
          </motion.div>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="rounded-sm">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-2 ${
            language === "en" ? "bg-muted" : ""
          }`}
        >
          <Flag code="usa" className="size-6" alt="American Flag" />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("pt")}
          className={`flex items-center gap-2 ${
            language === "pt" ? "bg-muted" : ""
          }`}
        >
          <Flag code="bra" className="size-6" alt="Brazilian Flag" />
          <span>Português</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
