import { useState } from "react";
import downArrow from "../Asset/icons/downArrow.svg"; // Import right arrow icon

const FAQ = () => {
  // Define FAQ data
  const faqData = [
    {
      id: 1,
      question: "How do I sign up?",
      answers:
        "To sign up, visit our website and click on the Sign Up button. Follow the prompts to create your account.",
    },
    {
      id: 2,
      question:
        "What information do I need to provide during the sign-up process?",
      answers:
        "You will need to provide your name, email address, and a password. Additional information may be requested depending on the specific service.",
    },
    {
      id: 3,
      question: "Is my information secure during the sign-up process?",
      answers:
        "Yes, your information is secure. We use encryption and follow industry standards to protect your data during the sign-up process.",
    },
    {
      id: 4,
      question: "What is the minimum duration of the contract?",
      answers:
        "The minimum duration of the contract is typically [insert duration, e.g., six months or one year], depending on the nature of the collaboration.",
    },
    {
      id: 5,
      question: "Who can apply?",
      answers:
        "Anyone who meets our eligibility criteria can apply. This typically includes individuals or organizations aligned with our mission.",
    },
    {
      id: 6,
      question: "What are the terms and conditions for the collaboration?",
      answers:
        "The terms and conditions outline the expectations, responsibilities, and rights of all parties involved. You can find the full details in our Terms and Conditions section on the website.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between my-12 md:my-24 lg:my-32 ">
        {/* FAQ heading */}
        <div className="font-Everett text-3xl pb-6 md:text-6xl lg:w-5/12">
          <h1>Frequently asked questions</h1>
        </div>
        <div className="lg:w-6/12">
          {/* Map function*/}
          {faqData.map((obj, index) => (
            <div key={obj.id}>
              <div className="font-OpenSans text-base md:text-xl font-normal py-3 md:py-6 w-full flex justify-between">
                {obj.question}
                <span>
                  <button
                    className={`h-3 w-4 mr-5 transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    onClick={() => handleAccordionClick(index)}
                  >
                    <img src={downArrow} />
                  </button>
                </span>
              </div>

              {index === activeIndex && (
                <div className="font-OpenSans text-base md:text-lg font-normal pb-3  w-full flex justify-between">
                  {obj.answers}
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
