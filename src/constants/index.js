import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  csharp,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  tensorflow,
  git,
  python,
  docker,
  ship,
  cinteot,
  tesla,
  threejs,
  postgres,
  algorithms,
  Secplus,
  port,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML/AI Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Database Administrator",
    icon: backend,
  },
  {
    title: "Algorithmic Thinker",
    icon: creator,
  },
];

const technologies = [
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "csharp",
    icon: csharp,
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
    name: "tensorflow",
    icon: tensorflow,
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
    name: "postgres",
    icon: postgres,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Predictive Analyst",
    company_name: "Cinteot",
    icon: cinteot,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining machine learning models using Keras and TensorFlow.",
      "Linking and upkeeping PostgreSQL database servers.",
      "Designing Unity sprites and uploading apps to mobile stores.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "CompTIA Security+ Certification",
    company_name: "CompTIA",
    icon: Secplus,
    iconBg: "#E6DEDD",
    date: "Valid: August 2023 - August 2026",
    points: [
      "Learned about risk management, assessment, and mitigation.",
      "Experienced how to identify and address threats and vulnerabilities.",
    ],
  },
  {
    title: "Shippensburg University of Pennsylvania",
    company_name: "Computer Science",
    icon: ship,
    iconBg: "#E6DEDD",
    date: "August 2020 - December 2023",
    points: [
      "Learned about OOP, design patters, algorithms, and data structures.",
      "Became proficient in Java, Python, C, and C++.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Jacob is a great programmer.",
    name: "Caden Rosenberry",
    designation: "Student",
    company: "Shippensburg University",
    image: algorithms,
  },
  {
    testimonial:
      "Need testimonial.",
    name: "Dr. Girard",
    designation: "Adjunct Professor",
    company: "Shippensburg University",
    image: algorithms,
  },
  {
    testimonial:
      "You're always on your computer.",
    name: "Kira Kenny",
    designation: "My girlfriend",
    company: "PSH",
    image: algorithms,
  },
];

const projects = [
  {
    name: "Tesla Stock Predictor",
    description:
      "Utilizes Keras/TensorFlow to create an LSTM model trained on Tesla historical stock and sentimental data to predict future price trends.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "HTML&CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://github.com/JacobYealy/StockPredictor/tree/master",
  },
  {
    name: "BFS & DFS",
    description:
      "Reads an input CSV file and finds the optimal path that Depth First Search and Breadth First Search algorithms may take.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Algorithms",
        color: "green-text-gradient",
      },
    ],
    image: algorithms,
    source_code_link: "https://github.com/JacobYealy/BFSvsDFS",
  },
  {
    name: "3D Portfolio",
    description:
      "Learned about Three.js, React, and other 3D frontend frameworks from JavaScriptMastery on YouTube to deploy a Portfolio website.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    source_code_link: "https://github.com/JacobYealy/",
  },
];

export { services, technologies, experiences, testimonials, projects };
