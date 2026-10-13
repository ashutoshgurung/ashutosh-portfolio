import foodImg from "@/assets/project-food-ordering.jpg";
import spotifyImg from "@/assets/project-spotify.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import newsImg from "@/assets/project-news.jpg";
import netflixImg from "@/assets/project-netflix.jpg";

export const profile = {
  name: "Ashutosh Gurung",
  role: "Flutter Developer",
  email: "ashutoshgurung17@gmail.com", // TODO: replace with your real email
  github: "https://github.com/ashutoshgurung/", // TODO: replace with your GitHub profile
  linkedin: "https://www.linkedin.com/in/ashutosh-gurung-a14ab1353/", // TODO: replace with your LinkedIn profile
  resumeUrl: "/resume.pdf", // TODO: drop your PDF at public/resume.pdf
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  /** Replace with your own screenshot: drop it in src/assets and import it here. */
  image: string;
  tech: string[];
  features: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    learned: string;
  };
};



  
export const projects: Project[] = [
  {
    slug: "food-ordering-app",
    title: "VhokLayo",
    tagline:
      "A Flutter food ordering app with Firebase, admin management, and Khalti payment testing",
    description:
      "VhokLayo is a Flutter-based food ordering application designed to simplify food discovery and online ordering. It includes food browsing, search, cart management, checkout, authentication, and order management. The project uses Firebase Authentication and Cloud Firestore for backend services, Provider for state management, MVVM architecture for code organization, and Hive for local data storage. It also features an admin interface and a Khalti sandbox integration for testing the digital payment flow.",
    image: foodImg,
    tech: [
      "Flutter",
      "Dart",
      "Firebase Authentication",
      "Cloud Firestore",
      "Provider",
      "MVVM Architecture",
      "Hive",
      "Khalti Sandbox",
    ],
    features: [
      "User authentication",
      "Food browsing and search",
      "Shopping cart management",
      "Checkout flow",
      "Khalti sandbox payment integration",
      "Payment flow testing",
      "Order management",
      "Firebase Authentication",
      "Cloud Firestore integration",
      "Local data storage with Hive",
      "Admin interface for food and order management",
    ],
    featured: true,
    github:"https://github.com/ashutoshgurung/delivery-app",
    caseStudy: {
      overview:
        "VhokLayo is a Flutter food ordering project that combines a customer ordering experience with administrative functionality. It uses Firebase services, Provider, MVVM architecture, Hive, and a Khalti sandbox integration to test the checkout payment flow.",
      problem:
        "A food ordering application involves connected workflows such as authentication, food discovery, cart management, checkout, payment handling, and order management. These features need to work together while keeping application state and data organized.",
      solution:
        "I organized the application using MVVM architecture and Provider for state management. Firebase Authentication and Cloud Firestore support authentication and cloud data management, while Hive provides local storage. I also integrated Khalti sandbox mode to test the payment flow without processing real transactions.",
      learned:
        "This project helped me improve my Flutter development skills, apply MVVM and Provider, integrate Firebase services, manage local data with Hive, and understand third-party payment gateway integration and sandbox payment testing.",
    },
  },




{
  slug: "spotify-clone",
  title: "Spotify Clone",
  tagline: "A Flutter music app with API integration and background audio playback",
  description:
    "A Spotify-inspired music application built with Flutter and Dart. The project combines REST API integration, audio playback, and Firebase Authentication with Provider-based state management and MVVM architecture. It uses just_audio for audio playback and just_audio_background for background listening, with a focus on maintainable code and a smooth user experience.",
  image: spotifyImg,
  tech: [
    "Flutter",
    "Dart",
    "Provider",
    "MVVM Architecture",
    "REST API",
    "Firebase Authentication",
    "just_audio",
    "just_audio_background",
    "RxDart",
  ],
  features: [
    "API-driven music content",
    "Audio playback controls",
    "Background audio playback",
    "Playback progress tracking",
    "Provider-based state management",
    "MVVM architecture",
    "Firebase Authentication",
  ],
  featured: false,
  github: "https://github.com/ashutoshgurung/spotify",
  caseStudy: {
    overview:
      "A Spotify-inspired music streaming interface developed with Flutter, integrating remote data, audio playback, and authentication using a structured application architecture.",
    problem:
      "Managing remote music data, audio playback, and player state requires clear separation of responsibilities and a responsive user interface.",
    solution:
      "I structured the application using MVVM architecture, managed state with Provider, integrated REST APIs using HTTP, and implemented audio functionality with just_audio and just_audio_background. Firebase Authentication supports the authentication flow.",
    learned:
      "This project strengthened my practical skills in Flutter development, REST API integration, audio playback, reactive streams, Firebase Authentication, and maintainable application architecture.",
  },
},
{
  slug: "ecommerce-app",
  title: "E-Commerce App",
  tagline: "A Flutter shopping app with product browsing and cart management",
  description:
    "A Flutter e-commerce app built with Dart and Provider, featuring product browsing, product details, and cart state management. The project uses an MVVM-based structure to keep the UI and application logic organised.",
  image: ecommerceImg,
  tech: ["Flutter", "Dart", "Provider", "MVVM"],
  features: [
    "Browse available products",
    "View product details",
    "Manage cart state with Provider",
    "Reusable widgets and organised project structure",
  ],
  github: "https://github.com/ashutoshgurung/ecommerce",
  caseStudy: {
    overview:
      "I built this Flutter e-commerce app to practise developing a shopping experience with a clear and organised code structure. The project focuses on product browsing, product details, and cart state management using Provider.",
    problem:
      "Keeping the UI, application logic, and state management organised can become challenging as an app grows. I wanted to structure the project so each part would be easier to understand and maintain.",
    solution:
      "I used an MVVM-based structure to separate the UI from application logic and Provider to manage cart-related state. I also organised the code into reusable widgets to make the interface easier to maintain.",
    learned:
      "I improved my understanding of Flutter UI development, Provider state management, reusable widgets, and separating presentation code from application logic.",
  },



},
  {
  slug: "news-app",
  title: "News App",
  tagline: "Stay informed with a clean, API-powered news experience",
  description:
    "A Flutter news application built with Dart, featuring REST API integration to retrieve news articles and Provider for state management. The app follows MVVM architecture to separate UI components from application logic, keeping the codebase organized, maintainable, and easy to extend.",
  image: newsImg,
  tech: [
    "Flutter",
    "Dart",
    "Provider",
    "MVVM Architecture",
    "REST API",
    "HTTP",
    "JSON",
  ],
  features: [
    "API-powered news articles",
    "Dynamic news content",
    "Provider-based state management",
    "MVVM architecture",
    "JSON data handling",
    "Organized and maintainable code",
  ],
  caseStudy: {
    overview:
      "A Flutter-based news application designed to present news articles through a clean interface, using REST APIs to retrieve content and MVVM architecture to organize the application.",
    problem:
      "Displaying news from a remote API requires handling network requests, parsing JSON responses, and keeping the interface responsive while separating data and presentation logic.",
    solution:
      "I integrated a REST API to retrieve news content, used Provider to manage application state, and followed MVVM architecture to separate the UI from business and data logic.",
    learned:
      "This project strengthened my understanding of REST API integration, asynchronous programming, JSON parsing, Provider state management, and MVVM architecture in Flutter.",
  },
},

{
  slug: "netflix-clone",
  title: "Netflix Clone",
  tagline:
    "A Netflix-inspired Flutter app with movie browsing and video playback",
  description:
    "A Netflix-inspired mobile application built with Flutter and Dart. The app features a dark streaming-style interface, horizontally scrollable movie collections, movie details, and video playback. Provider is used for state management and sharing the selected movie between screens. The project focuses on building a familiar streaming experience with reusable UI components and organized application code.",
  image: netflixImg,
  tech: [
    "Flutter",
    "Dart",
    "Provider",
    "MVVM Architecture",
    "Video Playback",
  ],
  github: "https://github.com/ashutoshgurung/Netflix_app",
  features: [
    "Netflix-inspired dark user interface",
    "Horizontally scrollable movie collections",
    "Movie details and genre information",
    "Video playback using remote MP4 URLs",
    "Provider-based selected movie state",
    "Navigation between movie and detail screens",
    "Profile and additional settings screen",
  ],
  featured: false,
  caseStudy: {
    overview:
      "A Netflix-inspired mobile application developed with Flutter, featuring movie collections, a movie details screen, and remote video playback.",
    problem:
      "Creating a streaming-style interface requires organizing movie content into clear sections, providing smooth navigation between screens, and integrating video playback into the user experience.",
    solution:
      "I created a dark-themed interface with horizontally scrollable movie collections, implemented movie selection using Provider, and connected the selected movie to its detail screen. I also integrated remote MP4 video playback to test the viewing experience.",
    learned:
      "This project helped me improve my Flutter UI development, state management with Provider, screen navigation, model-based data handling, and video playback troubleshooting.",
  },
},

];

export const skillGroups = [
  { title: "Mobile Development", items: ["Flutter", "Dart", "Material Design", "Responsive UI"] },
  { title: "Backend & Database", items: ["Firebase Auth","Cloud Firestore","REST APIs",] },
  {
    title: "Architecture & State Management",
    items: ["Provider", "MVVM", "Clean Architecture", "BLoC Architecture", "Local Storage (Hive, SharedPreferences)"],
  },
  { title: "Design", items: ["UI/UX Design", "Figma"] },
];

export const journey = [
  {
    title: "BCIS Education",
    body: "Developed a strong foundation in computing, software development, and information systems through my Bachelor's studies in Computing and Information Systems.",
  },
  {
    title: "Learning Flutter & Dart",
    body: "Specialized in Flutter and Dart to build cross-platform mobile applications, strengthen programming fundamentals, and develop practical problem-solving skills.",
  },
  {
    title: "Building Real-World Projects",
    body: "Applied my knowledge by developing projects across food ordering, music streaming, news, e-commerce, and other mobile application domains.",
  },
  {
    title: "Flutter Developer Internship at Nep Tech Pal",
    body: "Gained professional experience as a Flutter Developer Intern, strengthening my mobile development skills and gaining exposure to professional development workflows.",
  },
  {
    title: "Backend Integration & State Management",
    body: "Worked with Firebase Authentication, Cloud Firestore, REST API integration, Provider, and BLoC to build structured and maintainable Flutter applications.",
  },
  {
    title: "UI/UX Design & Development",
    body: "Explored Figma and focused on building intuitive interfaces, consistent layouts, and user-friendly experiences for mobile applications.",
  },
  {
    title: "Professional Growth & Career Development",
    body: "Continuously improving my technical skills, refining my portfolio, and pursuing opportunities to contribute as a Junior Flutter Developer.",
  },
];
