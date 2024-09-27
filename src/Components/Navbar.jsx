import LOGO from "../Asset/images/Company_Logo.png";
import ARROW from "../Asset/images/right-arrow.svg";

const Navbar = () => {
  return (
    <div>
      <div className="flex my-5 justify-between items-center">
        <div className="w-56">
          <img src={LOGO} />
        </div>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-12 font-semibold py-3">
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
