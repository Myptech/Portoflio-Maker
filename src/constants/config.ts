type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Portfolio Maker",
    fullName: "Erasyl Aktauke",
    email: "Myp_tech@mail.ru",
  },
  hero: {
    name: "Актәуке Ерасыл",
    p: ["Я фронтенд-разработчик, увлекаюсь React и веб-технологиями."],
  },
  contact: {
    p: "Оставайся на связи",
    h2: "Контакты.",
    form: {
      name: {
        span: "Ваше Имя",
        placeholder: "Ваше имя ?",
      },
      email: { span: "Ваш Email", placeholder: "Какой ваш email?" },
      message: {
        span: "Ваше сообщение",
        placeholder: "Что хотите написать?",
      },
    },
  },
  sections: {
    about: {
      p: "Введение",
      h2: "Обзор.",
      content: `Я веб-разработчик с небольшим опытом работы в React и Node.js. Создаю удобные и эффективные решения, работаю с JavaScript и React JS. Люблю помогать воплощать идеи в реальные проекты.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "Что говорят другие?",
      h2: "Отзывы.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
