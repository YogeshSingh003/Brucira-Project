import Vinita from "../Asset/images/Ayeesha.png";
import Milly from "../Asset/images/Marin.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  // Define global lead's data
  const globalLeadData = [
    {
      id: 1,
      name: "Milly Cyrus",
      designation: "Global Lead",
      image: Milly,
      description:
        "All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.",
    },
    {
      id: 2,
      name: "Vinita Singh",
      designation: "Asst. Global Lead",
      image: Vinita,
      description:
        "All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.",
    },
  ];

  return (
    <div>
      <div className="bg-[#F1F2F6] flex flex-col lg:flex-row lg:px-24 pt-10 md:pt-20 lg:pt-0  lg:-mx-24 lg:h-[120vh]">
        <div className="lg:w-7/12  flex flex-col justify-center gap-20">
          {/* Connect heading */}
          <div className="font-Everett text-5xl md:text-7xl  flex flex-col gap-3 ">
            <h1>LET'S START</h1>
            <h1>SOMETHING</h1>
            <h1 className="text-[#EF001C]">NEW</h1>
            <h1>TOGETHER</h1>
          </div>

          {/* Global lead's data and image */}

          <div className="flex pb-12">
            {/* Map function*/}
            {globalLeadData.map((obj) => (
              <>
                <div className=" border-[1px] mr-5 border-solid border-[#BDBDBD] h-60" />
                <div className="flex flex-col justify-between md:pr-20">
                  <div className="h-24 w-24 rounded-full">
                    <img
                      className="rounded-full object-cover h-full w-full"
                      src={obj.image}
                    />
                  </div>
                  <div className="font-OpenSans text-base text-[#1E1F1FB2]">
                    <p>{obj.description}</p>
                  </div>
                  <div className="font-Everett">
                    <h1>{obj.name + ", " + obj.designation}</h1>
                  </div>
                </div>
              </>
            ))}
            ;
          </div>
        </div>
        {/* Contact form component */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
