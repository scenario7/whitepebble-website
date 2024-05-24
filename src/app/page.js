import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import CustomFooter from "@/components/CustomFooter";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-[#FEEFe8] min-h-screen">
      <NavBar/>
      <HeroSection/>
      <Statistics/>
      <Services/>
      <CustomFooter/>
    </main>
  );
}
