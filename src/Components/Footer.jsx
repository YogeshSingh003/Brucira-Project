const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row  items-center -my-20 md:-my-0 md:items-start md:justify-between lg:mr-20">
        <div>
          <h1 className="font-Everett md:text-xl lg:text-3xl">COMPANY</h1>
          <div className="flex flex-col md:items-start mb-5 md:mb-0">
            <button className="font-OpenSans text-base md:text-xl md:mt-6 font-normal">
              Who Are We
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-Everett md:text-xl lg:text-3xl">RESOURCES</h1>
          <div className="flex flex-col md:items-start mb-5 md:mb-0">
            <button className=" md:items-start font-OpenSans text-base md:text-xl md:mt-6 font-normal">
              Blog
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-Everett md:text-xl lg:text-3xl">WORK</h1>
          <div className="flex flex-col md:items-start font-OpenSans  text-base md:text-xl font-normal mb-5 md:mb-0">
            <button className=" md:mt-6">Video</button>
            <button className=" md:mt-6">Shoot</button>
            <button className=" md:mt-6">Post</button>
          </div>
        </div>
        <div>
          <h1 className="font-Everett md:text-xl lg:text-3xl">SERVICES</h1>
          <div className="flex flex-col md:items-start font-OpenSans  text-base md:text-xl font-normal mb-5 md:mb-0">
            <button className="md:mt-6">Video</button>
            <button className="md:mt-6">Shoot</button>
            <button className="md:mt-6">Post</button>
          </div>
        </div>
        <div>
          <h1 className="font-Everett md:text-xl lg:text-3xl">CONTACT</h1>
          <div className="flex flex-col md:items-start text-base md:text-xl font-OpenSans  font-normal mb-5 md:mb-0">
            <button className="md:mt-6">Talk to us</button>
            <button className="md:mt-6">Collab</button>
          </div>
        </div>
      </div>
      <div className="-mr-8">
        <hr className="mb-10 mt-20 border bg-gray-700" />
        <div className="flex mb-10 flex-col gap-8 lg:flex-row justify-between font-OpenSans text-base md:text-xl font-normal">
          <button className="">Copyright ©2023 Red Bangle</button>
          <div className="flex justify-center flex-col md:flex-row md:gap-10">
            <button className="">Privacy Policy</button>
            <button className="">Legal</button>
            <button className="">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
