import BeforeAfterAeontrix from "@/components/Home/BeforeAfterAeontrix";
import ClientLogoLoop from "@/components/Home/ClientLogoLoop";
import ClientStories from "@/components/Home/ClientStories";
import Hero from "@/components/Home/Hero";
import HowAIEmployeesWork from "@/components/Home/HowAIEmployeesWork";
import ServicesSection from "@/components/Home/ServicesSection";
import WorkProtocol from "@/components/Home/WorkProtocol";
import Ribbons from "@/components/ui/Ribbons";
import { getRequestRegion } from "@/lib/region";
import Image from "next/image";

export default async function Home() {
  console.log("HomePage: before getRequestRegion"); // should log
  const region = await getRequestRegion();
  console.log("HomePage: region =", region);

  return (
    <main className="min-h-screen">
      <Hero />
      <ClientLogoLoop />
      <ServicesSection initialRegion={region} />
      <HowAIEmployeesWork />
      <BeforeAfterAeontrix />
      <ClientStories />
      <WorkProtocol />
    </main>
  );
}
