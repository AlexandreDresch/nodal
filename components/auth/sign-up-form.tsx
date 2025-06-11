"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PasswordInput from "./password-input";

export default function SignUpForm() {
  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("UI: Sign Up form submitted");
  };
  return (
    <form
      onSubmit={handleSignUp}
      autoComplete="on"
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details below to sign up
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-1">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            autoComplete="name"
          />
        </div>
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
          autoComplete="new-password"
          placeholder="••••••••"
        />
        <Button type="submit" variant="outline" className="mt-2">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
