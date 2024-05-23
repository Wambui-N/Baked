import { Hero, Menu, Process, Testimonials } from "@/Components";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Process />
      <Menu />
      <Testimonials />
    </div>
  );
}
