import { useState } from "react";
import Arrow from "../Asset/icons/right-arrow.svg"; // Import right arrow icon

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  // Function to handle change in data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (send data to backend or validation)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center mr-5 lg:mr-0 lg:w-5/12 mt-10">
      {/* Form UI */}
      <form onSubmit={handleSubmit} className=" p-8 pr-0 rounded w-full ">
        <h2 className="text-xl md:text-3xl font-OpenSans font-semibold mb-6">
          Give us few details and we’ll get in touch
        </h2>
        <div className="font-OpenSans md:text-xl ">
          <div className="mb-4  ">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full    md:py-5 placeholder-[#111010]  placeholder-opacity-60  bg-[#F1F2F6] border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-gray-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full     md:py-5 placeholder-[#111010]  placeholder-opacity-60 bg-[#F1F2F6] border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-gray-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full     md:py-5 placeholder-[#111010]  placeholder-opacity-60 bg-[#F1F2F6] border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-gray-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              placeholder="Phone no*"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full     md:py-5 placeholder-[#111010]  placeholder-opacity-60 bg-[#F1F2F6] border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-gray-500"
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              className="w-full    md:py-5 placeholder-[#111010]  placeholder-opacity-60 bg-[#F1F2F6] border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-gray-500"
              rows="1"
              required
            />
          </div>

          <div className="flex justify-center bg-red-500 text-white font-semibold text-xl w-full font-OpenSans my-10 py-5 px-6 rounded-full">
            <button
              type="submit"
              className=" hover:bg-red-600 transition-colors"
            >
              CONTACT US
            </button>
            <span>
              <img className=" pl-1 w-7 h-6 filter invert ml-2 " src={Arrow} />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
