import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <main>
      <form
        action=""
        className="flex flex-col items-center justify-center h-screen "
      >
        <div className="max-w-5xl lg:w-1/5 flex flex-col text-center gap-5">
          <h1 className="text-4xl font-semibold mb-4">Sign Up</h1>
          <div className="flex flex-col gap-2">
            <Button variant={"outline"} ><Image src="./google.svg" alt="icon" width={20} height={10} className="mr-4"/> Continue with Google</Button>
            <Button variant={"outline"} ><Image src="./github.svg" alt="icon" width={20} height={10} className="mr-4"/> Continue with GitHub</Button>
          </div>
          <div className="or">OR</div>
          <Input
            type="email"
            placeholder="Enter your email address ..."
            className=" placeholder:font-medium border-2   focus:border-primary-foreground focus-visible:ring-0 focus-visible:ring-offset-0 "
          />
          <Button className="bg-secondary text-white font-medium ease-in-out transition-colors  duration-150 delay-75 hover:bg-primary-foreground">
            Continue
          </Button>
          <p className="text-sm mr-1">
            Already have an account?{" "}
            <Link href="/" className="text-primary underline font-semibold ">
              Login
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
