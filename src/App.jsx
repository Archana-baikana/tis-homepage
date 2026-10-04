
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Academics from "./components/sections/Academics";
import Campus from "./components/sections/Campus";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import Admissions from "./components/sections/Admissions";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animation/ScrollProgress";

function App() {
  return (
    <>

    <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Academics />
        <Campus />
        <Stats />
        <Testimonials />
        <Admissions />
      </main>
      <Footer/>
    </>
  );
}

export default App;