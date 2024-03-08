import { Content } from "@/components/home/content";
import { Navhome } from "@/components/home/navbar";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <header>
        <Navhome />
      </header>
      <main>
      <Content/>
      </main>
    </div>
  );
}
