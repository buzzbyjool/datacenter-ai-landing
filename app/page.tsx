import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solutions />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
