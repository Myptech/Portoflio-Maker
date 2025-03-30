import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Про меня",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Контакты",
  },
];

const services: TService[] = [
  {
    title: "Web Разработчик",
    icon: web,
  },
  {
    title: "React Разработчик",
    icon: mobile,
  },
  {
    title: "Python Разработчик",
    icon: backend,
  },
  {
    title: "SQL Разработчик",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScr ipt",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Отличная платформа для создания портфолио! Всё интуитивно понятно, а возможности настройки дизайна просто безграничны. Рекомендую!",
    name: "Алексей Смирнов",
    designation: "VK",
    company: "Разработик",
    image: "https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man-white-t-shirt-blurry-outdoor-nature_176420-6305.jpg",
  },
  {
    testimonial:
      "Создала своё портфолио за несколько часов! Простой интерфейс и множество крутых шаблонов. Очень довольна результатом!",
    name: "Марина",
    designation: " ",
    company: "Фотограф",
    image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
  },
  {
    testimonial:
      "Это идеальный сервис для любого творческого человека. Легко интегрировать работы, а сам дизайн портфолио выглядит на высоте!",
    name: "Иван",
    designation: "",
    company: "Иллюстратор",
    image: "https://i.pinimg.com/736x/e8/dd/f6/e8ddf641c69e6aa30feacf9477c191e0.jpg",
  },
  {
    testimonial:
      "Простой и удобный интерфейс! Создавать портфолио стало намного легче. Теперь могу с уверенностью показывать свои работы потенциальным клиентам.",
    name: "Ольга",
    designation: "Дизайнер",
    company: "Freelancer",
    image: "https://img.freepik.com/free-photo/portrait-happy-young-woman-smiling-outdoor_23-2148138832.jpg",
  },
  {
    testimonial:
      "Очень удобно и быстро. Платформа дает всё, что нужно для создания красивого и функционального портфолио. Очень доволен!",
    name: "Дмитрий",
    designation: "Веб-разработчик",
    company: "Tech Studio",
    image: "https://img.freepik.com/free-photo/portrait-of-young-handsome-man-smiling_23-2148156164.jpg",
  },
  {
    testimonial:
      "Великолепная платформа для творческих людей! Множество вариантов настроек и оформление на высоте. Работать стало проще.",
    name: "Екатерина",
    designation: "Графический дизайнер",
    company: "Art Studio",
    image: "https://img.freepik.com/free-photo/young-woman-smiling-while-working-with-digital-tablet_23-2148268883.jpg",
  },
  {
    testimonial:
      "Я так быстро создал своё портфолио, что даже не ожидал! Очень понравился интерфейс и возможность показывать работы в разных стилях.",
    name: "Максим",
    designation: "Моушн-дизайнер",
    company: "Freelancer",
    image: "https://img.freepik.com/free-photo/smiling-young-man-portrait_23-2148316039.jpg",
  },
  {
    testimonial:
      "Платформа просто идеальна для любого креативного человека! Легко сделать потрясающее портфолио с нуля. Советуем всем!",
    name: "Андрей",
    designation: "UX/UI дизайнер",
    company: "Design Studio",
    image: "https://img.freepik.com/free-photo/portrait-of-young-smiling-man-against-wall_23-2148380863.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
