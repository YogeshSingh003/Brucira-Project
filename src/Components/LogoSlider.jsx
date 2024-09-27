import Marquee from "react-fast-marquee";

import DarwinBox from "../Asset/images/DarwinBox.png";
import Wipro from "../Asset/images/Wipro.png";
import Sequoia from "../Asset/images/Sequoia.png";
import Indeed from "../Asset/images/Indeed.png";
import My11Circle from "../Asset/images/My11Circle.png";
import IKEA from "../Asset/images/IKEA.png";
import IndiaGold from "../Asset/images/IndiaGold.png";
import HealthifyMe from "../Asset/images/HealthifyMe.png";
import Swiggy from "../Asset/images/Swiggy.png";
import Koo from "../Asset/images/Koo.png";
import Vymo from "../Asset/images/Vymo.png";
import Taneira from "../Asset/images/Taneira.png";

const LogoSlider = () => {
  const logos = [
    DarwinBox,
    Wipro,
    Sequoia,
    Indeed,
    My11Circle,
    IKEA,
    IndiaGold,
    HealthifyMe,
    Swiggy,
    Koo,
    Vymo,
    Taneira,
  ];

  return (
    <div className="my-32 -mx-24">
      <Marquee>
        <div className="flex  ">
          {logos.map((lg, i) => (
            <img
              key={i}
              className="w-28 mr-20 aspect-video object-contain"
              src={lg}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LogoSlider;
