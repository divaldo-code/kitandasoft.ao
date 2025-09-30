import Header from "./Header";
import Hero from "./Hero";
import Solutions from "./Solutions";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Solutions />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;