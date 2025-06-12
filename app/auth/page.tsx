"use client";

import * as React from "react";
import Image from "next/image";
import AuthFormContainer from "@/components/auth/auth-form-container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Auth() {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen md:grid md:grid-cols-2">
      <style>{`
        input[type="password"]::-ms-reveal,
        input[type="password"]::-ms-clear {
          display: none;
        }
      `}</style>
      <div className="flex flex-col h-screen items-center justify-center p-6 md:h-auto md:p-0 md:py-12">
        <Image
          src="/logo.svg"
          alt="Nodal"
          width={50}
          height={50}
          className="mb-6"
        />

        <div className="absolute bottom-2 mr-2 right-0 md:right-1/2 bg-neutral-200 backdrop-blur-md rounded-sm">
          <LanguageSwitcher />
        </div>
        <AuthFormContainer />
      </div>

      <div
        className="hidden md:block relative bg-cover bg-center "
        style={{
          backgroundImage: "url('/images/delivery.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center p-10">
          <blockquote className="space-y-2 text-center text-white">
            <p className="text-lg font-medium">“{t("auth.quote.text")}”</p>
            <cite className="block text-sm font-light text-neutral-300 not-italic">
              — {t("auth.quote.author")}
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
