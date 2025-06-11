"use client";

import { useState } from "react";
import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";
import { Button } from "../ui/button";
import Image from "next/image";

export default function AuthFormContainer() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="mx-auto grid w-[350px] gap-2">
      {isSignIn ? <SignInForm /> : <SignUpForm />}
      <div className="text-center text-sm">
        {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
        <Button
          variant="link"
          className="pl-1 text-foreground"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn ? "Sign up" : "Sign in"}
        </Button>
      </div>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
      <Button
        variant="outline"
        type="button"
        onClick={() => console.log("UI: Google button clicked")}
      >
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google icon"
          className="mr-2 h-4 w-4"
          width={4}
          height={4}
        />
        Continue with Google
      </Button>
    </div>
  );
}
