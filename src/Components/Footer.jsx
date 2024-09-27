const Footer = () => {
  return (
    <div>
      <div className="flex justify-between mr-20">
        <div>
          <h1 className="font-Everett text-3xl">COMPANY</h1>
          <button className="font-OpenSans text-xl mt-6 font-normal">
            Who Are We
          </button>
        </div>
        <div>
          <h1 className="font-Everett text-3xl">RESOURCES</h1>
          <button className="font-OpenSans text-xl mt-6 font-normal">
            Blog
          </button>
        </div>
        <div>
          <h1 className="font-Everett text-3xl">WORK</h1>
          <div className="flex flex-col items-start">
            <button className="font-OpenSans text-xl mt-6 font-normal">
              Video
            </button>
            <button className="font-OpenSans text-xl mt-6 font-normal">
              Shoot
            </button>
            <button className="font-OpenSans text-xl mt-6 font-normal">
              Post
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-Everett text-3xl">SERVICES</h1>
          <div className="flex flex-col items-start">
            <button className="font-OpenSans text-xl mt-6 font-normal">
              Video
            </button>
            <button className="font-OpenSans text-xl mt-6 font-normal">
              Shoot
            </button>
            <button className="font-OpenSans text-xl mt-6 font-normal">
              Post
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-Everett text-3xl">CONTACT</h1>
          <div className="flex flex-col items-start">
            <button className="font-OpenSans text-xl mt-6 font-normal">
              Talk to us
            </button>
            <button className="font-OpenSans text-xl mt-6 font-normal">
              Collab
            </button>
          </div>
        </div>
      </div>
      <div className="-mr-8">
        <hr className="mb-10 mt-20 border bg-gray-700" />
        <div className="flex mb-10 justify-between">
          <button className="font-OpenSans text-xl  font-normal">
            Copyright ©2023 Red Bangle
          </button>
          <div className="flex gap-10">
            <button className="font-OpenSans text-xl font-normal">
              Privacy Policy
            </button>
            <button className="font-OpenSans text-xl font-normal">Legal</button>
            <button className="font-OpenSans text-xl font-normal">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
