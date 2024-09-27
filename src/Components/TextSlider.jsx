import Marquee from "react-fast-marquee";

const TextSlider = () => {
  return (
    <div className="mb-32 lg:-mx-24">
      {/* Marquee to manage slider */}
      <Marquee speed={100}>
        <div className="flex text-center text-5xl md:text-7xl font-Everett text-white bg-black py-8 md:py-12 lg:py-16">
          {/* Used text twise for smooth slider */}
          <h1 className="mr-24">UNLEASH VISUAL IMPACT</h1>
          <h1 className="mr-24">|</h1>
          <h1 className="mr-24">UNLEASH VISUAL IMPACT</h1>
          <h1 className="mr-24">|</h1>
        </div>
      </Marquee>
    </div>
  );
};

export default TextSlider;
