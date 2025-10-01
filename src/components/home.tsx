import Header from "./Header";
import Hero from "./Hero";
import Solutions from "./Solutions";
import Characteristics from "./Characteristics";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-dark-bg dark:bg-[#000f3d] border-dark-bg">
      <Header />
      <Hero className="border-[0px] border-dark-background" />
      <div id="solutions">
        <Solutions />
      </div>
      <div id="characteristics">
        <Characteristics />
      </div>
      <div id="pricing" className="bg-dark-bg dark:text-[#ffffff]">
        <Pricing className="" />
      </div>
      <Testimonials />
      <div id="faq">
        <FAQ />
      </div>
      <CTA className="bg-[blue] opacity-[1] text-[white]" />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
