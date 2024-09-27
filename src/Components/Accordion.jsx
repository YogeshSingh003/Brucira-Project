import { useState } from "react";
import Innovative from "../Asset/images/Innovative.jpg";
import Reliable from "../Asset/images/Reliable.jpeg";
import Quality from "../Asset/images/Quality.jpg";

const Accordion = () => {
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

  // State to track the currently open accordion item and the image
  const [activeIndex, setActiveIndex] = useState(1); // Set default to first accordion
  const [activeImage, setActiveImage] = useState(data[1].image); // Set default image

  // Function to handle accordion click
  const handleAccordionClick = (index) => {
    setActiveIndex(index);
    setActiveImage(data[index].image);
  };

  return (
    <div>
      <div className="text-6xl font-Everett mb-20">
        <h1 className="">Our expertise and passion</h1>
        <h1 className="">breathe life into your narratives</h1>
      </div>
      <div className="flex gap-20 w-full h-[34rem]">
        {/* Image section */}
        <div className="w-7/12  h-full  overflow-hidden">
          <img
            className="h-[120%] w-[120%] object-cover transform -scale-x-100 transition-all duration-2500 ease-in-out"
            src={activeImage}
            alt={data[activeIndex].name}
          />
        </div>

        {/* Accordion section */}
        <div>
          <hr />
          {data.map((item, index) => (
            <div key={index}>
              {index === activeIndex && (
                <h1 className="text-xl  font-Everett pt-10  text-[#EF001C]">
                  0{index + 1}
                </h1>
              )}
              <h1
                onClick={() => handleAccordionClick(index)}
                className={` hover:opacity-100  text-3xl font-Everett opacity-40 cursor-pointer inline-block py-8 transition-all duration-300 ease-in-out  ${
                  index === activeIndex
                    ? "py-2 my-2 opacity-100 text-[2rem] "
                    : ""
                }`}
              >
                {item.name}
              </h1>
              {/* Only show description for the active accordion */}
              {index === activeIndex && (
                <p className="text-[22px] pb-8 font-OpenSans opacity-75 w-2/3 transition-all duration-500 ease-in-out ">
                  {item.description}
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
