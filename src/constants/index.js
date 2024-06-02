//Header constants

import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "updates",
    url: "#updates",
  },
  {
    id: "4",
    title: "Pricing",
    url: "#pricing",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#sigin",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Wilt Monitoring",
  "Control System",
  "Automation",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "PlantPulse voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for farmers to interact with the website interface hands-free.",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "PlantPulse gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's interface and behavior, making it more engaging and fun to interact with.",
    date: "June 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the your Gen AI to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "June 2024",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch accuracy, it's the perfect solution for farmers looking to plant smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Accuracy ",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 40,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Gen AI, personalized recommendations",
    price: "0",
    features: [
      "A basic chatbot that can understand basic sensor readings",
      "Personalized recommendations based on it's findings",
      "Ability to predict weather forecast without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced Gen AI, complex vision support, analytics dashboard",
    price: "2,500",
    features: [
      "Advanced personal chatbot that can understand advance  readings",
      "An analytics dashboard to track your greenhouse data",
      "Priority support to solve complex issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom Gen AI, advanced analytics, dedicated account",
    price: null,
    features: [
      "Smartest chatbot that can understand multi-greenhouse queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore advance enterprise features with low cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Monitor everyday",
    text: "Empower farmers to effortlessly monitor plant health using various sensors and deep learning algorithms for accurate insights and informed decision-making.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The device uses natural language processing to better understand plant health, providing helpful insights to enhance daily agricultural practices.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Professional insights",
    text: "Get professional feedback with generative AI designed for farmers, and learn deeply with its analytics tool to tackle agricultural challenges.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast & accurate",
    text: "Leverage cloud-based generative AI and convolutional neural networks (CNN) for fast and accurate real-time insights and recommendations tailored to farmers.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Predictive Analysis",
    text: "Utilize Long Short-Term Memory (LSTM) networks for predictive analysis, offering farmers accurate forecasts and data-driven insights to optimize agricultural outcomes.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Automated actions",
    text: "Implement real-time automation with PlantPulse systems, providing farmers with immediate, data-driven solutions to streamline operations and enhance efficiency.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#https://www.facebook.com/profile.php?id=100009434685961",
  },
];