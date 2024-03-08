import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
export function Navhome() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center">
      <Image src="" alt="logo-do-it-yourself" width={200} height={80} />
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 text-lg" style={{ borderRadius: '48% 16% 37% 66% / 57% 24% 49% 39%' }}> 
          <Link href="#" className="font-medium">See the vantage</Link>
          <Button className="text-primary bg-se text-lg">
           Get Started
          </Button>
          div
      </div>
    </header>
  );
}
