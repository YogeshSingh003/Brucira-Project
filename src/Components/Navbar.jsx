import LOGO from "../Asset/images/Company_Logo.png";
import ARROW from "../Asset/icons/right-arrow.svg";

const Navbar = () => {
  return (
    <div>
      <div className="flex my-5 flex-col md:flex-row justify-between items-center">
        <div className="w-56">
          <img src={LOGO} />
        </div>
        <div className="flex text-xs md:text-lg items-center md:items-start  gap-6 md:gap-12 font-semibold py-3">
          <div className="flex opacity-60 items-baseline">
            <h2>SERVICES </h2>
            <img className="w-3 h-3 ml-2 -rotate-45" src={ARROW} />
          </div>
          <div className="flex opacity-40 items-baseline">
            <h2>WORK</h2>
            <img className="w-3 h-3 ml-2 -rotate-45" src={ARROW} />
          </div>
          <div className="flex items-baseline ">
            <h2>ABOUT</h2>
            {/* Make arrow color #EF001C */}
            <img className="w-3 h-3 ml-2 rotate-45 " src={ARROW} />
          </div>
          <div className="bg-[#EF001C] text-white font-normal py-1 -my-1 px-5 rounded-3xl ">
            <button>GET STARTED</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
