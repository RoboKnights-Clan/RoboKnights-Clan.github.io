import React from "react";

const FAQS: React.FC<{
  FaqData: { question: string; answer: string }[];
}> = (FAQData: { FaqData: { question: string; answer: string }[] }) => {
  const [open, setOpen] = React.useState({});

  return (
    <div className="mx-auto lg:px-24 px-5 py-12 items-center text-dark">
      <h1 className="font-medium sm:text-4xl text-3xl pb-8 text-dark dark:text-white font-sansm">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="py-4">
        {Object.keys(FAQData).map((key) => {
          return FAQData["FaqData"].map((faq, index) => {
            return (
              <section
                key={index}
                className="p-4 border-b-2 border-black dark:border-white"
              >
                <div className="border-dark flex items-center">
                  <h2 className="font-medium sm:text-xl text-lg text-dark dark:text-white font-sansm">
                    {faq.question}
                  </h2>
                  {open === index ? (
                    <svg
                      onClick={() => {
                        setOpen({});
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 ml-auto border-2 rounded-full font-bold text-dark dark:text-white border-black dark:border-white p-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => {
                        setOpen(index);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 ml-auto border-2 rounded-full font-bold text-dark dark:text-white border-black dark:border-white p-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
                <p
                  className={`text-base py-2 text-dark dark:text-gray-c8 ${
                    open === index ? "" : "hidden"
                  }`}
                >
                  {faq.answer}
                </p>
              </section>
            );
          });
        })}
      </div>
    </div>
  );
};

export default FAQS;
