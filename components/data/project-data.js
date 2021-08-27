export const projects = [
  {
    name: 'theMovieBook',
    description:
      'Movie database single-page application. Database and RESTful API built from scratch with the client being built twice using both React and Angular.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Bootstrap', 'SCSS'],
    links: [
      {
        type: 'Code',
        name: 'Backend Code',
        url: 'https://github.com/RyRojas/themoviebook-api',
      },
      {
        type: 'Code',
        name: 'Frontend Code',
        url: 'https://github.com/RyRojas/themoviebook-client',
      },
      {
        type: 'Misc',
        name: 'Case Study',
        url: '/case-study',
      },

      {
        type: 'Demo',
        url: 'https://themoviebook.netlify.app/',
      },
    ],
    caseStudy: false,
    img: '/images/projects/themoviebook.png',
  },
  {
    name: 'MeetApp',
    description:
      'Simple calendar app for developer events built with a test-driven development approach, including unit, integration, and E2E tests. AWS Lambda used for OAuth authentication and Google Calendar integration. Makes use of local caching and service workers for offline and mobile use.',
    tech: ['React', 'AWS Lambda', 'Jest', 'Enzyme', 'CSS'],
    links: [
      {
        type: 'Code',
        url: 'https://github.com/RyRojas/meetapp',
      },
      {
        type: 'Demo',
        url: 'https://ryrojas.github.io/meetapp/',
      },
    ],
    caseStudy: false,
    img: '/images/projects/meetapp.png',
  },
  {
    name: 'Chatify',
    description:
      'React Native chat app that uses Firebase and Firestore for authentication and data storage. Makes use of async storage for local data storage and offline functionality. Built to a design specification.',
    tech: [
      'React Native',
      'Firebase/Firestore',
      'Async Storage',
      'Gifted Chat',
    ],
    caseStudy: false,
    links: [
      {
        type: 'Code',
        url: 'https://github.com/RyRojas/chatify',
      },
    ],
    img: '/images/projects/chatify.png',
  },
  {
    name: 'PokéDex',
    description:
      'A simple PokéDex app to get familiarized with JavaScript and Bootstrap, as well as working with an API.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    links: [
      {
        type: 'Code',
        url: 'https://github.com/RyRojas/js-pokedex',
      },
      {
        type: 'Demo',
        url: 'https://ryrojas.github.io/js-pokedex/',
      },
    ],
    caseStudy: false,
    img: '/images/projects/pokedex.png',
  },
];
