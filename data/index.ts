export const navItems = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  },
];

export const tabItems = [
  {
    title: "Skills",
    id: "skills",
    content: ["Java", "Kotlin", "Android", "HTML", "CSS", "Javascript", "NextJS", "SpringBoot", "Android Compose" ]
  },
  {
    title: "Education",
    id: "education",
    content: ["Sepuluh Nopember Institute of Technology"]
  },
  {
    title: "Certifications",
    id: "certifications",
    content: ["Expert Android Developer", "Intermediate Web Developer", "Fundamental Back-End Developer"]
  },
];

export const projectsItems = [
  {
    id: 1,
    title: "Clastic",
    description: "An Android app that allows user to convert plastic waste into spendable points",
    image: "clastic.png",
    githubUrl: "",
    demoUrl: "",
    tag: ["All", "Mobile"]
  },
  {
    id: 2,
    title: "Github User App",
    description: "An Android app that can find any Github user, and also add any users to favorites",
    image: "github-user.png",
    githubUrl: "",
    demoUrl: "",
    tag: ["All", "Mobile"]
  },
  {
    id: 3,
    title: "Pathfinding Visualizer",
    description: "A web-based project used to visualize various pathfinding algorithm",
    image: "pathfinding-visualizer.png",
    githubUrl: "",
    demoUrl: "",
    tag: ["All", "Web"]
  },
  {
    id: 4,
    title: "Candy Works",
    description: "A web-based project used to visualize ThreeJS implementation in a form of an online candy store",
    image: "candy-works.png",
    githubUrl: "",
    demoUrl: "",
    tag: ["All", "Web"]
  },
  {
    id: 5,
    title: "Books API",
    description: "Back end application that allows user to manage information about books and the authors",
    image: "project.png",
    githubUrl: "",
    demoUrl: "",
    tag: ["All", "Back-End"]
  },
];

export const filterItems = [
  "All",
  "Web",
  "Mobile",
  "Back-End"
];

export const achievementsItems = [
  {
    id: 1,
    metric: "Projects",
    value: 100,
    postfix: "+"
  },
  {
    id: 2,
    metric: "Awards",
    value: 10,
    postfix: "+"
  },
  {
    id: 3,
    prefix: "~",
    metric: "Users",
    value: 100,
    postfix: "+"
  },
  {
    id: 4,
    metric: "Years",
    value: 5
  }
];