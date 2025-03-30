import React from "react";

const PortfolioPromo = () => {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 relative z-0 mx-auto max-w-7xl text-white text-center">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-4">
        Хотите такое же портфолио?
      </h2>
      <p className="text-lg mb-6">
        Свяжитесь со мной, и я помогу вам создать уникальный сайт!
      </p>
      <a
        href="#contact"
        className="bg-purple-600 hover:bg-purple-800 text-white py-3 px-6 rounded-lg text-lg font-semibold transition"
      >
        Заказать
      </a>
    </section>
  );
};

export default PortfolioPromo;
