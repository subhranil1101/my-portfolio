const Info = {
  name: "Subhranil Das",
  about:
    "I'm a passionate web developer, currently pursuing B.Tech in Information Technology from Kolkata, India. Having significant knowledge in programming languages & DSA, I also want to grown up my skills in development domain & want to gain practical experience to contribute to many organizations",
  stack: ["Student", "Web Developer", "Programmer", "Photographer"],
};

const ProjectInfo = [
  {
    title: "JobCat",
    desc: "A centralized job portal website with dual registration for students and recruiters. Allows recruiters to create detailed company profiles, post job vacancies with comprehensive descriptions, qualifications & requirements. Students can register, create profiles, and apply for posted positions, with the ability to track the status of their applications. Recruiters can manage & review applications, with an approval or rejection system in place.",
    image: "./jobcat.png",
    live: false,
    technologies: ["React", "Redux", "NodeJs", "MongoDb","ExpressJs", "Tailwind", "Shadcn/Ui"],
    link: "https://github.com/subhranil1101/job-portal",
    github: "https://github.com/subhranil1101/job-portal",
  },
  {
    title: "Personal Portfolio",
    desc: " A Personal Portfolio website (responsive) to showcase my projects, skills, and education which includes detailed descriptions of my work, technology stacks, and links to code repositories. The site also highlights my technical & soft skills, along with my educational background, making it easy for employers and collaborators to get a clear overview of my journey.",
    image: "./portfolio.png",
    live: true,
    technologies: ["React","Tailwind", "Mantine Component"],
    link: "https://my-portfolio-red-eta-45.vercel.app/",
    github: "https://github.com/subhranil1101/my-portfolio",
  },
  {
    title: "iNotebook",
    desc: "An online notebook web application where individuals can create an account and after login, user can create personal notes which is only visible and accessible by that user only. Notes can edit and delete only by that user.",
    image: "./iNotebook.png",
    live: false,
    technologies: ["React", "NodeJs", "MongoDb", "Bootstrap", "jwt"],
    link: "https://github.com/subhranil1101/inotebook",
    github: "https://github.com/subhranil1101/inotebook",
  },
  {
    title: "iPass Manager",
    desc: "A password manager web application where individuals can save there passwords for different different websites along with that websites url & userId. Users can see there all passwords in one place.",
    image: "./iPass.png",
    live: false,
    technologies: ["React", "NodeJs", "MongoDb", "Tailwind"],
    link: "https://github.com/subhranil1101/iPass-mongo",
    github: "https://github.com/subhranil1101/iPass-mongo",
  },
  {
    title: "Todo List",
    desc: "A Todo list application where user can add their todos and check them when it's done. Completed todos will be not shown in the list until show finished button is checked. Session storage is used to store the todos.",
    image: "./todolist.png",
    live: false,
    technologies: ["React", "Tailwind"],
    link: "https://github.com/subhranil1101/todo-list-tw",
    github: "https://github.com/subhranil1101/todo-list-tw",
  },
  {
    title: "TextUtils",
    desc: "A text converter web application where user can change a selected text into uppercase, lowercase and copy that text into clipboard, extra spaces also can be removed.Clear text option also available. Alerts are also set for different functions",
    image: "./textUtils.png",
    live: false,
    technologies: ["React", "Bootstrap"],
    link: "https://github.com/subhranil1101/Text-Utils",
    github: "https://github.com/subhranil1101/Text-Utils",
  },
  {
    title: "NewsCat",
    desc: "A daily News web application where all kinds of news are available with their source websites link. User can was category wise news from Navbar link sports, entertainment, social, Business, Health, Science, Technology etc.",
    image: "./newsCat.png",
    live: false,
    technologies: ["React", "Bootstrap"],
    link: "https://github.com/subhranil1101/news-app",
    github: "https://github.com/subhranil1101/news-app",
  },
  {
    title: "Weather App",
    desc: "A weather application where you can check your city's weather like Temperature & Humanity, Location Info, Wind Info etc. Also popular 10 city's weather info is available there. All kind of weather information is present in the website. Also there is a search function so that you can search your desired city",
    image: "./weather.png",
    live: false,
    technologies: ["HTML", "Bootstrap Css", "JavaScript"],
    link: "https://github.com/subhranil1101/Weather-Application",
    github: "https://github.com/subhranil1101/Weather-Application",
  },
  {
    title: "Spotify-Clone",
    desc: "Ui clone of spotify web application. Volume control,mute and songs control is present to pause,play,next &prev songs on a playlist. Playlists & songs can be added in the local storage which will be reflected in the application.",
    image: "./spotify.png",
    live: false,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/subhranil1101/Spotify-Clone",
    github: "https://github.com/subhranil1101/Spotify-Clone",
  },
  {
    title: "Twitter-X-Clone",
    desc: "Ui clone of Twitter or X web application. Only the homepage clone of twitter made using html and Tailwind css. All sections of the home page is made",
    image: "./twitter.png",
    live: false,
    technologies: ["HTML", "Tailwind Css"],
    link: "https://github.com/subhranil1101/Twitter-X-clone",
    github: "https://github.com/subhranil1101/Twitter-X-clone",
  },
  {
    title: "Netflix-Clone",
    desc: "Ui clone of Netflix web application. Only the Homepage clone made using HTML and vanila CSS",
    image: "./netflix.png",
    live: false,
    technologies: ["HTML", "CSS"],
    link: "https://github.com/subhranil1101/Netflix-clone",
    github: "https://github.com/subhranil1101/Netflix-clone",
  },
];

const SKillInfo = [
  {
    title:"Frontend",
    skills:['HTML', 'CSS', 'JavaScript', 'React Js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title:'Backend',
    skills:['NodeJs','ExpressJs', 'MongoDb', 'MySQL']
  },
  {
    title:'Languages',
    skills:['C','Java','Python','JavaScript']
  },
  {
    title:'Tools',
    skills:['Git', 'GitHub', 'VS Code', 'MongoDb Compass','Postman','Thunder Client' ]
  },
  {
    title:'Others',
    skills:['DSA', 'OOPS', 'DBMS', 'OS', 'CN']
  }
]

const EducationInfo = [
  {
    title:'Secondary Education (M.P)',
    board:'WBBSE',
    subject:'',
    yop:'2018',
    grade:'92.42%'
  },
  {
    title:'Higher Secondary Education (H.S)',
    board:'WBCHSE',
    subject:'Science',
    yop:'2020',
    grade:'95%'
  },
  {
    title:'Bachelor in Technology (B.Tech)',
    board:'MAKAUT',
    subject:'Information Technology',
    yop:'2021-2025',
    grade:'89.20% (upto 6th sem)'
  },
]

const slugs = [
  "dart",
  "python",
  "c",
  "javascript",
  "html5",
  "css3",
  "java",
  "typescript",
  "nodedotjs",
  "git",
  "github",
  "express",
  "visualstudiocode",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "react",
  "flutter",
  "android",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "jira",
  "gitlab",
  "androidstudio",
  "sonarqube",
  "figma",
  "mysql",
  "mongodb"
];


export { Info, ProjectInfo, SKillInfo, EducationInfo, slugs };
