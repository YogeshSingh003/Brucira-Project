import { useState } from "react";
import Innovative from "../Asset/images/Innovative.jpg";
import Reliable from "../Asset/images/Reliable.jpeg";
import Quality from "../Asset/images/Quality.jpg";

const Accordion = () => {
  // Define accordion data
  const data = [
    {
      name: "Innovative",
      image: Innovative,
      description:
        "Innovation fuels progress, inspiring creativity and reshaping industries. It transforms challenges into opportunities and growth.",
    },
    {
      name: "Reliable",
      image: Reliable,
      description:
        "Creation, ensuring your messages resonate worldwide. From concept to distribution, our platform serves as your strategic partner.",
    },
    {
      name: "Quality",
      image: Quality,
      description:
        "Quality reflects excellence and reliability, ensuring products and services meet expectations and build trust with customers.",
    },
  ];

  // State to track the currently open accordion obj and the image
  const [activeIndex, setActiveIndex] = useState(1); //
  const [activeImage, setActiveImage] = useState(data[1].image); //

  // Function to handle accordion click
  const handleAccordionClick = (index) => {
    setActiveIndex(index);
    setActiveImage(data[index].image);
  };

  return (
    <div>
      <div className="text-2xl md:text-5xl lg:text-6xl font-Everett mb-20">
        <h1 className="">Our expertise and passion</h1>
        <h1 className="">breathe life into your narratives</h1>
      </div>
      <div className="flex  flex-col lg:flex-row gap-20 w-full  lg:h-[34rem]">
        {/* Image section */}
        <div className="lg:w-7/12 h-[24rem]  lg:h-full  lg:overflow-hidden">
          <img
            className="h-[120%] w-[120%] object-cover transform -scale-x-100 transition-all duration-2500 ease-in-out"
            src={activeImage}
            alt={data[activeIndex].name}
          />
        </div>

        {/* Accordion section */}
        <div>
          <hr />
          {/* Map function*/}
          {data.map((obj, index) => (
            <div key={index}>
              {index === activeIndex && (
                <h1 className="text-xl  font-Everett pt-4 lg:pt-10  text-[#EF001C]">
                  0{index + 1}
                </h1>
              )}
              <h1
                onClick={() => handleAccordionClick(index)}
                className={` hover:opacity-100 text-xl md:text-3xl font-Everett opacity-40 cursor-pointer inline-block py-4 lg:py-8 transition-all duration-300 ease-in-out  ${
                  index === activeIndex
                    ? "py-2 md:my-2 opacity-100 text-[2rem] "
                    : ""
                }`}
              >
                {obj.name}
              </h1>
              {/* Only show description for the active accordion */}
              {index === activeIndex && (
                <p className="text-base sm:text-[22px] pb-4 lg:pb-8 font-OpenSans opacity-75 w-2/3 transition-all duration-500 ease-in-out ">
                  {obj.description}
                </p>
              )}
              <hr className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
