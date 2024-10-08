import Accordion from "./Components/Accordion";
import Body from "./Components/Body";
import Carousel from "./Components/Carousel";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import LogoSlider from "./Components/LogoSlider";
import Navbar from "./Components/Navbar";
import TextSlider from "./Components/TextSlider";
import WeAreGlobal from "./Components/WeAreGlobal";

function App() {
  return (
    <div className="mx-0 lg:mx-24 lg:overflow-visible overflow-hidden">
      <Navbar />
      <Body />
      <LogoSlider />
      <Accordion />
      <WeAreGlobal />
      <Carousel />
      <FAQ />
      <Contact />
      <TextSlider />
      <Footer />
    </div>
  );
}

export default App;
