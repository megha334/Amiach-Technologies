import { HeroSlider } from "@/components/hero-slider";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full h-screen max-h-dvh overflow-hidden bg-[#08090B]">
     < Navbar />
      <HeroSlider />
      < footer />
    </div>
  );
}
