"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PasswordInput from "./password-input";

export default function SignInForm() {
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
        <h1 className="text-2xl font-bold">Sign in to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to sign in
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            autoComplete="email"
          />
        </div>
        <PasswordInput
          name="password"
          label="Password"
          required
          autoComplete="current-password"
          placeholder="••••••••"
        />
        <Button type="submit" variant="outline" className="mt-2">
          Sign In
        </Button>
      </div>
    </form>
  );
}
