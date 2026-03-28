import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Achievement } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

// import { Testimonials } from "@/sections/Testimonials";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
