import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-[#FFEFE8] min-h-screen">
      <NavBar/>
      <HeroSection/>
    </main>
  );
}
