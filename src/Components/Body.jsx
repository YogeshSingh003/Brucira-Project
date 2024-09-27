import ARROW from "../Asset/images/right-arrow.svg";
import VideoBgImg from "../Asset/images/Video_Background.png";
import Play from "../Asset/images/play.png";
import Ayeesha from "../Asset/images/Ayeesha.png";
import Marin from "../Asset/images/Marin.png";

const Body = () => {
  return (
    <div>
      <div>
        <div className="text-5xl md:text-7xl lg:text-[104px]  font-Everett ">
          <h1>WE ARE A</h1>
          <h1>
            GLOBAL <span className="text-[#EF001C]">PRODUCTION</span>
          </h1>
          <h1>AGENCY</h1>
        </div>
        <div className="flex justify-between items-end">
          <div className="mt-8">
            <div className="text-base lg:text-[26px] h-32 font-[650] font-OpenSans">
              <h1>
                Designed with the specific needs of large B2B enterprises in
                mind,
              </h1>
              <h1>our platform offers a comprehensive solution to simplify.</h1>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#EF001C] inline-flex items-center font-semibold text-white text-lg py-5 -my-1 px-8 rounded-full">
                <button>GET PROFESSIONAL VIDEO SERVICES </button>
                <img className="w-5 h-5 ml-2 " src={ARROW} />
              </span>
              <div className="flex gap-4">
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
          <div className="w-72 h-40 border border-solid  rounded-lg overflow-hidden  relative bg-[#FFCC30]">
            <div className="z-50 top-[40%] left-[20%] absolute py-3 px-12 backdrop-blur-lg inline-flex text-white rounded-full">
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
