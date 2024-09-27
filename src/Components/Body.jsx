import ARROW from "../Asset/icons/right-arrow.svg";
import VideoBgImg from "../Asset/images/Video_Background.png";
import Play from "../Asset/images/play.png";
import Ayeesha from "../Asset/images/Ayeesha.png";
import Marin from "../Asset/images/Marin.png";

const Body = () => {
  return (
    <div>
      <div>
        {/* Main heading section */}

        <div className="text-5xl md:text-7xl lg:text-[104px] py-10 flex flex-col  lg:gap-8  font-Everett ">
          <h1>WE ARE A</h1>
          <h1>
            GLOBAL <span className="text-[#EF001C]">PRODUCTION</span>
          </h1>
          <h1>AGENCY</h1>
        </div>

        {/* Bottom of main page */}

        <div className="flex flex-col gap-10 lg:flex-row md:justify-between items-center lg:items-end">
          <div className="mt-8">
            <div className="text-base md:text-[20px] lg:text-[26px] h-32 font-[650] font-OpenSans md:relative md:right-20 lg:right-0">
              <h1 className="lg:py-3 ">
                Designed with the specific needs of large B2B enterprises in
                mind,
              </h1>
              <h1>our platform offers a comprehensive solution to simplify.</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 ">
              <span className="bg-[#EF001C] inline-flex justify-center items-center font-semibold text-white text-lg py-5 -my-1 px-8 rounded-full">
                <button>GET PROFESSIONAL VIDEO SERVICES </button>
                <img
                  className="h-3 w-3 lg:w-6 lg:h-5 ml-2 fliter invert"
                  src={ARROW}
                />
              </span>
              <div className="flex justify-center gap-4">
                <div className="flex ">
                  <img
                    className="h-14 w-[3.75rem] rounded-full relative left-3"
                    src={Marin}
                  />
                  <img
                    className="h-14 w-[3.75rem] w- rounded-full"
                    src={Ayeesha}
                  />
                </div>
                <div className="font-Everett text-base ">
                  <h1>Marin / Ayesha</h1>
                  <h1 className="opacity-60">Global Services</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Video section */}
          <div className=" w-72 h-40 border border-solid  rounded-lg overflow-hidden  relative bg-[#FFCC30]">
            <div className="z-50 top-[40%] left-[20%] absolute lg:py-3  text-base px-12 backdrop-blur-lg inline-flex text-white rounded-full">
              <img className="w-5 h-5 mr-2" src={Play} />
              Play Showreel
            </div>
            <img
              className="w-[200%] h-[200%] absolute top-[-70%] -right-10 z-0 object-cover"
              src={VideoBgImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
