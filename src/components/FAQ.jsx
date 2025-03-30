import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  { question: "Как начать?", answer: "Просто отправляете заявку снизу страницы и ждете сообщение которое придет на почту" },
  { question: "Какие файлы можно загрузить?", answer: "Вы можете загружать изображения, документы и видео в поддерживаемых форматах." },
  { question: "Как проходит оплата?", answer: "Оплата производиться 50% в начале и 50% после завершения портфолио и мы даем 100% гарантию на ваше портфолио" },
  { question: "Как связаться с поддержкой?", answer: "Используйте контактную форму внизу страницы или напишите на Myp_tech@mail.ru" }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 relative z-0 mx-auto max-w-7xl text-white text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10"
      >
        ❓ Часто задаваемые вопросы
      </motion.h2>
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="border-b border-gray-300 last:border-b-0 py-4 cursor-pointer"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-xl font-semibold text-gray-900 focus:outline-none"
            >
              {item.question}
              {openIndex === index ? <FaChevronUp className="text-indigo-500" /> : <FaChevronDown className="text-indigo-500" />}
            </button>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-600 text-lg"
              >
                {item.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;