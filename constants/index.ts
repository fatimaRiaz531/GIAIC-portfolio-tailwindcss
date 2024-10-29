import { title } from "process";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 14",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  // {
  //   name: "Stripe Payment",
  //   Image: "/stripe.webp",
  //   width: 80,
  //   height: 80,
  // },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
   name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    id:1,
    name: "Discord",
    src: "/discord.svg",
    href:"https://discord.com/channels/@me"
  },
  {
    id:2,
    name: "LinkedIn",
    src: "linkedin.svg",
    href:"https://www.linkedin.com/in/fatima-r-87a1472b5/"
  },
  {
    id:3,
    name: "Github",
    src: "github.svg",
    href:"https://github.com/fatimaRiaz531"

    
  },
];
export const Projects = [

  {
    title: "Periodic Table",
    text:'This periodic table is a simple web page created using HTML and inline CSS. It provides a visual representation of the chemical elements, organized according to their atomic number. The table is designed to be easy to read and understand, with clear labels for each element. While it offers a basic overview of the periodic table, there is room for improvement in terms of styling, interactivity, and the amount of information provided. By incorporating more advanced CSS techniques and JavaScript functionality, this project could be expanded to create a more comprehensive and engaging resource for learning about chemistry.',
    src: "/Periodic-Table.png",
  },
   {
   title: "Calculator",
   text: "This web-based calculator provides a simple yet effective tool for performing basic arithmetic calculations. Built using HTML, CSS, and JavaScript, it offers a clean and intuitive user interface. Users can easily input numbers and perform operations using the provided buttons. The calculator is designed to be responsive, adapting to different screen sizes for optimal viewing on various devices. Additionally, it includes accessibility features such as keyboard navigation and sufficient color contrast to ensure usability for all users.",
    src: "/Calculator.png",
   },
  {
    title: "Modern Nextjs Portfolio",
    text: "I've built a modern website using Next.js, incorporating HTML, Tailwind CSS, Framer Motion, and React. I'm really enjoying learning new technologies and developing projects. The 'use client' feature has been particularly helpful.",
    src: "/WebPortfolio.png",
  },
  {
    title: "Birthday Card",
    text:"I've created a personalized birthday card using Next.js. This project leverages a combination of technologies including React for component-based structure, HTML for building the card's layout, and Tailwind CSS for styling. By utilizing Next.js, I was able to build a dynamic and efficient application that renders the card on the server-side, enhancing performance and SEO. The card features a visually appealing design, incorporating custom animations and interactive elements to create a truly memorable experience for the recipient.",
    src: "/Birthdaycard.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
