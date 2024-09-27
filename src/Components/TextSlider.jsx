import Marquee from "react-fast-marquee";

const TextSlider = () => {
  return (
    <div className="mb-32 -mx-24">
      <Marquee speed={100}>
        <div className="flex text-center text-7xl font-Everett text-white bg-black py-16">
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
