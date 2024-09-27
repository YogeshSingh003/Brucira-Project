import { useState } from "react";
import Lissa from "../Asset/images/LissaSmith.jpeg"; // Import profile image
import Marin from "../Asset/images/Marin.png"; // Import profile image
import Arrow from "../Asset/images/right-arrow.svg"; // Import right arrow icon

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
      name: "JOHN DOE",
      company: "ABC CORP",
      designation: "CEO",
      testimony:
        "John's expertise helped shape our company's marketing strategy.",
      image: Marin,
    },
    // Add more slides here if needed
  ];

  // State to manage current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle left arrow click
  const goToPrevious = () => {
    if (currentIndex === 0) setCurrentIndex(carouselData.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  // Function to handle right arrow click
  const goToNext = () => {
    if (currentIndex === carouselData.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };

  return (
    // <div className="w-full flex justify-center items-center">
    //   <div className="w-3/4 flex">
    //     {/* Testimony section */}
    //     <div className="w-1/2">
    //       <h3 className="text-[#EF001C] font-semibold text-lg uppercase">
    //         Testimony from our partners
    //       </h3>
    //       <p className="text-lg leading-relaxed my-6">
    //         {carouselData[currentIndex].testimony}
    //       </p>
    //       <h4 className="font-semibold text-xl mt-4">
    //         {carouselData[currentIndex].name},{" "}
    //         <span className="text-[#EF001C]">
    //           {carouselData[currentIndex].company}
    //         </span>
    //       </h4>
    //       <p className="text-sm text-gray-500">
    //         {carouselData[currentIndex].designation}
    //       </p>
    //     </div>

    //     {/* Image section */}
    //     <div className="w-1/2 flex justify-center">
    //       <img
    //         className="rounded-lg w-[250px] h-[250px] object-cover"
    //         src={carouselData[currentIndex].image}
    //         alt={carouselData[currentIndex].name}
    //       />
    //     </div>
    //   </div>

    //   {/* Navigation buttons */}
    //   <div className="flex items-center gap-4 mt-4">
    //     <button
    //       onClick={goToPrevious}
    //       className="w-10 h-10 bg-white border border-black rounded-full flex items-center justify-center"
    //     >
    //       <img src={LeftArrow} alt="Previous Slide" />
    //     </button>
    //     <button
    //       onClick={goToNext}
    //       className="w-10 h-10 bg-[#EF001C] text-white rounded-full flex items-center justify-center"
    //     >
    //       <img src={Arrow} alt="Next Slide" />
    //     </button>
    //   </div>
    // </div>
    <div>
      <div className="flex py-10 items-center w-[32rem]">
        <hr className=" border-[1px] border-solid border-[#EF001C] w-20" />
        <span className="mx-4 text-2xl text-[#EF001C] font-semibold">
          TESTIMONY FROM OUR PARTNERS
        </span>
      </div>

      <div className="w-full h-[36rem] flex gap-10 transition-transform duration-500 ease-in-out">
        <div className="w-5/12 h-full ">
          <img
            className="h-full w-full object-cover transition-all duration-500 ease-in-out"
            src={carouselData[currentIndex].image}
          />
        </div>
        <div className="h-full w-[55%]  ">
          <div className="flex flex-col justify-between  h-full w-full">
            <p className="text-3xl font-OpenSans font-semibold leading-relaxed transition-all duration-500 ease-in-out">
              {carouselData[currentIndex].testimony}
            </p>
            <div className="flex  justify-between">
              <div>
                <h1 className="font-OpenSans text-4xl font-bold transition-all duration-500 ease-in-out">
                  {carouselData[currentIndex].name},{" "}
                  <span className="text-2xl transition-all duration-500 ease-in-out">
                    {carouselData[currentIndex].company}
                  </span>
                </h1>
                <h2 className="font-OpenSans text-[1.37rem] font-[650] opacity-65 py-2 transition-all duration-500 ease-in-out">
                  {carouselData[currentIndex].designation}
                </h2>
              </div>
              <div className="h-min flex gap-2 ">
                <button
                  className=" rounded-full py-2 px-7 border-solid border-black border-2 left-16 relative"
                  onClick={goToPrevious}
                >
                  <img className="h-5 w-6 rotate-180" src={Arrow} />
                </button>
                <button
                  className="bg-[#EF001C] py-5 px-7 rounded-full left-16 relative"
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
