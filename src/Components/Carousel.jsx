import { useState } from "react";
import Lissa from "../Asset/images/LissaSmith.jpeg"; // Import profile image
import Marin from "../Asset/images/Marin.png"; // Import profile image
import Ayeesha from "../Asset/images/Ayeesha.png"; // Import profile image
import Arrow from "../Asset/icons/right-arrow.svg"; // Import right arrow icon

const Carousel = () => {
  // Define carousel data
  const carouselData = [
    {
      id: 1,
      name: "LISSA SMITH",
      company: "VYMO",
      designation: "DIRECTOR OF MARKETING AND COMMUNICATIONS",
      testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled`,
      image: Lissa,
    },
    {
      id: 2,
      name: "EMILY SMITH",
      company: "ABC CORP",
      designation: "HEAD OF MARKETING AND OPERATIONS",
      testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled`,
      image: Marin,
    },
    {
      id: 3,
      name: "VANSHIKA GAUR",
      company: "XYZ LTD",
      designation: "CHIEF EXECUTIVE OFFICER",
      testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled`,
      image: Ayeesha,
    },
  ];

  // State to manage current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle left and right arrow click
  const goToPrevious = () => {
    if (currentIndex === 0) setCurrentIndex(carouselData.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex === carouselData.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      {/* Heading */}
      <div className="flex py-10 items-center w-[32rem]">
        <hr className=" border-[1px] border-solid border-[#EF001C] w-20" />
        <span className="mx-4 text-xl md:text-2xl text-[#EF001C] font-semibold">
          TESTIMONY FROM OUR PARTNERS
        </span>
      </div>

      <div className="w-full md:h-[36rem] flex flex-col md:flex-row gap-10 transition-transform duration-500 ease-in-out">
        {/* Image section */}

        <div className="md:w-5/12 h-full ">
          <img
            className="h-full w-full object-cover transition-all duration-500 ease-in-out"
            src={carouselData[currentIndex].image}
          />
        </div>
        <div className="h-full md:w-[55%]  ">
          <div className="flex flex-col justify-between gap-20 md:gap-0 h-full w-full">
            {/* Testimony */}

            <p className="text-lg sm:text-xl lg:text-3xl font-OpenSans  font-semibold md:leading-relaxed lg:leading-relaxed transition-all duration-500 ease-in-out">
              {carouselData[currentIndex].testimony}
            </p>
            {/* name & designation */}

            <div className="flex md:flex-col lg:flex-row  justify-between">
              <div>
                <h1 className="font-OpenSans text-lg md:text-2xl lg:text-4xl font-bold transition-all duration-500 ease-in-out">
                  {carouselData[currentIndex].name},{" "}
                  <span className="text-sm md:text-lg lg:text-2xl transition-all duration-500 ease-in-out">
                    {carouselData[currentIndex].company}
                  </span>
                </h1>
                <h2 className="font-OpenSans text-[0.7rem] md:text-[1rem] lg:text-[1.37rem] font-[650] opacity-65 py-2 transition-all duration-500 ease-in-out">
                  {carouselData[currentIndex].designation}
                </h2>
              </div>

              {/* Left and right buttons */}

              <div className="h-min justify-end flex gap-2 ">
                <button
                  className=" rounded-full py-2 px-7 border-solid border-black border-2 left-16 lg:relative"
                  onClick={goToPrevious}
                >
                  <img className="h-5 w-6 rotate-180" src={Arrow} />
                </button>
                <button
                  className="bg-[#EF001C] py-5 px-7 rounded-full left-16 lg:relative"
                  onClick={goToNext}
                >
                  <img className="h-5 w-6 filter invert " src={Arrow} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
