"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PasswordInput from "./password-input";

export default function SignInForm() {
  const { t } = useLanguage();

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("UI: Sign In form submitted");
  };
  return (
    <form
      onSubmit={handleSignIn}
      autoComplete="on"
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t("auth.signIn.title")}</h1>
        <p className="text-balance text-sm text-muted-foreground">
          {t("auth.signIn.description")}
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">{t("auth.signIn.emailLabel")}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t("auth.signIn.emailPlaceholder")}
            required
            autoComplete="email"
          />
        </div>
        <PasswordInput
          name="password"
          label={t("auth.signIn.passwordLabel")}
          required
          autoComplete="current-password"
          placeholder="••••••••"
        />
        <Button type="submit" variant="outline" className="mt-2">
          {t("auth.signIn.signInButton")}
        </Button>
      </div>
    </form>
  );
}
