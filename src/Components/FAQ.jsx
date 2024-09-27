import downArrow from "../Asset/icons/downArrow.svg"; // Import right arrow icon

const FAQ = () => {
  // Define FAQ data
  const faqData = [
    { id: 1, text: "How do I sign up?" },
    {
      id: 2,
      text: "What information do I need to provide during the sign-up process?",
    },
    { id: 3, text: "Is my information secure during the sign-up process?" },
    { id: 4, text: "Who can apply?" },
    { id: 5, text: "What are the terms and conditions for the collaboration?" },
    { id: 6, text: "What is the minimum duration of the contract?" },
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between my-12 md:my-24 lg:my-32 ">
        {/* FAQ heading */}
        <div className="font-Everett text-3xl pb-6 md:text-6xl lg:w-5/12">
          <h1>Frequently asked questions</h1>
        </div>
        <div className="lg:w-6/12">
          {/* Map function*/}
          {faqData.map((obj) => (
            <div key={obj.id}>
              <div className="font-OpenSans text-base md:text-xl font-normal py-3 md:py-6 w-full flex justify-between">
                {obj.text}
                <span>
                  <button className="h-3 w-4">
                    <img src={downArrow} />
                  </button>
                </span>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
