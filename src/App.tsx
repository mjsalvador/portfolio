import "@/styles/index.css";
import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

function App() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
