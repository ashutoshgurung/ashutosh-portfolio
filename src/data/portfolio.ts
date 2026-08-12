import foodImg from "@/assets/project-food-ordering.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import spotifyImg from "@/assets/project-spotify.jpg";
import newsImg from "@/assets/project-news.jpg";
import futsalImg from "@/assets/project-futbook.jpg";

export const profile = {
  name: "Ashutosh Gurung",
  role: "Flutter Developer",
  email: "ashutoshgurung17@gmail.com", // TODO: replace with your real email
  github: "https://github.com/ashutoshgurung", // TODO: replace with your GitHub profile
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
    title: "Food Ordering App",
    tagline: "Restaurant discovery, cart and checkout in Flutter",
    description:
      "A Flutter food ordering application focused on restaurant discovery, food browsing, cart management, checkout, authentication, and order management.",
    image: foodImg,
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Provider", "MVVM", "Hive"],
    features: [
      "Authentication",
      "Restaurant browsing",
      "Search",
      "Hive storage",
      "Cart",
      "Checkout",
      "Order management",
      "Firebase / Firestore",
      "Payment integration",
    ],
    featured: true,
    caseStudy: {
      overview:
        "My most complete Flutter project so far — a full food ordering flow from signing in to placing and tracking an order, built on Firebase with a Provider + MVVM structure. I also integrated Hive to make frequently used data available locally and improve the experience for repeated use.",
      problem:
        "Ordering flows involve a lot of connected state: the signed-in user, the selected restaurant, the cart, and the order history. Keeping all of that consistent across screens is easy to get wrong.",
      solution:
        "I separated the app into views, view models and services. Provider exposes cart and auth state to the widget tree, while Firestore handles restaurants, menus and orders in real time. I also used Hive to cache selected data locally, so the app feels faster and remains more reliable when users revisit it offline or with a weak connection.",
      learned:
        "How to structure a Flutter app with MVVM, model Firestore collections for real read patterns, and keep UI state predictable as the app grows. I also learned how Hive can be used to store frequently accessed data locally, which improves performance and gives users a smoother experience when the connection is unstable.",
    },
  },
  {
  slug: "ecommerce-app",
  title: "E-commerce App",
  tagline: "A modern e-commerce shopping experience built with Flutter",
  description:
      "A Flutter e-commerce application featuring product browsing, product details, favourites, cart management, and Firebase authentication with Google Sign-In.",
  image: ecommerceImg,
  tech: ["Flutter", "Dart", "MVVM", "Provider", "Firebase"],
  features: [
    "Product browsing",
    "Product detail screen",
    "Favourite products",
    "Add to cart",
    "Firebase Authentication",
    "Google Sign-In",
  ],
  caseStudy: {
    overview:
        "A Flutter e-commerce application built with MVVM architecture and Provider for state management, with Firebase Authentication and Google Sign-In for user authentication.",
    problem:
        "E-commerce applications need a simple shopping flow that allows users to easily explore products, view details, save favourites, and manage their cart.",
    solution:
        "I built a structured Flutter application using MVVM and Provider, with dedicated screens for product details, favourites, and cart management. Firebase Authentication and Google Sign-In were integrated to provide a secure and convenient login experience.",
    learned:
        "Through this project, I improved my understanding of MVVM architecture, Provider state management, Firebase Authentication, Google Sign-In, reusable Flutter widgets, and managing shopping-related app state.",
  },
},
  {
  slug: "spotify-app",
  title: "Spotify Clone",
  tagline: "A music streaming app with API-powered search and playback",
  description:
      "A Flutter music streaming application built with REST API and MVVM, allowing users to search for music, discover songs, and listen to tracks through a clean and responsive interface.",
  image: spotifyImg,
  tech: ["Flutter", "Dart", "REST API", "MVVM"],
  features: [
    "Music discovery",
    "Search music",
    "Search API integration",
    "Music playback",
    "Song browsing",
    "Responsive UI",
  ],
  caseStudy: {
    overview:
        "A Spotify-inspired Flutter application focused on music discovery and playback, using REST APIs to fetch music data and MVVM architecture to keep the application structured.",
    problem:
        "Finding specific songs quickly can be difficult when music content is not organized with an efficient search experience.",
    solution:
        "I built a clean music interface where users can browse songs, search for specific music using a search API, and tap on a track to listen to it. MVVM architecture was used to separate the UI from application logic and API-related operations.",
    learned:
        "Through this project, I improved my understanding of REST API integration, MVVM architecture, API-based search, handling dynamic music data, and implementing music playback in Flutter.",
  },
},
  {
    slug: "News-App",
    title: "News App",
    tagline: "Stay updated with the latest news in a clean Flutter application",
    description:
      "A Flutter news application that allows users to browse the latest news by category and read articles through a simple and responsive interface.",
    image: newsImg,
    tech: ["Flutter", "Dart", "REST API"],
    features: [
  "Latest news",
  "Category-based browsing",
  "API integration",
  "Responsive UI",
],
    caseStudy: {
      overview:
        "A clean and responsive news app built with Flutter, featuring real-time news fetching, category-based browsing, and a simple reading experience.",
      problem:
        "Finding and browsing relevant news can be difficult when information is spread across different sources and presented in cluttered interfaces.",
      solution:
        "I built a simple and focused news interface that allows users to browse the latest articles by category and quickly access the information they are interested in.",
      learned:
      "Through this project, I improved my understanding of REST API integration, handling dynamic data in Flutter, category-based content browsing, and creating clean user-friendly interfaces.",
    },
  },
  {
    slug: "futsal-booking-app",
    title: "FUTBOOK — Futsal Booking App UI",
    tagline: "A mobile futsal booking app UI designed with Flutter and Firebase Authentication",
    description:
      "A mobile futsal booking app UI designed with Flutter, featuring a clean booking experience and Firebase Authentication for secure user sign-in.",
    image: futsalImg,
    tech: ["Flutter", "Dart", "Firebase Authentication"],
    features: [
      "User registration and login",
      "Firebase Authentication",
      "Futsal venue browsing",
      "Venue details",
      "Booking flow UI",
      "Slot selection UI",
      "Clean and responsive interface",
      "Intuitive navigation",
    ],
    caseStudy: {
      overview:
        "FUTBOOK is a futsal booking app concept designed to make it easier for users to discover futsal venues and navigate the booking process. I focused on designing and developing the user interface and frontend experience using Flutter, with Firebase Authentication integrated for user login and registration.",
      problem:
        "Finding and booking futsal venues can involve multiple steps and an unclear user experience. I wanted to create a simple and organized interface where users can easily explore venues and move through the booking flow.",
      solution:
        "I designed a clean and user-friendly booking experience with a focus on simple navigation, clear information, and intuitive interactions. The frontend was developed in Flutter, while Firebase Authentication was used to handle user sign-up and login.",
      learned:
        "Through this project, I improved my understanding of Flutter UI development, navigation, authentication integration, and creating a structured user experience for a real-world booking application.",
    },
  },
];

export const skillGroups = [
  { title: "Mobile Development", items: ["Flutter", "Dart", "Responsive UI"] },
  { title: "Backend & Database", items: ["Firebase", "Cloud Firestore", "Firebase Auth", "Google Sign-In"] },
  { title: "Architecture & Development", items: ["Provider", "MVVM", "REST APIs", "Hive", "Git", "GitHub"] },
  { title: "Design", items: ["Figma"] },
];

export const journey = [
  { title: "Education BCIS", body: "Building a foundation in computer science, programming, and information systems." },
  {
    title: "Learning Flutter & Dart",
    body: "Developing responsive and user-friendly mobile applications with Flutter and Dart.",
  },
  {
    title: "Backend & API Integration",
    body: "Working with Firebase, Firestore, Authentication, and REST APIs to connect apps with backend services.",
  },
  {
    title: "Developing Design Skills",
    body: "Applying design principles to create clean and intuitive digital experiences.",
  },
  {
    title: "Building Real-World Projects",
    body: "Turning ideas into practical applications while learning through real development challenges.",
  },
  {
    title: "Internship at Nep Tech Pal",
    body: "Gaining hands-on experience in a professional development environment.",
  },
  {
    title: "Building My Professional Portfolio",
    body: "Showcasing my projects, skills, and growth as I prepare for the next step in my career.",
  },
];
