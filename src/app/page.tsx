import { Hero, Menu, Process } from "@/Components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Process />
      <Menu />
    </div>
  );
}
