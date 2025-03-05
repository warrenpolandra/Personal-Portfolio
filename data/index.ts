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
    title: "Clastic",
    description: "An Android app that allows user to convert plastic waste into spendable points",
    image: "clastic.png",
    githubUrl: "https://github.com/lsatriosim/clastic-app",
    demoUrl: "https://www.figma.com/proto/xSZYyK7XxyCVhqg2B7lswj/Design?node-id=1-2&p=f&t=NTYbfeGQ2Dmk400W-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2",
    tag: ["All", "Mobile"]
  },
  {
    title: "Github User App",
    description: "An Android app that can find any Github user, and also add any users to favorites",
    image: "github-user.png",
    githubUrl: "https://github.com/warrenpolandra/Android-Github-User-Application",
    demoUrl: "",
    tag: ["All", "Mobile"]
  },
  {
    title: "Pathfinding Visualizer",
    description: "A web-based project used to visualize various pathfinding algorithm",
    image: "pathfinding-visualizer.png",
    githubUrl: "https://github.com/doandadr/pathfinding-visualizer",
    demoUrl: "https://pathfinding-visualizer-six.vercel.app/",
    tag: ["All", "Web"]
  },
  {
    title: "Candy Works",
    description: "A web-based project used to visualize ThreeJS implementation in a form of an online candy store",
    image: "candy-works.png",
    githubUrl: "https://github.com/winatungmiharja/candy-works",
    demoUrl: "",
    tag: ["All", "Web"]
  },
  {
    title: "Books API",
    description: "Back end application that allows user to manage information about books and the authors",
    image: "project.png",
    githubUrl: "https://github.com/warrenpolandra/Books-API",
    demoUrl: "",
    tag: ["All", "Back-End"]
  },
  {
    title: "Android Story App",
    description: "An Android app where users can post and view other user's stories containing image and description",
    image: "story-app.png",
    githubUrl: "https://github.com/warrenpolandra/Android-Story-Application",
    demoUrl: "",
    tag: ["All", "Mobile"]
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