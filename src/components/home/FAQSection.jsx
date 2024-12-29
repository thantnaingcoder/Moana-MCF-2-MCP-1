import Accordion from "./Accordion";

const FAQSection = () => {
  return (
    <section className="px-5 xl:px-0">
      <h1 className="font-heading  text-xl md:text-3xl text-gradient text-center mb-3">
        Frequently Asked Questions
      </h1>
      <div className="w-full sm:max-w-5xl mx-0 sm:mx-auto  ">
        <h3 className="text-neutral-900 text-xl text-nowrap md:text-2xl mb-3">
          What is the main message of Moana?
        </h3>
        <p className="sm:text-lg  text-neutral-700  leading-7 mb-5">
          Moana isn't suitable for children under the age of 8 years. We
          recommend parental guidance for children aged up to 10 years because
          of the movie's violent and scary scenes. The main messages from this
          movie are to follow your dreams and be true to yourself.
        </p>
        <Accordion />
      </div>
    </section>
  );
};

export default FAQSection;
