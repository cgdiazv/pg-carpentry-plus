import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Craftsmanship from "@/components/Craftsmanship";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExclusiveWork from "@/components/ExclusiveWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#181818] flex flex-col">
      <Hero />
      <Services />
      <Craftsmanship />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <ExclusiveWork />
      <Footer />
    </main>
  );
}

